"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DogMeal } from "@/components/mealplans/mealdata";
import { MealGrid } from "@/components/onboarding/includes/mealGrid";

export default function MealPortionSuggest() {
  const router = useRouter();
  const [mealsString, setMealsString] = useState<string | null>(null);

  useEffect(() => {
    const recommendedMealsString = localStorage.getItem("recommendedMeals");

    if (!recommendedMealsString) {
      router.push("/onboarding");
    } else {
      setMealsString(recommendedMealsString);
    }
  }, [router]);

  const recommendedMeals: DogMeal[] | null = useMemo(() => {
    if (!mealsString) return null;

    try {
      return JSON.parse(mealsString) as DogMeal[];
    } catch (err) {
      console.error("Failed to parse recommended meals:", err);
      return null;
    }
  }, [mealsString]);

  if (!recommendedMeals) return null; // Optionally show a loader here

  return (
    <div className="container mx-auto flex flex-col pt-[90px]">
      <MealGrid meals={recommendedMeals} />
    </div>
  );
}
