"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DogMeal } from "@/components/mealplans/mealdata";
import { MealGrid } from "@/components/onboarding/includes/mealGrid";

export default function MealPortionSuggest() {
  const router = useRouter();
  const [mealsString, setMealsString] = useState<any>(null);
  const [petdata, setPetdata] = useState<any>({});

  useEffect(() => {
    const recommendedMealsString = localStorage.getItem("recommendedMeals");
    const petDataString = localStorage.getItem("petData");

    if (!recommendedMealsString) {
      router.push("/onboarding");
    } else {
      setMealsString(recommendedMealsString);
      setPetdata(JSON.parse(petDataString!));
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
    <div className="container mx-auto flex flex-col pt-[100px] lg:pt-[120px]">
      <MealGrid meals={recommendedMeals} petdata={petdata} />
    </div>
  );
}
