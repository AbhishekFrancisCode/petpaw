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

export default function MealPlan() {
  return (
    <>
      <FoodTypeSelection />
      <FullyDynamicFoodCircle />
      <Marquee />
      <TempletGridSmall />
      <CardWithHalfAvatar />
      <BannerSection />
      <TestimonialsVideo />
      <FAQ />
    </>
  );
}
