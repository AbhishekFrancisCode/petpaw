"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { productDetails, productDetails1, productDetailsTreats } from "@/constants/meal-data";
import ProductDisplay from "./expand_card";
import BannerElevated from "./banner-elevated";
import { Title } from "@/components/common/title-comp";

export interface ProductDetailsProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  productImage?: string;
  nutritionValue?: string;
  route_link: string;
  ingredients: string[];
}

export default function ProductView() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <section className="flex flex-col">
      <div className="flex flex-col mx-auto place-content-center items-center">
        <Title variant="h2" textStyle="primary" className="text-[#028391] leading-normal">
          Our Products
        </Title>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-0">
        <div className="flex flex-col gap-8 pt-6 md:pt-12 md:max-w-[50%]">
          {productDetails.map((item: ProductDetailsProps, index: number) => (
            <ProductDisplay key={index} productDetails={item} />
          ))}
        </div>

        <div className="flex flex-col gap-8 pt-6 md:pt-12 md:max-w-[50%]">
          {productDetails1.map((item: ProductDetailsProps, index: number) => (
            <ProductDisplay key={index} productDetails={item} />
          ))}
        </div>
      </div>

      <div className="min-h-12" />

      <BannerElevated
        imgUrl="https://ik.imagekit.io/funlogic/pawfull/all_snacks-cut%20out%20.png?updatedAt=17457398316361351500517"
        value={
          "Treats Made with Fresh Ingredients with no added preservatives.\nMake snack time a healthy time for your pet babies."
        }
        borderColor="#e3ad6b"
        borderRadius="rounded-3xl"
        borderWidth="border-2"
        borderStyle="border-solid"
        imagePosition="right-0 bottom-[70px]"
        imageHide={false}
      />

      <div className="flex flex-col mx-auto place-content-center items-center" id="treatsec">
        <Title variant="h2" textStyle="primary" className="text-[#028391] leading-normal">
          Fresh treats
        </Title>
      </div>

      <div className="flex flex-col md:flex-col-2 gap-8 py-4 md:py-12 mx-4 md:px-0">
        {productDetailsTreats.map((item: ProductDetailsProps, index: number) => (
          <ProductDisplay key={index} productDetails={item} />
        ))}
      </div>
    </section>
  );
}
