"use client";

import { ButtonProps, ImagePropsType } from "@/store/interfaces/templete";
import TemplateType1 from "./includes/templet-type-1";
import BlogPosts from "../blog/blog";
import { HomePageStrings } from "@/constants/title-constants";

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
      <div className="sb-container mx-auto py-4">
        <TemplateType1
          title="How it works?"
          title_color="#EE9422"
          images={HomePageStrings.sixthSection as ImagePropsType[]}
          buttons={buttons}
          steps_count={true}
        />
      </div>
    </section>
  );
}
