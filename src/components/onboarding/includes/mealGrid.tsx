import { DogMeal } from "@/components/mealplans/mealdata";
import Link from "next/link";
import React from "react";
import DogMealSuggester, { ActivityLevel } from "./portionGrid";
import { Formdata } from "@/store/interfaces/form-data";
import WhatsAppButton from "@/utils/whatsapp-connect";

type MealGridProps = {
  meals: DogMeal[];
  petdata: Formdata;
};

export const MealGrid = ({ meals, petdata }: MealGridProps) => {
  return (
    <div className="sb-container md:p-2 min-h-[calc(100vh-180px)] flex flex-col">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="md:flex-shrink-0 h-fit">
          <DogMealSuggester
            name={petdata.petname!}
            age={Number(petdata.age)}
            weight={Number(petdata.weight)}
            activity={petdata.activity_level as ActivityLevel}
          />
        </div>
        {/* <div className="w-full pb-4 h-fit overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-600 scrollbar-thumb-rounded-full">
          <div className="flex flex-col md:flex-row md:flex-nowrap gap-2 h-full">
            {meals.map((meal, index) => (
              <Link
                href={`/product/${meal.id}`}
                key={index}
                className="min-w-[280px] max-w-xs w-[80vw] sm:w-[320px] md:w-[340px] lg:w-[360px] xl:w-[380px] min-h-full"
              >
                <div className="flex flex-col justify-between bg-white rounded-2xl shadow hover:shadow-lg transition p-4 min-h-full w-full">
                  <div className="flex flex-col gap-2">
                    <img
                      src={meal.image}
                      alt={meal.title}
                      className="max-w-full max-h-60 object-fit rounded-xl mb-2"
                    />
                    <p className="text-md font-semibold text-[#EE9422]">{meal.title}</p>
                    <p className="text-sm text-[#028391]">{meal.subtitle}</p>
                    <div className="text-xs text-gray-700 mb-4 line-clamp-3">
                      {meal.description}
                    </div>
                  </div>
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
        </div> */}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 gap-3 md:gap-6 py-6 max-w-[85%] mx-auto">
        <Link href="/product">
          <button className="bg-[#EE9422] rounded-md min-h-16 px-10 text-[#FFF8EF] font-medium hover:opacity-80 min-w-[220px]">
            Try a Free Sample
          </button>
        </Link>
        <WhatsAppButton />
      </div>
    </div>
  );
};
