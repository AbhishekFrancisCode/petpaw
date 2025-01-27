"use client";
import Faq from "@/app/(public_routes)/faq/page";
import FoodTypeSelection from "./includes/food-type-selection";
import DogMealPlan from "./includes/banner-2-grid";
import Marquee from "../common/marquee";

export default function MealPlan() {
  return (
    <>
      <FoodTypeSelection />
      <Marquee />
      <DogMealPlan />
    </>
  );
}
