import { Metadata } from "next";
import { TITLES } from "@/constants/title-constants";
import MealPlan from "@/components/mealplans/mealplan";

export const metadata: Metadata = {
  title: TITLES.mealplan
};

export default function MealPlanPage() {
  return (
    <div className="md:pt-[70px]">
      <MealPlan />
    </div>
  );
}
