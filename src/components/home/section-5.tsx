"use client";

import { ButtonProps, ImagePropsType } from "@/store/interfaces/templete";
import TempletType1 from "./includes/templet-type-1";
import { HomePageStrings } from "@/constants/title-constants";

const buttons: ButtonProps[] = [
  {
    title: "Get Started",
    link_to: "/onboarding",
    color: "#EE9422",
    title_color: "#ffffff"
  },
  {
    title: "Know More",
    link_to: "/mealplan",
    color: "#EE9422",
    title_color: "#ffffff"
  }
];

export default function Section_type_5() {
  return (
    <section className="bg-[#FFF8EF] place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="A Pawtful Promise"
          title_color="#EE9422"
          sub_title="Here's what you will experience upon switching to Pawtful Meals"
          images={HomePageStrings.fourthSection as ImagePropsType[]}
          buttons={buttons}
        />
      </div>
    </section>
  );
}
