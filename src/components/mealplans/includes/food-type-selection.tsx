"use client";

import Faq from "@/app/(public_routes)/faq/page";
import { useMemo, useState } from "react";
import Image from "next/image";
import { DogMeal, FoodOption, FoodType, Mealdata, mealdatas, MealPlanData } from "../mealdata";
import DogNutritionLabel from "./nutrition-table";
import FullyDynamicFoodCircle from "./testing";
import { Title } from "@/components/common/title-comp";
import { MealPlanPageStrings } from "@/constants/title-constants";
import Heading from "@/sb-ui/h1/h1";

export default function FoodTypeSelection() {
  const data = MealPlanPageStrings.firstSection;
  const options = {
    fresh: [
      data.mealdata[1],
      data.mealdata[2],
      data.mealdata[3],
      data.mealdata[4],
      data.mealdata[5]
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
    <div className="px-8 max-w-7xl mx-auto">
      <Heading text={data.title} cls={`text-[${"#028391"}]`} />
      {data.sub_title && <div className={`text-black  text-center pt-2`}>{data.sub_title}</div>}

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-center mt-8">
        <div className="space-y-2 md:col-span-2 order-2 md:order-1 ">
          {/* <div className="flex mb-4 md:w-full place-content-end">
            <h2 className="text-xl md:max-w-[180px] md:min-w-[160px] text-center">Meals</h2>
          </div> */}
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
                      ? "bg-[#028391] text-primary-foreground"
                      : "bg-[#f1e8dc] hover:bg-accent border border-border"
                  }`}
                >
                  <input
                    type="radio"
                    checked={selectedOption.name === option.name}
                    className="w-4 h-4 text-[#028391] border-[#f1e8dc]/35 focus:[#EE9422]/35 focus:ring-2"
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
