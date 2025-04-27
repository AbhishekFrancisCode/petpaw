"use client";

import { ButtonProps, ImagePropsType } from "@/store/interfaces/templete";
import TempletType1 from "./includes/templet-type-1";
import { HomePageStrings } from "@/constants/title-constants";

const buttons: ButtonProps[] = [
  {
    title: "Explore Pricing Plans",
    link_to: "/product",
    color: "#028391",
    title_color: "#ffffff"
  }
];

export default function Section_type_3() {
  return (
    <section className="bg-[#C4DEE1] place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="Flexible pricing, personalized nutrition"
          title_color="#028391"
          sub_title="*All pricing shown is  price based on the starting price for plan type and dog size"
          images={HomePageStrings.thirdSection.data as ImagePropsType[]}
          buttons={buttons}
        />
      </div>
    </section>
  );
}
