"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/common/card";
import { Button } from "@/components/common/button";
import image from "../../../../public/images/img/hygienic.png";

const ProductDisplay = () => {
  const url = "https://ik.imagekit.io/funlogic/DifferentDogFoodDog.png?updatedAt=1733585008431";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${isHovered && "bg-slate-200"} rounded-3xl border text-card-foreground shadow-sm h-[668px] transition-all duration-300 ease-in-out hover:h-[734px] max-w-[700px] max-h-[734px]`}
    >
      <div className="grid grid-rows-[3fr_auto] items-center max-h-full max-w-full">
        <div className="row-span-3 relative h-[506px]">
          <Image
            src={image}
            alt="Dog eating from bowl with ingredients"
            fill
            className="object-cover rounded-3xl "
            sizes="(max-width: 506px) 100vw, 50vw"
            priority
          />
        </div>
        <div className={`min-h-[162px] justify-start ${isHovered ? "max-h-[228px]" : ""}`}>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col p-4">
              <div className="uppercase text-sm font-medium tracking-wide text-gray-600">
                FREE RANGE CHOW CHOMPIN'
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Chicken Bowl</h2>
            </div>
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inset-0 bg-transparent p-4 rounded-lg"
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
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
