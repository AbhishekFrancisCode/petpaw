"use client";
import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ImageSlide {
  title: string;
  src: string;
}

const imageSlides: ImageSlide[] = [
  {
    title: "Chicken",
    src: "https://ik.imagekit.io/funlogic/meal_bowl_1.png?updatedAt=1730057316888"
  },
  { title: "Mutton", src: "https://ik.imagekit.io/funlogic/meal_bowl.png?updatedAt=1730057316491" },
  {
    title: "Treats",
    src: "https://ik.imagekit.io/funlogic/meal_bowl_1.png?updatedAt=1730057316888"
  },
  { title: "Fish", src: "https://ik.imagekit.io/funlogic/meal_bowl.png?updatedAt=1730057316491" }
];

export default function Section_type_2() {
  const [swiper, setSwiper] = useState<any>(null);
  const [buttonindex, setIndex] = useState<number>(0);

  // const slideTo = (index: any) => swiper.slideTo(index);

  const handleTitleClick = (index: number) => {
    if (swiper) {
      swiper.slideToLoop(index);
      setIndex(index);
    }
  };

  return (
    <div className="place-content-center bg-[#FFF8EF]">
      <div className="container mx-auto min-h-[500px] grid grid-rows-5 grid-cols-1 lg:grid-rows-1 lg:grid-cols-5">
        <div className="order-2 lg:order-1 flex flex-col row-span-2 lg:col-span-2 bg-[#FFF8EF] py-10">
          <div className="lg:px-10 xl:px-12">
            <p className={`text-[#EE9422] text-3xl font-semibold py-1 text-left`}>
              {"Crafted with Science, Improved with Love"}
            </p>
          </div>
          <div className="flex-1 place-content-center lg:place-content-start lg:px-10 xl:px-12 py-4">
            <p className={`text-[#333333] text-base font-normal py-1 text-left`}>
              {
                "Pawtful's meals are expertly crafted by a team of board-certified veterinary nutritionists, using the finest locally and sustainably sourced ingredients. Our recipes are designed to enhance nutrient absorption through carefully controlled cooking methods, ensuring that your dog enjoys the wholesome goodness of real, flavourful food."
              }
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 p-0  row-span-3 lg:col-span-3 pt-4">
          <div className=" flex w-full place-content-start">
            <Swiper
              onSwiper={(swiper) => setSwiper(swiper)}
              loop={true}
              spaceBetween={10}
              slidesPerView={1.2} // Display one full image and part of the next
              centeredSlides={false} // Centering is disabled to show no left image
              style={{ padding: "0 0%" }} // Adjust for better appearance// Adjust for better appearance
              className="mySwiper"
            >
              {imageSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[700px] h-[400px] rounded-md border-[#999999] border-2 relative">
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
                  {/* <img src={slide.src} alt={slide.title} style={{ width: "100%" }} /> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div style={{ display: "flex", justifyContent: "left", marginTop: "20px" }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
