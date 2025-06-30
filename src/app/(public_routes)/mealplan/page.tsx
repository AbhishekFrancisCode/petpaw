import { Metadata } from "next";
import { TITLES } from "@/constants/title-constants";
import MealPlan from "@/components/mealplans/mealplan";

export const metadata: Metadata = {
  title: TITLES.mealplan
};

export default function MealPlanPage() {
  return (
    <div className="sb-container md:pt-[10px]">
      <MealPlan />
    </div>
  );
}
