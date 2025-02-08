"use client";

import { ButtonProps, ImagePropsType } from "@/store/interfaces/templete";
import TempletType1 from "./includes/templet-type-1";

const images: ImagePropsType[] = [
  {
    title: "Tell Us About Your Pup",
    image_link: "https://ik.imagekit.io/funlogic/about_your_pup.jpg?updatedAt=1739015868088",
    link_to: "https://example.com/sunset",
    color: "",
    title_color: "#EE9422",
    sub_title_color: "#999999",
    description: "Fill out a quick and easy questionnaire to help us understand your dog's needs."
  },
  {
    title: "Personalized Meal Plan & Pricing",
    image_link: "https://ik.imagekit.io/funlogic/meal_plan.png?updatedAt=1730051383329",
    link_to: "https://example.com/forest",
    color: "",
    title_color: "#EE9422",
    sub_title_color: "#999999",
    description:
      "Based on expert nutritionist recommendations, we’ll suggest the perfect portion size and meal options tailored to your dog."
  },
  {
    title: "Try It for Free!",
    image_link: "https://ik.imagekit.io/funlogic/deliveryInformation.png?updatedAt=1730051383338",
    link_to: "https://example.com/city",
    color: "",
    title_color: "#EE9422",
    sub_title_color: "#999999",
    description:
      "Get a complimentary trial pack to see if your pup loves the meals and digests them well."
  },
  {
    title: "Subscribe & Serve",
    image_link: "https://ik.imagekit.io/funlogic/serve-food.webp?updatedAt=1739015868258",
    link_to: "https://example.com/city",
    color: "",
    title_color: "#EE9422",
    sub_title_color: "#999999",
    description:
      "Choose a meal plan from our carefully crafted recipes and start feeding your furry friend fresh, nutritious meals!"
  }
];

const buttons: ButtonProps[] = [
  {
    title: "Know More",
    link_to: "/mealplan",
    color: "#EE9422",
    title_color: "#ffffff"
  },
  {
    title: "Get Started",
    link_to: "/onboarding",
    color: "#EE9422",
    title_color: "#ffffff"
  }
];

export default function Section_type_7() {
  return (
    <section className="bg-[#FFF8EF] place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="How it works?"
          title_color="#EE9422"
          images={images}
          buttons={buttons}
          steps_count={true}
        />
      </div>
    </section>
  );
}
