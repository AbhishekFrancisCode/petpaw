import React from "react";
import Image from "next/image";
import dogImage from "./includes/images/dog-man.webp";

const HeroSectionHowItWorks = () => {
  return (
    <header className="flex flex-col items-center bg-gray-50 p-8">
      {/* Tagline Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          The easiest way to feed your dog, paws down.
        </h1>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src={dogImage}
          alt="Dog eating from a bowl with fresh ingredients"
          className="max-w-full h-auto"
        />
      </div>
    </header>
  );
};

export default HeroSectionHowItWorks;
