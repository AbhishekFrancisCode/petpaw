"use client";

import Faq from "@/app/(public_routes)/faq/page";
import { useState } from "react";
import Image from "next/image";

type FoodType = "fresh" | "baked" | "";
type FoodOption = "Beef" | "Chicken" | "Turkey" | "Lamb" | "Pork";

type FoodOptions = {
  [key: string]: {
    [key: string]: string; // Key-value pairs for food type and image URL
  };
};

export default function FoodTypeSelection() {
  const [selectedFood, setSelectedFood] = useState<string>("");

  const [selectedType, setSelectedType] = useState<FoodType>("");
  const [selectedPrep, setSelectedPrep] = useState<FoodOption | "">("");

  const options = {
    fresh: ["Beef", "Chicken", "Turkey", "Lamb", "Pork"] as const,
    baked: ["Beef", "Chicken"] as const
  };
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-4">A Healthy Choice</h1>
      <p className="text-center text-gray-700 mb-8">
        Our vet-formulated, human-grade recipes are made to mix and match, giving your pup endless
        options.
      </p>

      <div className="grid grid-cols-3 gap-8 items-center mb-8">
        <div className="space-y-2">
          <div className="flex justify-between mb-4 px-12">
            <h2 className="text-xl">Fresh</h2>
          </div>
          {options.fresh.map((option) => (
            <button
              key={`fresh-${option}`}
              onClick={() => {
                setSelectedType("fresh");
                setSelectedPrep(option);
              }}
              className={`w-full px-4 py-2 rounded-full transition-colors ${
                selectedType === "fresh" && selectedPrep === option
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64">
            {/* <Image
              alt=""
              src={"}
              fill
              className="w-full max-w-[500px] max-h-[500px] h-full object-cover rounded-full shadow-lg relative"
            /> */}
            <img
              src="https://ik.imagekit.io/funlogic/gut_health.png?updatedAt=1730050815088"
              alt="Food bowl"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between mb-4 px-12">
            <h2 className="text-xl">Baked</h2>
          </div>
          {options.baked.map((option) => (
            <button
              key={`baked-${option}`}
              onClick={() => {
                setSelectedType("baked");
                setSelectedPrep(option);
              }}
              className={`w-full px-4 py-2 rounded-full transition-colors ${
                selectedType === "baked" && selectedPrep === option
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-600">
        {!selectedType
          ? "EMPTY BOWL — Who's hungry?? Make a selection to discover our meal prep options."
          : `Selected: ${selectedType} ${selectedPrep}`}
      </p>
    </div>
  );
}
