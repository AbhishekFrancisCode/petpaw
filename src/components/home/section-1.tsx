"use client";

import TempletType1, { ImagePropsType } from "./includes/templet-type-1";

const images: ImagePropsType[] = [
  {
    title: "100% Human Grade & Fresh Ingredients",
    image_link: "https://ik.imagekit.io/funlogic/ingredients.png?updatedAt=1730043328617",
    link_to: "https://example.com/sunset",
    color: "",
    title_color: "#028391"
  },
  {
    title: "Cooked In Hygienic Home Kitchens",
    image_link: "https://ik.imagekit.io/funlogic/hygienic.png?updatedAt=1730046154868",
    link_to: "https://example.com/forest",
    color: "",
    title_color: "#028391"
  },
  {
    title: "Vet Formulated Highly Nutritious Recipes",
    image_link: "https://ik.imagekit.io/funlogic/nutritious.png?updatedAt=1730046154543",
    link_to: "https://example.com/city",
    color: "",
    title_color: "#028391"
  },
  {
    title: "No Additives & Cooked Daily | Sustainable Packaging",
    image_link: "https://ik.imagekit.io/funlogic/packaging.png?updatedAt=1730046154828",
    link_to: "https://example.com/city",
    color: "",
    title_color: "#028391"
  }
];

export default function Section_type_1() {
  return (
    <div className="bg-[#C4DEE1] place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="Fresh & Wholesome"
          title_color="#028391"
          sub_title="*All pricing shown is  price based on the starting price for plan type and dog size"
          images={images}
        />
      </div>
    </div>
  );
}
