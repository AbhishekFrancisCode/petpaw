import React from "react";
import dogmeadium from "../../../../public/images/img/dog-small.png";
import dogsmall from "../../../../public/images/img/dog-meadium.png";
import doglarge from "../../../../public/images/img/dog-large.png";
import Image from "next/image";
import { Title } from "@/components/common/title-comp";
import { twMerge } from "tailwind-merge";
import { HomePageStrings } from "@/constants/title-constants";

const CardWithHalfAvatar = () => {
  const { title, sub_title } = HomePageStrings.thirdSection;

  const dogSizes = [
    {
      size: "Small Dog",
      weight: "5 to 10 kgs",
      price: "Rs. 100",
      image: dogsmall
    },
    {
      size: "Medium Dog",
      weight: "10 - 25 kgs",
      price: "Rs. 210",
      image: dogmeadium
    },
    {
      size: "Large Dog",
      weight: "25 Kgs & above",
      price: "Rs. 300",
      image: doglarge
    }
  ];

  return (
    <div className="flex flex-col min-h-[550px] px-4 py-6">
      {title && (
        <Title variant="h2" textStyle="primary" className="text-[#028391] py-2 text-center">
          {title}
        </Title>
      )}
      {sub_title && (
        <div className="text-black text-center mb-6 max-w-2xl mx-auto">{sub_title}</div>
      )}
      <div className="flex flex-wrap justify-center gap-8">
        {dogSizes.map((e: any, index: number) => (
          <div
            key={index}
            className="w-full max-w-sm sm:max-w-[18rem] md:max-w-[20rem] bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="w-36 h-36 mb-4">
              <Image
                src={e.image}
                alt={`${e.size} avatar`}
                className={twMerge(
                  e.size === "Small Dog"
                    ? "max-w-24 max-h-24"
                    : e.size === "Medium Dog"
                      ? "max-w-28 max-h-28"
                      : "max-w-32 max-h-32",
                  "mx-auto"
                )}
              />
            </div>

            <div className="text-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{e.size}</h3>
              <p className="text-gray-600 text-sm">{e.weight}</p>
            </div>

            <div className="text-center text-gray-700 mb-4">
              <p>{e.price}</p>
            </div>

            <button className="bg-[#EE9422] hover:bg-gray-300 text-white px-4 py-2 rounded-md transition-colors duration-300">
              View Meal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWithHalfAvatar;
