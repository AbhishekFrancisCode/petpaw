"use client";

import Faq from "@/components/how-it-works/Faq";
import { productFaqData } from "@/faq-data/product-faq-data";
import BannerSection from "./includes/banner_section";
import FoodTypeOffered from "./includes/food_type_offered";
import HowItsMade from "./includes/how_its_made";
import IngredientsUsed from "./includes/ingredients_used";
import OfferStrip from "./includes/offer_strip";
import Banner from "./include/banner";
import ProductView from "./include/product_view";
import HowItWorks from "./include/how_it_works";
import ProductTestimonials from "./include/product_testimonials";
import BannerElevated from "./include/banner-elevated";
import Section_type_7 from "../home/section-7";
import { Suspense } from "react";

export default function Product() {
  return (
    <div className=" flex flex-col md:pt-32 px-5">
      {/* <OfferStrip
        text="Welcome to the Sale!"
        subText="Up to 50% off on all items"
        height="h-10"
        width="w-full"
        bgColor="bg-black"
      /> */}
      <BannerElevated
        imgUrl="https://ik.imagekit.io/funlogic/pawfull/all%20ingredients%20as%20dog%20paw%20without%20background.png?updatedAt=1745743545693"
        value={
          "Freshly cooked daily meals made with nutritionist-formulated recipes and human-grade ingredients, with no additives."
        }
        borderColor="#EE9422"
        borderRadius="rounded-3xl"
        borderWidth="border-2"
        borderStyle="border-solid"
        imagePosition="right-5 bottom-[70px]"
      />
      {/* <div className="min-h-6"></div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ProductView />
      </Suspense>
      {/* <div className="min-h-6"></div> */}
      <Section_type_7 />
      {/* <HowItWorks /> */}
      <div className="min-h-12"></div>
      <div className="min-h-12"></div>
      {/* <BannerSection /> */}
      {/* <FoodTypeOffered
        title={"A Bowl for Every Tail: Premium Dog Food for Every Breed, Age, and Need."}
        sub_title="From protein-rich Classic meals, easy-to-digest Grain-free options, allergen-free Sensitive Diet to Biryani for pets that eat like royals, Pawtful's Rich Food has something for everyone."
      /> */}
      {/* <HowItsMade
        title={"How we made it possible."}
        sub_title="Pawtful's Rich meals are packaged in advanced retort packaging, preserving maximum nutrition and taste without the need for preservatives. Enjoy fresh, flavorful meals anytime."
      /> */}
      {/* <IngredientsUsed /> */}
      <div className="min-h-12"></div>
      <div className="min-h-12"></div>
      <ProductTestimonials />
      {/* <OfferStrip
        text="Welcome to the Sale!"
        subText="Up to 50% off on all items"
        height="h-8"
        width="w-full"
        bgColor="bg-slate-600"
      /> */}
      <Faq items={productFaqData} />
    </div>
  );
}
