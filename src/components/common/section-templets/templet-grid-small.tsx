"use client";

import TempletType1 from "@/components/home/includes/templet-type-1";
import { MealPlanPageStrings } from "@/constants/title-constants";
import { ImagePropsType } from "@/store/interfaces/templete";

export default function TempletGridSmall() {
  return (
    <section className="bg-transparent place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="100% Human-Grade Ingredients"
          title_color="#028391"
          sub_title="Our responsibly sourced food delivers vitamins and minerals that are as delicious as they are essential to your dog’s health."
          images={MealPlanPageStrings.secondSection.data}
          grid_height="100px"
        />
      </div>
    </section>
  );
}
