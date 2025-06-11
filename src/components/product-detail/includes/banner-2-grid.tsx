import { Product } from "@/store/interfaces/product";
import React from "react";

interface MealOption {
  name: string;
  price: string;
  description: string;
  tag: string;
  recipes: string[];
}

const ProductMain = ({ product }: { product: Product }) => {
  const imageUrl =
    "https://ik.imagekit.io/funlogic/meal/bowl-chicken-1400.webp?updatedAt=1737923514978?tr=w-600,h-600";
  return (
    <div className="min-h-auto p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 rounded-2xl overflow-hidden md:min-h-[750px] max-h-[750px]">
              <img
                src={product.image}
                alt="Dog eating from bowl"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 flex flex-col bg-stone-200 rounded-2xl p-6 min-h-full justify-between items-center">
              <div className="flex flex-col place-content-start items-center">
                <h2 className="text-xl font-semibold">{product.title}</h2>

                <span className="text-gray-500 text-xs px-2">{product.subtitle}</span>

                <p className="text-lg font-medium">{product.price}</p>
                <p className="mt-2 mb-6 text-[12px]">{product.description}</p>

                <div className="max-w-[200px] h-[200px]">
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              <button className="w-[250px] bg-[#028391] text-white py-3 px-6 rounded-md hover:bg-opacity-85  transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
