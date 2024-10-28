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

interface ImageSlide {
  title: string;
  src: string;
  indicator_title?: string;
  discription?: string;
}

const imageSlides: ImageSlide[] = [
  {
    title: "Free-range Chicken",
    src: "https://ik.imagekit.io/funlogic/meal_bowl_1.png?updatedAt=1730057316888",
    indicator_title: "Chicken",
    discription: "Low GI and high in protein, it's great for the gut and gentle on tummies"
  },
  {
    title: "Grass-Fed Lamb",
    src: "https://ik.imagekit.io/funlogic/meal_bowl.png?updatedAt=1730057316491",
    indicator_title: "Mutton",
    discription: "A calorie-dense recipe that's high in zinc and antioxidants for healthy skin."
  },
  {
    title: "Wild-caught Fish",
    src: "https://ik.imagekit.io/funlogic/meal_bowl.png?updatedAt=1730057316491",
    indicator_title: "Fish",
    discription: "Filled with Omega-3s and 6s that boosts the brain and digestive health."
  },
  {
    title: "Healthy Treats for Happy Tails",
    src: "https://ik.imagekit.io/funlogic/meal_bowl_1.png?updatedAt=1730057316888",
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

  return (
    <div className="place-content-center bg-[#FFF8EF] py-8">
      <div className="container mx-auto min-h-[700px] grid grid-rows-5 grid-cols-1 md:grid-rows-1 md:grid-cols-5">
        <div className="order-2 md:order-1 flex flex-col row-span-2 md:col-span-2 bg-[#FFF8EF] py-10">
          <div className="flex flex-col md:px-4 lg:px-10 xl:pl-12 xl:px-0">
            <p
              className={`text-[#EE9422] md:text:2xl lg:text-[64px] leading-[68px] font-semibold py-1 text-center md:text-left`}
            >
              {"Crafted with Science,"}
            </p>
            <p
              className={`text-[#028391] md:text:2xl lg:text-[64px] leading-[68px] font-semibold py-1 text-center md:text-left`}
            >
              {"Improved with Love"}
            </p>
          </div>
          <div className="flex-1 place-content-center md:place-content-start lg:px-10 xl:px-12 py-4">
            <p className={`text-[#333333] text-base font-normal py-1 text-center md:text-left`}>
              {
                "Pawtful's meals are expertly crafted by a team of board-certified veterinary nutritionists, using the finest locally and sustainably sourced ingredients. Our recipes are designed to enhance nutrient absorption through carefully controlled cooking methods, ensuring that your dog enjoys the wholesome goodness of real, flavourful food."
              }
            </p>
            <div className="flex place-content-center lg:place-content-start mt-5">
              <Button
                text={"Explore Meals"}
                handleRedirect={() => {}}
                cls="bg-[#028391] w-[300px] min-h-16 rounded-md text-white "
              />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 p-0  row-span-3 md:col-span-3 py-4">
          <div className=" flex w-full place-content-end px-2 md:px-6">
            {/* <Swiper
              onSwiper={(swiper) => setSwiper(swiper)}
              loop={true}
              style={{ padding: "0 0%" }} // Adjust for better appearance// Adjust for better appearance
              className="mySwiper"
              breakpoints={{
                640: { // Small devices (mobile)
                  slidesPerView: 1,
                  centeredSlides: true
                },
                768: { // Medium devices (tablets)
                  spaceBetween : 10,
                  slidesPerView: 1.1,
                  centeredSlides: false
                },
                1024: { // Large devices (desktops)
                  spaceBetween : 10,
                  slidesPerView: 1.2,
                  centeredSlides: false
                },
                1440: { // Large devices (desktops)
                  spaceBetween : 10,
                  slidesPerView: 1.3,
                  centeredSlides: false
                },
              }}
            >
              {imageSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[400px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[400px] xl:w-[600px] xl:h-[450px] rounded-md border-[#999999] border-2 relative flex">
                    <Image
                      key={index}
                      src={slide.src}
                      alt={""}
                      fill
                      sizes=""
                      objectFit="cover"
                      className="rounded-xl"
                      objectPosition="top"
                      onError={(e) => {
                        console.error("Image load failed:", e);
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
            <div>
              <div className="flex flex-col py-4 max-w-[750px] items-center">
                <div className="text-4xl font-bold text-[#028391] text-center">
                  {imageSlides[activeTabIndex].title}
                </div>
                <div className="w-full h-[400px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[400px] xl:w-[750px] xl:h-[550px] relative flex mt-8">
                  <Image
                    key={Math.round.toString()}
                    src={imageSlides[activeTabIndex].src}
                    alt={""}
                    fill
                    sizes=""
                    objectFit="cover"
                    className="rounded-xl"
                    objectPosition="top"
                    onError={(e) => {
                      console.error("Image load failed:", e);
                    }}
                  />
                </div>
                <div className="text-base font-medium text-[#028391] text-center max-w-[500px]">
                  {imageSlides[activeTabIndex].discription}
                </div>
              </div>
              <div className="relative mt-10">
                <div className="flex justify-evenly border-b border-[#028391] border-opacity-60">
                  {imageSlides.map((tab, idx) => {
                    return (
                      <button
                        key={idx}
                        ref={(el) => (tabsRef.current[idx] = el)}
                        className="pt-2 pb-3  min-w-[150px]"
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

          {/* <div className="flex justify-center lg:justify-start mt-5">
            {imageSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleTitleClick(index)}
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  cursor: "pointer",
                  background: "transparent",
                  border: `${buttonindex === index ? "2px solid #ccc" : "1px solid #ccc"}`
                }}
              >
                {slide.title}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
