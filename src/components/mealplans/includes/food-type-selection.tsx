"use client";

import Faq from "@/app/(public_routes)/faq/page";
import { useState } from "react";
import Image from "next/image";
import { FoodOption, FoodType, Mealdata, mealdatas } from "../mealdata";

export default function FoodTypeSelection() {
  const [selectedFood, setSelectedFood] = useState<string>(mealdatas[0].imageUrl);

  const [selectedType, setSelectedType] = useState<FoodType>("");
  const [selectedPrep, setSelectedPrep] = useState("");

  const options = {
    fresh: [
      mealdatas[1],
      mealdatas[2],
      mealdatas[3],
      mealdatas[4],
      mealdatas[5],
      mealdatas[6]
    ] as const
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-4">A Healthy Choice</h1>
      <p className="text-center text-gray-700 mb-8">
        Our vet-formulated, human-grade recipes are made to mix and match, giving your pup endless
        options.
      </p>

      <div className="grid grid-cols-8 gap-8 items-start mb-8">
        <div className="space-y-2 col-span-2">
          <div className="flex mb-4 w-full place-content-center">
            <h2 className="text-xl">Meals</h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            {options.fresh.map((option) => (
              <div key={`option-${option.name}`} className="min-w-[160px]">
                <button
                  onClick={() => {
                    setSelectedType("Vegetarian");
                    setSelectedPrep(option.name);
                    setSelectedFood(option.imageUrl);
                  }}
                  className={`flex min-w-full px-6 py-4 rounded-full transition-colors place-content-start items-center ${
                    selectedType === "Vegetarian" && selectedPrep === option.name
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    checked={selectedPrep === option.name}
                    onChange={() => {
                      setSelectedType("Vegetarian"); // Set the type (static here, can be dynamic)
                      setSelectedPrep(option.name); // Set the name of the selected prep
                      setSelectedFood(option.imageUrl); // Set the image URL
                    }}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="pl-8">{option.name}</div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center col-span-4">
          <div className="min-w-[500px] h-[500px]">
            <img
              src={selectedFood}
              alt="Food bowl"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="space-y-2 col-span-2  place-content-center">
          <div className="flex flex-col items-center gap-6"></div>
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
