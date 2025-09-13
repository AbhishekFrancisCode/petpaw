"use client";

import { useMemo, useState } from "react";
import Heading from "@/sb-ui/h1/h1";
import { MealPlanPageStrings } from "@/constants/title-constants";
import { DogMeal, FoodType, Mealdata, MealPlanData } from "../mealdata";
import DogNutritionLabel from "./nutrition-table";

export default function FoodTypeSelection() {
  const data = MealPlanPageStrings.firstSection;

  const options = {
    fresh: [
      data.mealdata[1],
      data.mealdata[2],
      data.mealdata[3],
      data.mealdata[4],
      data.mealdata[5]
    ] as const
  };

  const [selectedType, setSelectedType] = useState<FoodType>("");
  const [selectedOption, setSelectedOption] = useState<Mealdata>(options.fresh[0]);
  const [hoveredPart, setHoveredPart] = useState<number | null>(null);

  const filteredData = useMemo(() => {
    return MealPlanData.meals.filter((item: DogMeal) => {
      return item.baseProtin === selectedOption.value;
    });
  }, [selectedOption]);

  // Example nutrition data for each slice
  const nutritionFacts: Record<number, any> = {
    1: { protein: 20, fat: 10, carbs: 30, calories: 200 },
    2: { protein: 15, fat: 8, carbs: 25, calories: 180 },
    3: { protein: 25, fat: 12, carbs: 20, calories: 220 }
  };

  return (
    <div className="px-8 max-w-7xl mx-auto">
      <Heading text={data.title} cls={`text-[${"#028391"}]`} />
      {data.sub_title && <div className={`text-black text-center pt-2`}>{data.sub_title}</div>}

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-center mt-8">
        {/* Options */}
        <div className="space-y-2 md:col-span-2 order-2 md:order-1 ">
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

        {/* Bowl Image with hover parts */}
        <div className="flex justify-center col-span-4 order-1 md:order-2">
          <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden">
            {/* Bowl image */}
            <img
              src={selectedOption.imageUrl}
              alt="Food bowl"
              className="w-full h-full object-cover rounded-full"
            />

            {/* SVG overlay for 3 slices */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Slice 1 */}
              <path
                d="M50 50 L50 0 A50 50 0 0 1 100 50 Z"
                fill="transparent"
                onMouseEnter={() => setHoveredPart(1)}
                onMouseLeave={() => setHoveredPart(null)}
                style={{ cursor: "pointer" }}
              />
              {/* Slice 2 */}
              <path
                d="M50 50 L100 50 A50 50 0 0 1 50 100 Z"
                fill="transparent"
                onMouseEnter={() => setHoveredPart(2)}
                onMouseLeave={() => setHoveredPart(null)}
                style={{ cursor: "pointer" }}
              />
              {/* Slice 3 */}
              <path
                d="M50 50 L50 100 A50 50 0 0 1 0 50 Z"
                fill="transparent"
                onMouseEnter={() => setHoveredPart(3)}
                onMouseLeave={() => setHoveredPart(null)}
                style={{ cursor: "pointer" }}
              />
            </svg>

            {/* Hover Overlay */}
            {hoveredPart && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center animate-fadeIn">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <DogNutritionLabel meals={nutritionFacts[hoveredPart]} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
