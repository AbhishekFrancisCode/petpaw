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
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${isHovered ? "bg-[#f5f3ee]" : "bg-[#f1e8dc]"} rounded-3xl border-0 text-card-foreground shadow-sm h-[668px] transition-all duration-300 ease-in-out hover:h-[734px] max-w-1/2 max-h-[734px]`}
    >
      <div className="grid grid-rows-[3fr_auto] items-center max-h-full max-w-full">
        <div className="row-span-3 relative h-[506px]">
          <Image
            src={url}
            alt="Dog eating from bowl with ingredients"
            fill
            className="object-cover rounded-3xl "
            sizes="(max-width: 506px) 100vw, 50vw"
            priority
          />
        </div>
        <div
          className={`min-h-[162px] max-h-[162px] justify-start px-4 ${isHovered ? "min-h-[228px] max-h-[228px]" : ""}`}
        >
          <div className="flex justify-between">
            <div className="flex flex-col p-4">
              <div className="uppercase text-sm font-medium tracking-wide text-gray-600">
                {productDetails.subtitle}
              </div>
              <p className="text-3xl font-bold text-gray-900">{productDetails.title}</p>
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
            <p className="text-sm text-gray-600">
              Our Free Range Chicken recipe is complete and balanced for all lifestages, and is
              suitable for puppies and seniors alike. This nourishing recipe is one of the lowest in
              fat across our range, making it the best choice for those puppers with
              gastrointestinal issues...
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDisplay;
