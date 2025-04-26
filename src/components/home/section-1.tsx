"use client";

import { ImagePropsType } from "@/store/interfaces/templete";
import TempletType1 from "./includes/templet-type-1";
import { HomePageStrings } from "@/constants/title-constants";

export default function Section_type_1() {
  return (
    <section className="bg-[#C4DEE1] place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="Fresh & Wholesome Treats"
          title_color="#028391"
          sub_title="*All pricing shown is  price based on the starting price for plan type and dog size"
          images={HomePageStrings.secondSection as ImagePropsType[]}
        />
      </div>
    </section>
  );
}
