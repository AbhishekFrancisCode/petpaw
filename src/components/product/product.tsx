"use client";

import Faq from "@/app/(public_routes)/faq/page";
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

export default function Product() {
  return (
    <div className=" flex flex-col pt-24 ">
      {/* <OfferStrip
        text="Welcome to the Sale!"
        subText="Up to 50% off on all items"
        height="h-10"
        width="w-full"
        bgColor="bg-black"
      /> */}
      <BannerElevated
        imgUrl="https://ik.imagekit.io/funlogic/pawfull/all%20snacks%20in%20picnic%20view%20no%20bg.png?updatedAt=1744634137802"
        value={
          "Freshly cooked daily meals made with nutritionist-formulated recipes and human-grade ingredients, with no additives."
        }
      />
      <div className="min-h-12"></div>
      <ProductView />
      <div className="min-h-12"></div>
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
      <Faq />
    </div>
  );
}
