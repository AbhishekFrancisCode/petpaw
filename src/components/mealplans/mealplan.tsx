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
      <div className="min-h-4" />
      <Marquee />
      <TempletGridSmall />
      <div className="mx-4 md:mx-0 ">
        <img
          src={
            "https://ik.imagekit.io/funlogic/pawfull/banners/background%20removed/a.png?updatedAt=1752422912394"
          }
          className="rounded-b-xl"
        />
      </div>
      {/* <div className="min-h-12" /> */}
      <MealPortionSize isMealplanPage={true} />
      <Section_type_8 />
      {/* <BannerSection /> */}
      <TestimonialsVideo />
      <FAQ items={mealsPlanFaqData} />
    </>
  );
}
