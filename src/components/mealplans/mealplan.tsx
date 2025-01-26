import Faq from "@/app/(public_routes)/faq/page";
import FoodTypeSelection from "./includes/food-type-selection";
import DogMealPlan from "./includes/banner-2-grid";

export default function MealPlan() {
  return (
    <>
      <DogMealPlan />
      <FoodTypeSelection />
    </>
  );
}
