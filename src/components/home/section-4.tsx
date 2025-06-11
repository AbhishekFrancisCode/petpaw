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
    <div
      className={twMerge(!isMealplanPage && "bg-[#C4DEE1]", "flex flex-col min-h-[600px]  pt-8")}
    >
      {title && (
        <Title
          variant="h2"
          textStyle="primary"
          className="text-[#028391] py-1 text-center px-4 sm:px-6"
        >
          {title}
        </Title>
      )}
      {sub_title && <div className="text-[#EE9422] text-center px-4 sm:px-6">{sub_title}</div>}

      <div className="flex flex-wrap justify-center items-center min-h-[400px] px-4 pt-8 gap-8 lg:gap-24">
        {dogSizes.map((e: any) => (
          <div key={e} className="relative w-full sm:w-72 md:w-64 lg:w-80 max-h-[350px]">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center max-h-[350px]">
              <div className="flex items-end mb-2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto">
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
              <div className="flex flex-col gap-3">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-800">{e.size}</h3>
                  <p className="text-gray-600">{e.weight}</p>
                </div>

                <div className="text-gray-700 text-center">
                  <p>{e.price}</p>
                </div>

                {/* <div className="flex justify-center">
                  <Link href={"/mealplan"}>
                    <button className="bg-[#EE9422] hover:bg-gray-300 text-white px-4 py-2 rounded-md transition-colors duration-300">
                      View Meal
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center p-6 gap-4 mt-auto">
        <WhatsAppButton />
        <Link href={buttons[0].link_to!}>
          <button
            key={0}
            className={`bg-[${buttons[0].outlineButton ? "transprent" : buttons[0].color}] rounded-md min-h-16 px-10 text-[#FFF8EF] font-medium hover:opacity-80 ${buttons[0].outlineButton && "border-2"} border-[#999999] } min-w-[220px]`}
          >
            {buttons[0].title}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealPortionSize;
