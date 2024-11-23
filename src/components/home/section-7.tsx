"use client";

import TempletType1, { ButtonProps, ImagePropsType } from "./includes/templet-type-1";

const images: ImagePropsType[] = [
  {
    title: "Enter Pet Details",
    image_link: "https://ik.imagekit.io/funlogic/pet_details.png?updatedAt=1730051383308",
    link_to: "https://example.com/sunset",
    color: "",
    title_color: ""
  },
  {
    title: "Select Meal Plans",
    image_link: "https://ik.imagekit.io/funlogic/meal_plan.png?updatedAt=1730051383329",
    link_to: "https://example.com/forest",
    color: "",
    title_color: ""
  },
  {
    title: "Provide Delivery Information",
    image_link: "https://ik.imagekit.io/funlogic/deliveryInformation.png?updatedAt=1730051383338",
    link_to: "https://example.com/city",
    color: "",
    title_color: ""
  }
];

const buttons: ButtonProps[] = [
  {
    title: "Know More",
    link_to: "https://example.com/city",
      color: "#EE9422",
    title_color: "#ffffff"
  },
  {
    title: "Get Started",
    link_to: "https://example.com/forest",
    color: "#EE9422",
    title_color: "#ffffff"
  }
];

export default function Section_type_7() {
  return (
    <div className="bg-[#FFF8EF] place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="How it works?"
          title_color="#ffffff"
          images={images}
          buttons={buttons}
          steps_count={true}
        />
      </div>
    </div>
  );
}
