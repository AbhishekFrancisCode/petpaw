"use client";

import TemplateType1 from "@/components/home/includes/templet-type-1";
import { MealPlanPageStrings } from "@/constants/title-constants";
import { ImagePropsType } from "@/store/interfaces/templete";

export default function TempletGridSmall() {
  return (
    <section className="bg-transparent place-content-center">
      <div className="container mx-auto px-2 md:px-0 py-4">
        <TemplateType1
          title="100% Human-Grade Ingredients"
          title_color="#028391"
          sub_title="Our responsibly sourced food delivers nutrients that are as delicious as they are essential to your dog’s health."
          sub_title_color="#EE9422"
          images={MealPlanPageStrings.secondSection.data}
          grid_height="100px"
        />
      </div>
    </section>
  );
}
