"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function SelectTopic({ onUserSelect }) {

  const Options = [
    "Custom Prompt",
    "Random Ai Story",
    "Scary Story",
    "Historical Facts",
    "Bed Time Story",
    "Motivational",
    "Fun Facts",
  ];
  const [SelectedOption, setSelectedOption] = useState();
  return (
    <div>
      <h2 className="font-bold text-xl text-red-400">Content</h2>

      <p className="text-gray-500 ">What is topic of your video</p>

      <Select onValueChange={(value) => 
        {setSelectedOption(value)
            value!='Custom Prompt'&&onUserSelect('topic',value)
        }}>



        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Content type" />
        </SelectTrigger>
        <SelectContent>
          {Options.map((item,index ,value) => (
            <SelectItem value={item} key={index}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {SelectedOption === "Custom Prompt" && (
        <Textarea
          className="mt-3"
          onChange={(e)=>onUserSelect('topic',e.target.value)}
          placeholder="Write Prompt which you want to genrate video"
        />
      )}
    </div>
  );
}

export default SelectTopic;
