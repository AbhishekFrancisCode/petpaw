"use client";
import Button from "@/sb-ui/button/button";
import { ImagePropsType, TempletProps } from "@/store/interfaces/templete";
import Image from "next/image";

export default function HowItsMade({ title, sub_title, section_color }: TempletProps) {
  const images1: ImagePropsType[] = [
    {
      title: "Chicken",
      image_link: "https://ik.imagekit.io/funlogic/freshIngredients.png?updatedAt=1730187860071",
      link_to: "https://example.com/sunset",
      color: "",
      title_color: "#028391"
    },
    {
      title: "Mutton",
      image_link: "https://ik.imagekit.io/funlogic/hygienic.png?updatedAt=1730046154868",
      link_to: "https://example.com/forest",
      color: "",
      title_color: "#028391"
    },
    {
      title: "Treat",
      image_link: "https://ik.imagekit.io/funlogic/nutritious.png?updatedAt=1730046154543",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#028391"
    },
    {
      title: "Grain Free",
      image_link: "https://ik.imagekit.io/funlogic/packaging.png?updatedAt=1730046154828",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#028391"
    }
  ];
  return (
    <section className="place-content-center bg-[#028391]">
      <div
        className={`flex flex-col pt-4 mx-auto place-content-center min-w-full  ${section_color}`}
      >
        {title && (
          <h3 className={`text-[#EE9422] text-4xl font-semibold py-1 text-center px-6 md:px-4`}>
            {title}
          </h3>
        )}
        {sub_title && (
          <div className="flex place-content-center min-w-full">
            <div className="text-[#FFF8EF] text-base font-semibold w-[60%] text-center">
              {sub_title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}