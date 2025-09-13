"use client";
import FoodTypeSelection from "./includes/food-type-selection copy";
import Marquee from "../common/marquee";
import TempletGridSmall from "../common/section-templets/templet-grid-small";
import TestimonialsVideo from "./includes/testimonials";
import FAQ from "../how-it-works/Faq";
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
