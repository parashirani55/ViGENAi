"use client";
import React, { useState } from "react";
import SelectTopic from './_components/selectTopic';
import SelectStyle from './_components/SelectStyle';
import CustomLoading from './_components/CustomLoading';
import SelectDuration from './_components/SelectDuration';
import { Button } from "@/components/ui/button";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

function CreateNew() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [VideoScript, setVideoScript] = useState(null);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const GetVideoScript = async () => {
    console.log("formData:", formData);
    setLoading(true);

    if (!formData.topic || !formData.imageStyle || !formData.duration) {
      alert("Please select a topic, style, and duration before creating the video.");
      setLoading(false);
      return;
    }

    const prompt = `Write a script to generate a ${formData.duration} video on topic: "${formData.topic}" along with AI image prompt in ${formData.imageStyle} format for each scene. Return the result in JSON format with the following structure: an array of objects, each containing "imagePrompt" and "ContextText" fields. Ensure the response is valid JSON and contains no additional text outside the JSON structure.`;

    try {
      const response = await axios.post('/api/get-video-script', { prompt });
      console.log("Full API response:", response.data);

      let raw = response?.data?.result?.raw || response?.data?.result;

      if (typeof raw !== "string") {
        console.error("Invalid response format. Expected a raw string.");
        setLoading(false);
        return;
      }

      // Clean code block wrappers if present
      raw = raw.replace(/```json|```/g, "").trim();

      let parsedResult;
      try {
        parsedResult = JSON.parse(raw);
      } catch (jsonErr) {
        console.error("Failed to parse JSON from response:", jsonErr);
        setLoading(false);
        return;
      }

      if (!Array.isArray(parsedResult)) {
        console.error("Parsed result is not an array:", parsedResult);
        setLoading(false);
        return;
      }

      setFormData((prev) => ({ ...prev, script: parsedResult }));
      setVideoScript(parsedResult);

      const audioId = await GenrateAudioFile(parsedResult);
      console.log("Audio generated with ID:", audioId);
    } catch (error) {
      console.error("Axios request failed:", error);
    }

    setLoading(false);
  };

  const GenrateAudioFile = async (scriptArray) => {
    const uniqueId = uuidv4();

    if (!Array.isArray(scriptArray)) {
      console.error("Script is not a valid array.");
      return;
    }

    const script = scriptArray.map(item => item.ContextText).join('. ') + '.';
    console.log("Final script to send to ElevenLabs:", script);

    try {
      const response = await fetch('/api/genrateAudio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: script, id: uniqueId }),
      });

      if (!response.ok) {
        throw new Error("TTS API failed.");
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audio.play();

      return uniqueId;
    } catch (error) {
      console.error("Error generating or playing audio:", error.message);
      return null;
    }
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-red-400 text-center">Create New</h2>
      <div className="mt-10 shadow-md p-10">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button
          className="mt-10 w-full bg-red-500 hover:bg-red-600"
          onClick={GetVideoScript}
        >
          Create Short Video
        </Button>
      </div>
      <CustomLoading loading={loading} />
    </div>
  );
}

export default CreateNew;
