import React, { useState } from "react";
import { DogMeal, DogNutritionLabelProps } from "../mealdata";
import NutritionInfo from "./nutrition-info";

const DogNutritionLabel = ({ meals }: DogNutritionLabelProps) => {
  const [selectedMealId, setSelectedMealId] = useState<number>(1);

  const selectedMeal = meals.find((meal: any) => meal.id === selectedMealId) || meals[0];

  return (
    <div className="flex flex-col space-y-4 w-full max-w-2xl">
      <div className=" rounded-lg">
        <div className="mb-2 text-xl">{`Select Meal`}</div>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white text-[12px] focus:ring-none focus:border-gray-400 focus:ring-white "
          value={selectedMealId}
          onChange={(e) => setSelectedMealId(Number(e.target.value))}
        >
          {meals.map((meal: DogMeal) => (
            <option key={meal.id} value={meal.id} className="text-[12px]">
              {meal.name} ({meal.totalWeight})
            </option>
          ))}
        </select>
      </div>

      <div className="bg-black text-white p-6 rounded-lg">
        <NutritionInfo meals={selectedMeal} />
        <div className="flex flex-col justify-between items-left mb-2">
          <div className="text-md font-bold">TYPICAL VALUES</div>
          <div className="flex space-x-6 justify-between">
            <div>Dog Nutrition</div>
            <div>100g</div>
          </div>
        </div>

        <div className="h-1 bg-purple-600 mb-4"></div>

        {selectedMeal &&
          selectedMeal.nutritionData.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <div className={item.highlighted ? "font-bold" : ""}>{item.name}</div>
                <div className="flex space-x-12">
                  <div className="w-16 text-right text-gray-400">{item.valuesPer100g}</div>
                  {/* <div className="w-16 text-right">{item.valuesPerServing}</div> */}
                </div>
              </div>

              {item.subItems?.map((subItem: any, subIndex: any) => (
                <React.Fragment key={`${index}-${subIndex}`}>
                  <div className="flex justify-between py-1 border-b border-gray-800 pl-4">
                    <div className="text-gray-400">{subItem.name}</div>
                    <div className="flex space-x-12">
                      <div className="w-16 text-right text-gray-400">{subItem.valuesPer100g}</div>
                      {/* <div className="w-16 text-right">{subItem.valuesPerServing}</div> */}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default DogNutritionLabel;
