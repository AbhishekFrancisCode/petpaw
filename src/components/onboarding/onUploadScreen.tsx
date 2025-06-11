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
import DogMealSuggester from "./includes/portionGrid";

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

  //TODO
  function filterMeals(pet: Formdata, mealPlans: DogMeal[]) {
    const age = parseInt(pet.age?.toString() || "0");
    const weight = parseFloat(pet.weight || "0");
    const isSenior = age >= 7;
    const isOverweight = weight > 40;
    const lowActivity = (pet.activity_level ?? "").toLowerCase().includes("low");

    const allergyKeywords = [...dogAllergens];
    const allergies = (pet.allergies ?? [])
      .filter((item) => allergyKeywords.includes(item.toLowerCase()))
      .map((a) => a.toLowerCase());
    console.log("allergies", allergies);

    return mealPlans.filter((meal) => {
      const containsAllergen = meal.allergies.some((ingredient) =>
        allergies.some((allergy) => ingredient.toLowerCase().includes(allergy))
      );
      if (containsAllergen) return false;

      if (isOverweight || lowActivity) {
        return meal.name.toLowerCase().includes("grain free");
      } else if (isSenior) {
        return (pet.preferred_foods ?? []).includes("Senior Dog Food");
      } else {
        return true; // Allow all if no special needs
      }
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
