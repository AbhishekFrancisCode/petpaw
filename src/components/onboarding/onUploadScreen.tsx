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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  PawPrint,
  User,
  Heart,
  Calendar,
  Weight,
  Activity,
  Utensils,
  AlertTriangle,
  Sparkles
} from "lucide-react";

export interface StepProps {
  control: Control<Formdata>;
  getValues?: UseFormGetValues<Formdata>; // 👈 Add this line
}

const InfoItem = ({ icon: Icon, label, value, variant = "default" }: any) => (
  <div className="flex items-center space-x-3 p-2 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-200 border border-slate-200/50">
    <div
      className={`p-2 rounded-full ${
        variant === "primary"
          ? "bg-blue-100 text-blue-600"
          : variant === "secondary"
            ? "bg-purple-100 text-purple-600"
            : variant === "success"
              ? "bg-green-100 text-green-600"
              : variant === "warning"
                ? "bg-amber-100 text-amber-600"
                : variant === "danger"
                  ? "bg-red-100 text-red-600"
                  : "bg-slate-100 text-slate-600"
      }`}
    >
      <Icon size={14} />
    </div>
    <div className="flex-1">
      <p className="text-[12px] font-medium text-slate-600 mb-1">{label}</p>
      <p className="text-[12px] font-semibold text-slate-900">{value}</p>
    </div>
  </div>
);

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

  const handleGenerate = () => {
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
    <div className="flex flex-col w-full">
      <div className="w-full max-w-4xl mx-auto p-4 flex justify-center">
        <Card className="sb-container shadow-xl bg-transparent w-full">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold bg-[#028391] bg-clip-text text-transparent">
              Review Your Pet's Info
            </CardTitle>
            <p className="text-slate-600 mt-2">
              Let's make sure everything looks perfect for your furry friend
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <InfoItem icon={User} label="Pet Name" value={values!.petname} variant="primary" />
              <InfoItem icon={Heart} label="Gender" value={values!.gender} variant="secondary" />
              <InfoItem icon={Calendar} label="Age" value={values!.age} variant="success" />
              <InfoItem icon={PawPrint} label="Breed" value={values!.breed} variant="primary" />
              <InfoItem icon={Weight} label="Weight" value={values!.weight} variant="warning" />
              <InfoItem
                icon={Activity}
                label="Activity Level"
                value={values!.activity_level}
                variant="success"
              />
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <InfoItem
                icon={User}
                label="Body Type"
                value={values!.body_shape}
                variant="secondary"
              />

              <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Utensils className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-green-700">Preferred Foods</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {values!.preferred_foods?.map((food, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-green-100 text-green-800 hover:bg-green-200"
                    >
                      {food}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/50">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertTriangle className="text-red-600" size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-red-700">Allergies</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {values!.allergies?.map((allergy, index) => (
                    <Badge
                      key={index}
                      variant="destructive"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                    >
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button
                onClick={handleGenerate}
                className="bg-[#EE9422] text-white rounded-md min-h-16 px-10"
                size="lg"
              >
                <Sparkles className="mr-2" size={20} />
                Generate Meal Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
