"use client";

import { ButtonProps, ImagePropsType } from "@/store/interfaces/templete";
import TemplateType1 from "./includes/templet-type-1";
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
      <div className="sb-container mx-auto py-8">
        <TemplateType1
          title="Pawftul’s Promise"
          title_color="#EE9422"
          sub_title="Fresh meals every day. A lifetime of health"
          sub_title_color="#028391"
          images={HomePageStrings.fourthSection as ImagePropsType[]}
          buttons={buttons}
        />
      </div>
    </section>
  );
}
