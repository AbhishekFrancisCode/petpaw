import { DogMeal } from "@/components/mealplans/mealdata";
import Link from "next/link";
import React from "react";
import DogMealSuggester from "./portionGrid";

type MealGridProps = {
  meals: DogMeal[];
};

export const MealGrid = ({ meals }: MealGridProps) => {
  return (
    <div className="p-0">
      <div className="flex flex-wrap justify-center gap-6  mx-auto">
        <DogMealSuggester age={4} weight={35} activity={"high"} />
        {meals.map((meal, index) => (
          <Link
            href="/mealplan"
            key={index}
            className="sm:w-[calc(50%-12px)] md:w-[calc(73.333%-16px)] lg:w-[calc(53.333%-16px)] xl:w-[calc(30.333%-16px)]"
          >
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 min-h-full w-full">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{meal.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{meal.subtitle}</p>
              <div className="text-sm text-gray-700 mb-4 line-clamp-3">{meal.description}</div>
              <div className="flex justify-between text-xs text-gray-600">
                <div>
                  <span className="font-medium text-gray-800">Protein: </span>
                  {meal.macroPercentages.protein}
                </div>
                <div>
                  <span className="font-medium text-gray-800">Fats: </span>
                  {meal.macroPercentages.fats}
                </div>
                <div>
                  <span className="font-medium text-gray-800">Carbs: </span>
                  {meal.macroPercentages.carbs}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
