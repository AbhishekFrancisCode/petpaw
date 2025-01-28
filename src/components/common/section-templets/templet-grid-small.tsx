"use client";

import TempletType1 from "@/components/home/includes/templet-type-1";
import { ImagePropsType } from "@/store/interfaces/templete";

const images: ImagePropsType[] = [
  {
    title: "MADE WITH REAL MEAT, FRUIT, VEGGIES AND GRAINS",
    image_link:
      "https://ik.imagekit.io/funlogic/made_with_real_food.webp?updatedAt=1737954872904?tr=w-300,h-300",
    link_to: "",
    color: "",
    title_color: "#333"
  },
  {
    title: "MEAT IS THE FIRST INGREDIENT",
    image_link:
      "https://ik.imagekit.io/funlogic/first_ingredient_meat.webp?updatedAt=1737954872657?tr=w-300,h-300",
    link_to: "",
    color: "",
    title_color: "#333"
  },
  {
    title: "NO ADDED HORMONES, BY-PRODUCTS OR FILLERS",
    image_link:
      "https://ik.imagekit.io/funlogic/no_hormones.webp?updatedAt=1737954872564?tr=w-300,h-300",
    link_to: "",
    color: "",
    title_color: "#333"
  },
  {
    title: "NO CORN, WHEAT, OR SOY",
    image_link:
      "https://ik.imagekit.io/funlogic/no_corn.webp?updatedAt=1737954872368?tr=w-300,h-300",
    link_to: "",
    color: "",
    title_color: "#333"
  }
];

export default function TempletGridSmall() {
  return (
    <section className="bg-transparent place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="100% Human-Grade Ingredients"
          title_color="#028391"
          sub_title="Our responsibly sourced food delivers vitamins and minerals that are as delicious as they are essential to your dog’s health."
          images={images}
          grid_height="80"
        />
      </div>
    </section>
  );
}
