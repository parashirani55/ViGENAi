import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function SelectDuration({ onUserSelect }) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="mt-7">
      <h2 className="font-bold text-xl text-red-400">Duration</h2>
      <p className="text-gray-500 ">Select Duration for your video</p>
      <Select
        value={selectedOption}
        onValueChange={(value) => {
          setSelectedOption(value);
          value !== "Custom Prompt" && onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30 Seconds">30 Sec</SelectItem>
          <SelectItem value="60 Seconds">60 Sec</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDuration;
