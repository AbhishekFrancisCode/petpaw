"use client";
import Button from "@/sb-ui/button/button";
import Image from "next/image";
import DogMealPlan from "./banner-2-grid";

export default function BannerSection() {
  const url = "https://ik.imagekit.io/funlogic/DifferentDogFoodDog.png?updatedAt=1733585008431";
  const mealOption = [
    {
      name: "Treats",
      price: "Starting at Rs.200",
      description:
        "The pinnacle of quality and nutrition, Pawtful's Fresh recipes are made from real meat, fruits, veggies, and grains, so you can give your pup the best of the best each and every day.",
      tag: "PREMIUM",
      recipes: ["Chicken Dish with Carrots", "Lamb Dish with Cranberries", "Pork Dish with Apples"]
    }
  ];
  return (
    <section
      className="place-content-center py-8 px-64 max-w-[98%] mx-auto rounded-xl"
      style={{
        // backgroundImage: `url(${url})`,
        backgroundColor: "#EE9422",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 flex flex-col min-h-full bg-transparent place-content-center rounded-lg p-6 gap-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">{mealOption[0].name}</h2>
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              {mealOption[0].tag}
            </span>
          </div>

          <p className="text-lg font-medium">{mealOption[0].price}</p>
          <p className="mt-2 mb-6">{mealOption[0].description}</p>

          <button className="w-[200px] bg-[#FFF8EF] text-[#333333] py-3 px-6 rounded-md hover:bg-rose-800 transition-colors">
            Get your treats
          </button>
        </div>

        <div className="md:w-1/2 bg-transparent rounded-lg overflow-hidden">
          <img
            src="https://ik.imagekit.io/funlogic/dogmeal1.webp?updatedAt=1739013597778"
            alt="Dog eating from bowl"
            className="w-full h-full max-h-[650px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
