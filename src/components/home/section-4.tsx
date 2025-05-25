import React from "react";
import dogmeadium from "../../../public/images/img/dog-small_blue.png";
import dogsmall from "../../../public/images/img/dog-meadium-blue.png";
import doglarge from "../../../public/images/img/dog-large-blue.png";
import Image from "next/image";
import { Title } from "@/components/common/title-comp";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { HomePageStrings } from "@/constants/title-constants";
import WhatsAppButton from "@/utils/whatsapp-connect";

const MealPortionSize = () => {
  const { data, title, sub_title, description } = HomePageStrings.thirdSection;
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
    <div className="flex flex-col min-h-[600px] bg-[#C4DEE1] pt-8">
      {title && (
        <Title
          variant="h2"
          textStyle="primary"
          className="text-[#028391] py-1 text-center px-4 sm:px-6"
        >
          {title}
        </Title>
      )}
      {sub_title && <div className="text-black text-center px-4 sm:px-6">{sub_title}</div>}

      <div className="flex flex-wrap justify-center items-center min-h-[400px] px-4 pt-8 gap-8 lg:gap-24">
        {dogSizes.map((e: any) => (
          <div key={e} className="relative w-full sm:w-72 md:w-64 lg:w-80 max-h-[350px]">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center max-h-[350px]">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto">
                <Image
                  src={e.image}
                  alt="User avatar"
                  className={twMerge(
                    e.size === "Small Dog"
                      ? "max-w-24 max-h-24"
                      : e.size === "Medium Dog"
                        ? "max-w-28 max-h-28"
                        : "max-w-44 max-h-44",
                    "mx-auto"
                  )}
                />
              </div>

              <div className="text-center mb-4 mt-2">
                <h3 className="text-xl font-medium text-gray-800">{e.size}</h3>
                <p className="text-gray-600">{e.weight}</p>
              </div>

              <div className="text-gray-700 mb-6 text-center">
                <p>{e.price}</p>
              </div>

              <div className="flex justify-center">
                <Link href={"/mealplan"}>
                  <button className="bg-[#EE9422] hover:bg-gray-300 text-white px-4 py-2 rounded-md transition-colors duration-300">
                    View Meal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center p-6 gap-4 mt-auto">
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default MealPortionSize;
