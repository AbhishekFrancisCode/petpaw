import { Product } from "@/store/interfaces/product";
import React from "react";
import Accordion from "./accordion-comp";
import DogNutritionTable from "./nutrition-info";

interface MealOption {
  name: string;
  price: string;
  description: string;
  tag: string;
  recipes: string[];
}

const ProductInfo = ({ product }: { product: Product }) => {
  const accordionItems = [
    {
      id: "2",
      heading: "Full Ingredients List",
      detail: "Explore powerful tools and capabilities",
      content: (
        <div className="flex flex-wrap w-full">
          {product.ingredients?.map((item, index) => {
            return (
              <p key={index} className="pr-1">
                {item.name},
              </p>
            );
          })}
        </div>
      )
    },
    {
      id: "3",
      heading: "Nutritional Info",
      detail: "Solutions for common problems and issues",
      content: (
        <div>
          <h4 className="font-bold mb-2">Common Issues</h4>
          <DogNutritionTable nutritionData={product.macroPercentages!} />
        </div>
      )
    }
  ];
  return (
    <div className="min-w-full min-h-auto bg-[#dad0b7]  p-4 md:p-8">
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="flex flex-col mx-auto place-content-center items-center my-10">
          <h1 className="text-1xl text-[#333333]leading-normal">Real food with nothing to hide.</h1>
          <p className="text-3xl md:max-w-[700px] text-center">
            Everything else you need to know about Beef.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="https://ik.imagekit.io/funlogic/dogmeal1.webp?updatedAt=1739013597778"
              alt="Dog eating from bowl"
              className="w-full h-full max-h-[650px] object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col px-10 min-h-full justify-between items-center">
            <div className="flex flex-col place-content-start items-center">
              <Accordion items={accordionItems} defaultOpenId="1" />
            </div>

            {/* <button className="w-64 bg-rose-700 text-white py-3 px-6 rounded-full hover:bg-rose-800 transition-colors end-0">
              Create a Full Fresh Plan
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
