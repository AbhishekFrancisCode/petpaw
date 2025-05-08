"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "@/sb-ui/button/button";
import { useRouter } from "next/navigation";

interface ImageSlide {
  title: string;
  src: string;
  indicator_title?: string;
  discription?: string;
}

const imageSlides: ImageSlide[] = [
  {
    title: "Chicken",
    src: "https://ik.imagekit.io/funlogic/pawfull/chicken%20and%20sweet%20potato.JPG?updatedAt=1745738737447",
    indicator_title: "Chicken",
    discription: "Low GI and high in protein, it's great for the gut and gentle on tummies"
  },
  {
    title: "Lamb",
    src: "https://ik.imagekit.io/funlogic/pawfull/mutton-cutout.png?updatedAt=1744636807052",
    indicator_title: "Mutton",
    discription: "A calorie-dense recipe that's high in zinc and antioxidants for healthy skin."
  },
  {
    title: "Fish",
    src: "https://ik.imagekit.io/funlogic/pawfull/Fish%20and%20Brocolli%20meal%20with%20ingredients%20cutout%20.jpg?updatedAt=1744636805971",
    indicator_title: "Fish",
    discription: "Filled with Omega-3s and 6s that boosts the brain and digestive health."
  },
  {
    title: "Veg",
    src: "https://ik.imagekit.io/funlogic/pawfull/soya-cutout.png?updatedAt=1744636807048",
    indicator_title: "Veg",
    discription: "Rich in fermentable fibre, omega-3s and bioactive ingredients for a healthy gut."
  },
  {
    title: "Treats",
    src: "https://ik.imagekit.io/funlogic/pawfull/all_snacks-cut%20out%20.png",
    indicator_title: "Treats",
    discription: "Rich in fermentable fibre, omega-3s and bioactive ingredients for a healthy gut."
  }
];

export default function Section_type_2() {
  const [swiper, setSwiper] = useState<any>(null);
  const [buttonindex, setIndex] = useState<number>(0);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef: any = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab: any = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const handleTitleClick = (index: number) => {
    if (swiper) {
      swiper.slideToLoop(index);
      setIndex(index);
    }
  };
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/mealplan`);
  };

  return (
    <section className="place-content-center bg-[#FFF8EF] py-8">
      <div className="container mx-auto lg:min-h-[700px] grid grid-rows-5 grid-cols-1 lg:grid-rows-1 lg:grid-cols-5">
        <div className="order-1 flex flex-col items-center row-span-2 lg:col-span-2 bg-[#FFF8EF] py-10">
          <div className="flex flex-col  lg:px-4 md:max-w-[550px]">
            <p
              className={`text-[#EE9422] text-4xl lg:text-[64px] lg:leading-[68px] font-semibold py-1 text-center md:text-left`}
            >
              {"Backed by science,"}
            </p>
            <p
              className={`text-[#028391] text-4xl lg:text-[64px] lg:leading-[68px] font-semibold py-1 text-center md:text-left`}
            >
              {"Cooked with love"}
            </p>
          </div>
          <div className="flex-1 place-content-center lg:place-content-start lg:px-10 xl:px-12 py-4">
            <p
              className={`text-[#333333] text-base font-normal py-1 text-center lg:text-left px-6 md:px-0`}
            >
              {
                "Formulated by nutritionists, Pawftul’s freshly cooked meals are designed to be gentle on your dog’s gut while providing a balanced diet that meets their daily nutritional needs - helping them stay strong, healthy and fit."
              }
            </p>
            <div className="flex place-content-center lg:place-content-start mt-5">
              <Button
                text={"Explore Meals"}
                handleRedirect={handleNavigate}
                cls="bg-[#028391] min-w-[200px] h-16 rounded-md px-10 text-[#ffffff] hover:opacity-80"
              />
            </div>
          </div>
        </div>
        <div className="order-2 row-span-3 lg:col-span-3 lg:py-4 ">
          <div className=" flex flex-col w-full place-content-center lg:place-content-end items-center px-2 lg:px-6">
            <div className="order-2 lg:order-1 text-4xl font-bold text-[#028391] text-center">
              {imageSlides[activeTabIndex].title}
            </div>
            <div className="order-3 lg:order-2 flex flex-col py-4 max-w-[600px] lg:min-w-[600px] place-content-center items-center">
              <div className="w-full min-w-[350px] h-[400px] relative mt-8">
                <Image
                  key={Math.round.toString()}
                  src={imageSlides[activeTabIndex].src}
                  alt={""}
                  fill
                  sizes=""
                  objectFit="cover"
                  // className="rounded-xl"
                  objectPosition="top"
                  onError={(e) => {
                    console.error("Image load failed:", e);
                  }}
                />
              </div>
              <div className="text-base font-medium text-[#028391] text-center lg:max-w-[500px] px-6 md:px-0">
                {imageSlides[activeTabIndex].discription}
              </div>
            </div>
            <div className="order-1 lg:order-3 relative mb-6 lg:mb-0 lg:mt-10">
              <div className="flex justify-evenly border-b border-[#028391] border-opacity-60">
                {imageSlides.map((tab, idx) => {
                  return (
                    <button
                      key={idx}
                      ref={(el) => (tabsRef.current[idx] = el)}
                      className={`pt-2 pb-3 min-w-[80px] sm:min-w-[150px] text-sm ${idx == activeTabIndex ? "text-[#028391] font-medium" : "text-[#028391] opacity-50"} `}
                      onClick={() => setActiveTabIndex(idx)}
                    >
                      {tab.indicator_title}
                    </button>
                  );
                })}
              </div>
              <span
                className="absolute -bottom-0.5 block h-1 bg-[#028391] transition-all duration-500"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
