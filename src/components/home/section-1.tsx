"use client";

import { ImagePropsType } from "@/store/interfaces/templete";
import TemplateType1 from "./includes/templet-type-1";
import { HomePageStrings } from "@/constants/title-constants";

export default function Section_type_1() {
  const { title, sub_title, description, data } = HomePageStrings.secondSection;
  return (
    <section className="bg-[#C4DEE1] place-content-center">
      <div className="sb-container mx-auto">
        <TemplateType1
          title={title}
          title_color="#028391"
          sub_title={description}
          images={data as ImagePropsType[]}
        />
      </div>
    </section>
  );
}
