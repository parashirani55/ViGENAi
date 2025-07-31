import Image from "next/image";
import React, { useState } from "react";

function SelectStyle({onUserSelect}) {
  const styleOption = [
    { name: "Realistic", image: "/images/real.jpg" },
    { name: "Cartoon", image: "/images/cartoon.jpg" },
    { name: "Comic", image: "/images/Comic.jpg" },
    { name: "WaterColor", image: "/images/waterColor.jpg" },
    { name: "GTA", image: "/images/gta.jpg" },
  ];

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <h2 className="font-bold text-xl text-red-400">Style</h2>
      <p className="text-gray-500">Select your video style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-3 cursor-pointer">
        {styleOption.map((item, index) => (
          <div
            key={index}
            className={`relative group aspect-[3/4] overflow-hidden rounded-lg ${selectedOption==item.name&&'border-7 rounded-xl border-red-700'}`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onClick={() => {
                setSelectedOption(item.name)
                onUserSelect('imageStyle',item.name);
            }}
            />
            <h2 className="absolute w-full p-1 bg-black bottom-0 text-amber-100 text-center text-sm">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyle;
