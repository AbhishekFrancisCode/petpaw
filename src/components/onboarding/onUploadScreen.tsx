"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import ProgressTracker from "./includes/onbording-flow.tsx/progress-tracker";
import { Control, UseFormGetValues } from "react-hook-form";
import { Formdata } from "@/store/interfaces/form-data";
import { DogMeal, MealPlanData } from "../mealplans/mealdata";
import { MealGrid } from "./includes/mealGrid";
import { dogAllergens } from "./includes/onbording-flow.tsx/pet-details/includes/petAllergiestypesStep";
import { useRouter } from "next/navigation";
import DogMealSuggester, { ActivityLevel } from "./includes/portionGrid";

export interface StepProps {
  control: Control<Formdata>;
  getValues?: UseFormGetValues<Formdata>; // 👈 Add this line
}

export default function OnLoadingingPage({ control, getValues }: StepProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [recommendMeals, setRecommendMeals] = useState<DogMeal[]>([]);
  const router = useRouter();
  const values = getValues?.();
  useEffect(() => {
    console.log("values", values);
  }, [values]);

  function filterMeals(pet: Formdata, mealPlans: DogMeal[]): DogMeal[] {
    const age = parseInt(pet.age?.toString() || "0");
    const weight = parseFloat(pet.weight || "0");
    const isSenior = age >= 7;
    const isOverweight = weight > 40;
    const activityLevel = (pet.activity_level ?? "") as ActivityLevel;
    const lowActivity = activityLevel === "Low";

    // Normalize and filter allergies based on known list
    const allergies = (pet.allergies ?? [])
      .map((a) => a.trim().toLowerCase())
      .filter((a) => dogAllergens.map((d) => d.toLowerCase()).includes(a));

    // Normalize preferred foods to lowercase
    const preferredFoods = (pet.preferred_foods ?? []).map((f) => f.toLowerCase());

    return mealPlans.filter((meal) => {
      // Check if meal contains any known allergens
      const containsAllergen = meal.allergies.some((ingredient) =>
        allergies.some((allergy) => ingredient.toLowerCase().includes(allergy))
      );
      if (containsAllergen) return false;

      // Check if any of the preferred foods are matched in meal name or description
      const matchesPreference = preferredFoods.some(
        (pref) =>
          meal.name.toLowerCase().includes(pref) || meal.description.toLowerCase().includes(pref)
      );

      // Filter logic based on pet profile
      if (isOverweight || lowActivity) {
        return meal.name.toLowerCase().includes("grain free") || matchesPreference;
      }

      if (isSenior) {
        return matchesPreference || meal.name.toLowerCase().includes("senior");
      }

      // Default: allow if it matches any preference or no special condition
      return matchesPreference || true;
    });
  }

  const handleGenrate = () => {
    if (!values) return;

    try {
      // Save pet data to localStorage
      localStorage.setItem("petData", JSON.stringify(values));

      const recommended = filterMeals(values, MealPlanData.meals);
      console.log("recommended", recommended);

      // Save recommended meals
      localStorage.setItem("recommendedMeals", JSON.stringify(recommended));

      // If saving is successful, update state and redirect
      setRecommendMeals(recommended);
      router.push("/onboarding/portion-suggest");
    } catch (error) {
      console.error("Failed to store data in localStorage:", error);
      // Don't do anything else if storage fails
    }
  };

  return (
    <div className="flex flex-col min-w-full min-h-screen place-items-center max-h-screen overflow-x-auto">
      <div className="flex min-w-full place-content-center">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Review Your Pet's Info</h2>
          <ul className="space-y-2">
            {/* <li>
                <strong>Name:</strong> {values!.name}
              </li>
              <li>
                <strong>Email:</strong> {values!.email}
              </li> */}
            <li>
              <strong>Pet Name:</strong> {values!.petname}
            </li>
            <li>
              <strong>Gender:</strong> {values!.gender}
            </li>
            <li>
              <strong>Age:</strong> {values!.age}
            </li>
            <li>
              <strong>Breed:</strong> {values!.breed}
            </li>
            <li>
              <strong>Weight:</strong> {values!.weight}
            </li>
            <li>
              <strong>Activity Level:</strong> {values!.activity_level}
            </li>
            <li>
              <strong>Body Type:</strong> {values!.body_shape}
            </li>
            <li>
              <strong>Preferred Food:</strong> {values!.preferred_foods?.join(", ")}
            </li>
            <li>
              <strong>Allergies:</strong> {values!.allergies?.join(", ")}
            </li>
          </ul>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleGenrate}
              className="bg-[#EE9422] hover:bg-gray-300 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Genarate Meal Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
