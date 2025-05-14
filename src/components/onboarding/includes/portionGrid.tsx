import React, { useEffect, useState } from "react";
import { Flame, Drumstick, Droplet, Leaf, Utensils } from "lucide-react";
type ActivityLevel = "low" | "medium" | "high";

interface DogInput {
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
  // Step 1: Base calorie requirement per kg of body weight
  let kcalPerKg = 0;

  if (activity === "low") kcalPerKg = 70;
  else if (activity === "medium") kcalPerKg = 90;
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

const DogMealSuggester = ({ age, weight, activity }: DogInput) => {
  const [form, setForm] = useState<DogInput>({
    age: age,
    weight: weight,
    activity: activity
  });

  const [nutrition, setNutrition] = useState<Nutrition | null>(null);

  useEffect(() => {
    const result = getMealRecommendation(form);
    setNutrition(result);
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Dog Meal Portion Suggester</h2>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Get Recommendation
        </button>
      </form> */}

      {nutrition && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">🐶 Daily Nutritional Needs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-gray-600">
                <Flame className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Calories</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">{nutrition.calories} kcal</p>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-gray-600">
                <Drumstick className="w-5 h-5" />
                <span className="text-sm font-medium">Protein</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">{nutrition.protein} g</p>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-gray-600">
                <Droplet className="w-5 h-5" />
                <span className="text-sm font-medium">Fat</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">{nutrition.fat} g</p>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-gray-600">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-medium">Carbs</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">{nutrition.carbs} g</p>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition sm:col-span-2 md:col-span-1 lg:col-span-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Utensils className="w-5 h-5" />
                <span className="text-sm font-medium">Total Portion</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">
                {nutrition.portionGrams} g/day
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogMealSuggester;
