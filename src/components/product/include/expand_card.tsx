"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/common/card";
import { Button } from "@/components/common/button";
import image from "../../../../public/images/img/hygienic.png";
import { ProductDetailsProps } from "./product_view";

const ProductDisplay = ({ productDetails }: { productDetails: ProductDetailsProps }) => {
  const url = productDetails.image;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* Mobile Card */}
      <div className="flex flex-col md:hidden rounded-3xl bg-[#f1e8dc] pb-2 border-0 text-card-foreground shadow-sm">
        <div className="row-span-3 relative h-[256px]">
          <Image
            src={url}
            alt="Dog eating from bowl with ingredients"
            fill
            className="object-cover rounded-3xl w-full h-full"
            priority
          />
        </div>

        <div className="justify-start px-4">
          <div className="flex justify-between">
            <div className="flex flex-col p-4">
              <div className="uppercase text-[0.875rem] font-medium tracking-wide text-gray-600">
                {productDetails.subtitle}
              </div>
              <p className="text-[1.875rem] font-bold text-gray-900">{productDetails.title}</p>
            </div>
          </div>
          <p className="text-[0.875rem] text-gray-600">{productDetails.description}</p>
        </div>
        <Button
          variant="default"
          size="lg"
          className="mt-4 mx-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-b-3xl"
          onClick={() => {
            window.location.href = `/product/${productDetails.id}`;
          }}
        >
          Learn More
        </Button>
      </div>

      {/* Desktop Card */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`${isHovered ? "bg-[#f5f3ee]" : "bg-[#f1e8dc]"} hidden md:block rounded-3xl border-0 text-card-foreground shadow-sm h-[668px] transition-all duration-300 ease-in-out hover:h-[734px] max-w-1/2 max-h-[734px]`}
      >
        <div className="grid grid-rows-[3fr_auto] items-center max-h-full max-w-full">
          <div className="row-span-3 relative h-[506px]">
            <Image
              src={url}
              alt="Dog eating from bowl with ingredients"
              fill
              className="object-cover rounded-3xl"
              sizes="(max-width: 506px) 100vw, 50vw"
              priority
            />
          </div>
          <div
            className={`min-h-[162px] max-h-[162px] justify-start ${
              isHovered ? "min-h-[228px] max-h-[228px]" : ""
            }`}
          >
            <div className="flex justify-between">
              <div className="flex flex-col p-4">
                <div className="uppercase text-[0.875rem] font-medium tracking-wide text-gray-600">
                  {productDetails.subtitle}
                </div>
                <p className="text-[1.875rem] font-bold text-gray-900">{productDetails.title}</p>
              </div>
              <motion.div
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="inset-0 bg-transparent px-4 rounded-lg"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white"
                  onClick={() => {
                    window.location.href = `/product/${productDetails.id}`;
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inset-0 bg-transparent p-4 rounded-lg"
            >
              <p className="text-[0.875rem] text-gray-600">{productDetails.description}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductDisplay;
