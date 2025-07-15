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
    <div className=" flex flex-col">
      <div className=" flex flex-col px-5">
        <div className="sb-container flex min-w-full place-content-center mx-4 md:mx-0">
          <img
            src={
              "https://ik.imagekit.io/funlogic/pawfull/banners/background%20removed/b.png?updatedAt=1752423159752"
            }
            className="object-fill"
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductView />
        </Suspense>
        <Section_type_7 />
        <ProductTestimonials />
      </div>
      <Faq items={productFaqData} />
      {/* <OfferStrip
        text="Welcome to the Sale!"
        subText="Up to 50% off on all items"
        height="h-8"
        width="w-full"
        bgColor="bg-slate-600"
      /> */}
      {/* <OfferStrip
        text="Welcome to the Sale!"
        subText="Up to 50% off on all items"
        height="h-10"
        width="w-full"
        bgColor="bg-black"
      /> */}
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
    </div>
  );
}
