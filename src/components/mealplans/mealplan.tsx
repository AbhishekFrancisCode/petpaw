"use client";
import Faq from "@/app/(public_routes)/faq/page";
import FoodTypeSelection from "./includes/food-type-selection";
import DogMealPlan from "../product-detail/includes/banner-2-grid";
import Marquee from "../common/marquee";
import TempletGridSmall from "../common/section-templets/templet-grid-small";
import CardWithHalfAvatar from "./includes/meal-portion";
import BannerSection from "./includes/banner_section";
import TestimonialsVideo from "./includes/testimonials";
import FAQ from "../how-it-works/Faq";
import FullyDynamicFoodCircle from "./includes/testing";
import BannerElevated from "../product/include/banner-elevated";
import UploadMeal from "@/backend/setMealTable";
import MealPortionSize from "../home/section-4";
import Section_type_8 from "../home/section-6";
import { mealsPlanFaqData } from "@/faq-data/meals-plan-faq-data";

export default function MealPlan() {
  return (
    <>
      <FoodTypeSelection />
      {/* <FullyDynamicFoodCircle /> */}
      <Marquee />
      <TempletGridSmall />
      <div className="w-[95%] mx-auto">
        <BannerElevated
          imgUrl="https://ik.imagekit.io/funlogic/pawfull/Fish%20and%20Brocolli%20meal%20with%20ingredients%20cutout%20.jpg?updatedAt=1744636805971"
          value={"Get your first meal Free!!!"}
          borderColor="#EE9422"
          borderRadius="rounded-3xl"
          borderWidth="border-2"
          borderStyle="border-solid"
          imagePosition="right-0 bottom-[70px]"
          imageHide={false}
          width="90%"
        />
      </div>
      <div className="min-h-12" />
      <MealPortionSize isMealplanPage={true} />
      <Section_type_8 />
      {/* <BannerSection /> */}
      <TestimonialsVideo />
      <FAQ items={mealsPlanFaqData} />
    </>
  );
}
