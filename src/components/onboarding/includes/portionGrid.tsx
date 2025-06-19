import React, { useEffect, useState } from "react";
import { Flame, Drumstick, Droplet, Leaf, Utensils } from "lucide-react";
import { twMerge } from "tailwind-merge";
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

  return (
    <div className="p-4 max-w-[33rem] shadow bg-[#EE9422] rounded-2xl min-w-full md:min-w-[430px]">
      <h2 className="text-xl text-[#333333] font-bold mb-4">{`${name}'s Meal Portion`}</h2>
      {/* <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Age (years):</label>
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            name="weight"
            type="number"
            value={form.weight}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          />
        </div>
        <div>
          <label>Activity Level:</label>
          <select
            name="activity"
            value={form.activity}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-#333333 px-4 py-2 rounded">
          Get Recommendation
        </button>
      </form> */}

      {nutrition && (
        <div className="mt-4">
          <h3 className="text-1xl font-bold mb-6 text-[#333333]">Daily Nutritional Needs</h3>
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
              icon={<Utensils className="w-8 h-8" color="#028391" />}
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
