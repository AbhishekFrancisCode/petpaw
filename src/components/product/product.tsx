"use client";

import BannerSection from "./includes/banner_section";
import FoodTypeOffered from "./includes/food_type_offered";
import HowItsMade from "./includes/how_its_made";
import IngredientsUsed from "./includes/ingredients_used";
import OfferStrip from "./includes/offer_strip";
import Testimonials from "./includes/testimonials";

export default function Product() {
  return (
    <div className=" flex flex-col pt-24">
      <OfferStrip
        text="Welcome to the Sale!"
        subText="Up to 50% off on all items"
        height="h-10"
        width="w-full"
        bgColor="bg-black"
      />
      <BannerSection />
      <FoodTypeOffered
        title={"A Bowl for Every Tail: Premium Dog Food for Every Breed, Age, and Need."}
        sub_title="From protein-rich Classic meals, easy-to-digest Grain-free options, allergen-free Sensitive Diet to Biryani for pets that eat like royals, Pawtful's Rich Food has something for everyone."
      />
      <HowItsMade
        title={"How we made it possible."}
        sub_title="Pawtful's Rich meals are packaged in advanced retort packaging, preserving maximum nutrition and taste without the need for preservatives. Enjoy fresh, flavorful meals anytime."
      />
      <IngredientsUsed />
      <Testimonials />
      <OfferStrip
        text="Welcome to the Sale!"
        subText="Up to 50% off on all items"
        height="h-8"
        width="w-full"
        bgColor="bg-slate-600"
      />
    </div>
  );
}
