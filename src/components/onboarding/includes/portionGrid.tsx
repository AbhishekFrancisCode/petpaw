import React, { useEffect, useRef, useState } from "react";
import { Flame, Drumstick, Droplet, Leaf, Utensils, Share2 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import html2canvas from "html2canvas";
export type ActivityLevel = "Low" | "Moderate" | "High";

interface DogInput {
  name: string;
  age: number; // in years
  weight: number; // in kg
  activity: ActivityLevel;
}

interface Nutrition {
  calories: number; // kcal/day
  protein: number; // grams/day
  fat: number; // grams/day
  carbs: number; // grams/day
  portionGrams: number; // total food in grams/day
}

const getMealRecommendation = ({ age, weight, activity }: DogInput): Nutrition => {
  console.log(age, weight, activity);
  // Step 1: Base calorie requirement per kg of body weight
  let kcalPerKg = 0;

  if (activity === "Low") kcalPerKg = 70;
  else if (activity === "Moderate") kcalPerKg = 90;
  else kcalPerKg = 110;

  // Puppies need more energy
  if (age < 1) kcalPerKg *= 1.5;

  const calories = Math.round(kcalPerKg * weight);

  // Step 2: Macronutrient distribution (based on % of calories)
  const proteinPercent = 0.25;
  const fatPercent = 0.3;
  const carbPercent = 0.45;

  const protein = Math.round((calories * proteinPercent) / 4); // 4 kcal/g
  const fat = Math.round((calories * fatPercent) / 9); // 9 kcal/g
  const carbs = Math.round((calories * carbPercent) / 4); // 4 kcal/g

  const portionGrams = protein + fat + carbs;

  return { calories, protein, fat, carbs, portionGrams };
};

const DogMealSuggester = ({ name, age, weight, activity }: DogInput) => {
  const [form, setForm] = useState<DogInput>({
    name: name,
    age: age,
    weight: weight,
    activity: activity
  });

  const [nutrition, setNutrition] = useState<Nutrition | null>(null);

  useEffect(() => {
    console.log(name);
    const result = getMealRecommendation(form);
    setNutrition(result);
  }, []);

  const componentRef = useRef(null);

  const handleDownloadImage = async () => {
    if (!componentRef.current) return;
    const canvas = await html2canvas(componentRef.current);
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `${name}-meal-suggestion.png`;
    link.click();
  };

  return (
    <div
      ref={componentRef}
      className="p-4 max-w-[33rem] shadow bg-[#028391] rounded-2xl min-w-full md:min-w-[430px] !m-0"
    >
      <div className="flex justify-between">
        <h2 className="text-xl text-[#ffffff] font-bold mb-4">{`${name}'s Meal Portion`}</h2>
        <Share2 className="w-6 h-6" color="#ffffff" onClick={handleDownloadImage} />
      </div>
      {nutrition && (
        <div className="mt-4">
          <h3 className="text-1xl font-bold mb-6 text-[#ffffff]">Daily Nutritional Needs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <NutritionCard
              icon={<Flame className="w-8 h-8" color="#EE9422" />}
              label="Calories"
              value={nutrition.calories}
              unit="kcal"
            />

            <NutritionCard
              icon={<Drumstick className="w-8 h-8" color="#028391" />}
              label="Protein"
              value={nutrition.protein}
              unit="g"
            />

            <NutritionCard
              icon={<Droplet className="w-8 h-8" color="#028391" />}
              label="Fat"
              value={nutrition.fat}
              unit="g"
            />

            <NutritionCard
              icon={<Leaf className="w-8 h-8" color="#028391" />}
              label="Carbs"
              value={nutrition.carbs}
              unit="g"
            />

            <NutritionCard
              icon={<Utensils className="w-8 h-8" color="#EE9422" />}
              label="Total Portion"
              value={nutrition.portionGrams}
              unit="g/day"
              className="sm:col-span-2 md:col-span-1 lg:col-span-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DogMealSuggester;

type NutritionCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  unit?: string;
  className?: string;
};

const NutritionCard = ({ icon, label, value, unit, className }: NutritionCardProps) => {
  return (
    <div
      className={twMerge(
        "bg-white border rounded-xl shadow-sm hover:shadow-md transition pt-4 pb-2",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-gray-600">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="text-2xl text-center font-bold text-gray-800 mt-2 min-w-full">
        {value} {unit}
      </p>
    </div>
  );
};
