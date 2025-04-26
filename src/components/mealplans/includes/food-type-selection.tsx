"use client";

import Faq from "@/app/(public_routes)/faq/page";
import { useMemo, useState } from "react";
import Image from "next/image";
import { DogMeal, FoodOption, FoodType, Mealdata, mealdatas, MealPlanData } from "../mealdata";
import DogNutritionLabel from "./nutrition-table";
import FullyDynamicFoodCircle from "./testing";
import { Title } from "@/components/common/title-comp";

export default function FoodTypeSelection() {
  const options = {
    fresh: [
      mealdatas[1],
      mealdatas[2],
      mealdatas[3],
      mealdatas[4],
      mealdatas[5]
      // mealdatas[6]
    ] as const
  };
  const [selectedType, setSelectedType] = useState<FoodType>("");
  const [selectedOption, setSelectedOption] = useState<Mealdata>(options.fresh[0]);

  const filtredData = useMemo(() => {
    return MealPlanData.meals.filter((item: DogMeal) => {
      return item.baseProtin === selectedOption.value;
    });
  }, [selectedOption]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Title
        variant="h2"
        textStyle="primary"
        className={`text-[#028391] py-1 text-center px-6 md:px-4`}
      >
        A Healthy Choice
      </Title>
      {/* <h1 className="text-3xl font-semibold text-center mb-4">A Healthy Choice</h1> */}
      <p className="text-center text-gray-700 mb-8">
        Our vet-formulated, human-grade recipes are made to mix and match, giving your pup endless
        options.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-start mb-8">
        <div className="space-y-2 md:col-span-2 order-2 md:order-1 ">
          <div className="flex mb-4 md:w-full place-content-end">
            <h2 className="text-xl md:max-w-[180px] md:min-w-[160px] text-center">Meals</h2>
          </div>
          <div className="flex flex-wrap md:flex-col place-content-center md:place-content-end items-center gap-6 min-w-[360px] md:min-w-full">
            {options.fresh.map((option: Mealdata) => (
              <div
                key={`option-${option.name}`}
                className="max-w-[120px] min-w-[120px] md:max-w-[180px] md:min-w-[160px]"
              >
                <button
                  onClick={() => {
                    setSelectedOption(option);
                    setSelectedType("Non-Vegetarian");
                    // setSelectedFood(option.imageUrl);
                  }}
                  className={`flex min-w-full px-3 py-2 md:px-6 md:py-4 rounded-full transition-colors place-content-start items-center ${
                    selectedType === "Vegetarian" && selectedOption.name === option.name
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    checked={selectedOption.name === option.name}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="pl-2 md:pl-8">{option.name}</div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center col-span-4 order-1 md:order-2">
          {/* <FullyDynamicFoodCircle /> */}
          <img
            src={selectedOption.imageUrl}
            alt="Food bowl"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* <div className="space-y-2 col-span-2  place-content-center md:order-3">
          <DogNutritionLabel meals={filtredData} />
        </div> */}
      </div>
      {/* 
      <p className="text-center text-gray-600">
        {!selectedType
          ? "EMPTY BOWL — Who's hungry?? Make a selection to discover our meal prep options."
          : `Selected: ${selectedType} ${selectedOption.name}`}
      </p> */}
    </div>
  );
}
