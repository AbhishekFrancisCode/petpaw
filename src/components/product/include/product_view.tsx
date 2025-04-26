"use client";

import { productDetails, productDetails1, productDetailsTreats } from "@/constants/meal-data";
import ProductDisplay from "./expand_card";
import Banner from "./banner";
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
  // const productDetails: ProductDetailsProps[] = [
  //   {
  //     id: 0,
  //     title: "Chicken Bowl",
  //     subtitle: "Free Range Chow Chompin'",
  //     description:
  //       "Our Free Range Chicken recipe is complete and balanced for all lifestages, and is suitable for puppies and seniors alike. This nourishing recipe is one of the lowest in fat across our range, making it the best choice for those puppers with gastrointestinal issues. It may be appropriate for dogs who have had mild pancreatitis in the past but speak to your vet about this. It is low in carbohydrates, which makes a great choice for diabetic dogs looking to minimise blood sugar fluctuations, and also for overweight dogs looking to lose weight while maintaining muscle mass.",
  //     image: "https://ik.imagekit.io/funlogic/price_plans.png?updatedAt=1730060093850",
  //     route_link: ""
  //   },
  //   {
  //     id: 1,
  //     title: "Lamb Bowl",
  //     subtitle: "Grass Fed Lip Lickin'",
  //     description:
  //       " Our Grass Fed Lamb recipe is complete and balanced for all lifestages. This recipe is the richest across our range, making it a great choice for itchy skin, or for puppers looking for a more novel diet. We do not generally recommend this recipe for our golden oldies or puppers with sensitive digestive tracts, as it can be too rich due to its higher fat content.",
  //     image: "https://ik.imagekit.io/funlogic/price_plans.png?updatedAt=1730060093850",
  //     route_link: ""
  //   }
  // ];
  // const productDetails1: ProductDetailsProps[] = [
  //   {
  //     id: 2,
  //     title: "Fish Bowl",
  //     subtitle: "Free Range Chow Chompin'",
  //     description:
  //       "Our Free Range Chicken recipe is complete and balanced for all lifestages, and is suitable for puppies and seniors alike. This nourishing recipe is one of the lowest in fat across our range, making it the best choice for those puppers with gastrointestinal issues. It may be appropriate for dogs who have had mild pancreatitis in the past but speak to your vet about this. It is low in carbohydrates, which makes a great choice for diabetic dogs looking to minimise blood sugar fluctuations, and also for overweight dogs looking to lose weight while maintaining muscle mass.",
  //     image: "https://ik.imagekit.io/funlogic/price_plans.png?updatedAt=1730060093850",
  //     route_link: ""
  //   },
  //   {
  //     id: 3,
  //     title: "Veg Bowl",
  //     subtitle: "Grass Fed Lip Lickin'",
  //     description:
  //       " Our Grass Fed Lamb recipe is complete and balanced for all lifestages. This recipe is the richest across our range, making it a great choice for itchy skin, or for puppers looking for a more novel diet. We do not generally recommend this recipe for our golden oldies or puppers with sensitive digestive tracts, as it can be too rich due to its higher fat content.",
  //     image: "https://ik.imagekit.io/funlogic/price_plans.png?updatedAt=1730060093850",
  //     route_link: ""
  //   }
  // ];
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col mx-auto place-content-center items-center">
        <Title variant="h1" textStyle="primary" className={`text-[#028391] leading-normal`}>
          Our Products
        </Title>

        {/* <p className="text-xl md:max-w-[600px] text-center">
          Freshly prepared, lightly cooked meals packed with human-grade, nutritious, wholefood
          ingredients.
        </p> */}
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-0">
        <div className=" flex flex-col gap-8 pt-12 max-w-[50%]">
          {productDetails.map((item: ProductDetailsProps, index: number) => (
            <ProductDisplay key={index} productDetails={item} />
          ))}
        </div>
        <div className=" flex flex-col gap-8 pt-12 max-w-[50%]">
          {productDetails1.map((item: ProductDetailsProps, index: number) => (
            <ProductDisplay key={index} productDetails={item} />
          ))}
        </div>
      </div>
      <div className="min-h-12" />
      <Banner
        url="https://ik.imagekit.io/funlogic/pawfull/DSC_0011-min.png?updatedAt=1744633950628"
        value={"Fresh treats and no additives"}
      />
      <div className="flex flex-col-2 gap-8 pt-12 ">
        {productDetailsTreats.map((item: ProductDetailsProps, index: number) => (
          <ProductDisplay key={index} productDetails={item} />
        ))}
      </div>
    </section>
  );
}
