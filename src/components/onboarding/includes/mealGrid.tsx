import { DogMeal } from "@/components/mealplans/mealdata";
import Link from "next/link";
import React from "react";
import DogMealSuggester, { ActivityLevel } from "./portionGrid";
import { Formdata } from "@/store/interfaces/form-data";

type MealGridProps = {
  meals: DogMeal[];
  petdata: Formdata;
};

export const MealGrid = ({ meals, petdata }: MealGridProps) => {
  return (
    <div className="px-2">
      <div className="flex items-center mx-auto gap-4 bg-slate-500">
        <DogMealSuggester
          name={petdata.petname!}
          age={Number(petdata.age)}
          weight={Number(petdata.weight)}
          activity={petdata.activity_level as ActivityLevel}
        />
        <div className="w-full overflow-x-auto">
          <div className="flex flex-nowrap gap-6">
            {meals.map((meal, index) => (
              <Link
                href={`/product/${meal.id}`}
                key={index}
                className="min-w-[280px] max-w-xs w-[80vw] sm:w-[320px] md:w-[340px] lg:w-[360px] xl:w-[380px] min-h-full"
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
      </div>
    </div>
  );
};
