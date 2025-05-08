import { DogMeal } from "@/components/mealplans/mealdata";
import Link from "next/link";
import React from "react";

type MealGridProps = {
  meals: DogMeal[];
};

export const MealGrid = ({ meals }: MealGridProps) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-6 max-w-[1280px]">
        {meals.map((meal, index) => (
          <Link href={"/mealplan"} key={index}>
            <div
              key={meal.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-32 object-cover rounded-xl mb-4"
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
