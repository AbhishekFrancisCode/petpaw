import React, { useState } from "react";
import { MacroPercentages } from "@/store/interfaces/product";

const DogNutritionTable = ({ nutritionData }: { nutritionData: MacroPercentages }) => {
  return (
    <div className="flex flex-col space-y-4 w-full max-w-2xl">
      <div className="mb-6">
        <table className="w-full border-collapse">
          <thead></thead>
          <tbody>
            <tr key={"item"} className={"bg-white"}>
              <td className="p-3 border border-gray-200 font-medium">{nutritionData.protein}</td>
              <td className="p-3 border border-gray-200">{nutritionData.carbs}</td>
              <td className="p-3 border border-gray-200">{nutritionData.fats}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DogNutritionTable;
