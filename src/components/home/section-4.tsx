import React from "react";
import dogmeadium from "../../../public/images/img/dog-small_blue.png";
import dogsmall from "../../../public/images/img/dog-meadium-blue.png";
import doglarge from "../../../public/images/img/dog-large-blue.png";

import dogmeadium_orange from "../../../public/images/img/dog-small.png";
import dogsmall_orange from "../../../public/images/img/dog-meadium.png";
import doglarge_orange from "../../../public/images/img/dog-large.png";

import Image from "next/image";
import { Title } from "@/components/common/title-comp";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { HomePageStrings } from "@/constants/title-constants";
import WhatsAppButton from "@/utils/whatsapp-connect";
import { ButtonProps } from "@/store/interfaces/templete";
import Heading from "@/sb-ui/h1/h1";

export const MealPortionSize = ({ isMealplanPage = false }: { isMealplanPage: boolean }) => {
  const { data, title, sub_title, description } = HomePageStrings.thirdSection;

  const dogSizes = [
    {
      size: "Small Dog",
      weight: "5 to 10 kgs",
      price: "Rs. 100",
      image: isMealplanPage ? dogsmall_orange : dogsmall
    },
    {
      size: "Medium Dog",
      weight: "10 - 25 kgs",
      price: "Rs. 210",
      image: isMealplanPage ? dogmeadium_orange : dogmeadium
    },
    {
      size: "Large Dog",
      weight: "25 Kgs & above",
      price: "Rs. 300",
      image: isMealplanPage ? doglarge_orange : doglarge
    }
  ];

  const buttons: ButtonProps[] = [
    {
      title: "Know More",
      link_to: "/mealplan",
      color: "#028391",
      title_color: "#ffffff"
    }
  ];

  return (
    <div className={twMerge(!isMealplanPage && "bg-[#C4DEE1]", "py-4 md:m-0")}>
      <div className="sb-container mx-auto flex flex-col">
        <Heading text={title} cls="text-[#028391]" />
        {sub_title && <div className="text-black text-center px-4 sm:px-6 pt-1">{sub_title}</div>}

        <div className="flex flex-wrap justify-center items-center px-4 pt-8 gap-4 sm:gap-6 lg:gap-8 xl:gap-24">
          {dogSizes.map((e: any) => (
            <div key={e.size} className="relative w-full sm:w-72 md:w-64 lg:w-80 xl:w-72">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center">
                <div className="flex items-end mb-2 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto">
                  <Image
                    src={e.image}
                    alt="Dog size"
                    className={twMerge(
                      e.size === "Small Dog"
                        ? "max-w-20 max-h-20 sm:max-w-24 sm:max-h-24"
                        : e.size === "Medium Dog"
                          ? "max-w-24 max-h-24 sm:max-w-28 sm:max-h-28"
                          : "max-w-32 max-h-32 sm:max-w-36 sm:max-h-36 lg:max-w-44 lg:max-h-44",
                      "mx-auto"
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-800">{e.size}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{e.weight}</p>
                  </div>
                  <div className="text-gray-700 text-center">
                    <p className="text-sm sm:text-base">{e.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 gap-3 md:gap-6 mt-8 max-w-[85%] mx-auto">
          <WhatsAppButton />
          <Link href={buttons[0].link_to!}>
            <button
              key={0}
              className={`bg-[${buttons[0].outlineButton ? "transparent" : buttons[0].color}] rounded-md min-h-16 px-10 text-[#FFF8EF] font-medium hover:opacity-80 ${
                buttons[0].outlineButton && "border-2"
              } border-[#999999] min-w-[220px]`}
            >
              {buttons[0].title}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealPortionSize;
