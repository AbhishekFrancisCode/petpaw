"use client";

import TempletType1, { ButtonProps, ImagePropsType } from "./includes/templet-type-1";

const images: ImagePropsType[] = [
  {
    title: "Good Gut Health",
    image_link: "https://ik.imagekit.io/funlogic/gut_health.png?updatedAt=1730050815088",
    link_to: "https://example.com/sunset",
    color: "",
    title_color: ""
  },
  {
    title: "Good Poops",
    image_link: "https://ik.imagekit.io/funlogic/healthier_coat.png?updatedAt=1730050815176",
    link_to: "https://example.com/forest",
    color: "",
    title_color: ""
  },
  {
    title: "Healthier Skin & Coat",
    image_link: "https://ik.imagekit.io/funlogic/dog_poop.png?updatedAt=1730050815116",
    link_to: "https://example.com/city",
    color: "",
    title_color: ""
  },
  {
    title: "Healthy Weight",
    image_link: "https://ik.imagekit.io/funlogic/healthy_weight.png?updatedAt=1730050815181",
    link_to: "https://example.com/city",
    color: "",
    title_color: ""
  }
];

const buttons: ButtonProps[] = [
  {
    title: "Get Started",
    link_to: "https://example.com/forest",
    color: "#EE9422",
    title_color: "#FFF8EF"
  },
  {
    title: "Know More",
    link_to: "https://example.com/city",
    color: "#FFF8EF",
    title_color: "#EE9422"
  }
];

export default function Section_type_5() {
  return (
    <div className="bg-[#FFF8EF] place-content-center">
      <div className="container mx-auto">
        <TempletType1
          title="A Pawtful Promise"
          title_color="#EE9422"
          sub_title="Here's what you will experience upon switching to Pawtful Meals"
          images={images}
          buttons={buttons}
        />
      </div>
    </div>
  );
}
