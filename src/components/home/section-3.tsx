"use client";

import TempletType1, { ButtonProps, ImagePropsType } from "./includes/templet-type-1";

const images: ImagePropsType[] = [
  {
    title: "FOR SMALL DOGS\n(5-15 Kgs)",
    image_link: "https://ik.imagekit.io/funlogic/for_small_dogs.png?updatedAt=1730048082405",
    link_to: "https://example.com/sunset",
    color: "",
    title_color: "#028391",
    description: "Monthly Subscription:\n₹139 /meal On Demand Pricing:\n ₹189/meal"
  },
  {
    title: "FOR MEDIUM DOGS\n(15-25Kgs)",
    image_link: "https://ik.imagekit.io/funlogic/for_medium_dogs.png?updatedAt=1730048082297",
    link_to: "https://example.com/forest",
    color: "",
    title_color: "#028391",
    description: "Monthly Subscription:\n₹189 /meal On Demand Pricing:\n ₹249/meal"
  },
  {
    title: "FOR LARGE DOGS\n(Above 25Kgs)",
    image_link: "https://ik.imagekit.io/funlogic/for_large_dogs.png?updatedAt=1730048082473",
    link_to: "https://example.com/city",
    color: "",
    title_color: "#028391",
    description: "Monthly Subscription:\n₹279 /meal On Demand Pricing:\n ₹349/meal"
  }
];

const buttons: ButtonProps[] = [
  {
    title: "Explore Pricing Plans",
    link_to: "",
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
          images={images}
          buttons={buttons}
        />
      </div>
    </section>
  );
}
