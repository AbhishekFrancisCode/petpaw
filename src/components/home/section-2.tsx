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
import HeroTitle from "./includes/hero-title";

interface ImageSlide {
  title: string;
  src: string;
  indicator_title?: string;
  discription?: string;
}

const imageSlides: ImageSlide[] = [
  {
    title: "Chicken - Low GI Chicken Meal",
    src: "https://ik.imagekit.io/funlogic/pawfull/chicken%20and%20sweet%20potato.JPG?updatedAt=1745738737447",
    indicator_title: "Chicken",
    discription: "Great for the gut and gentle on the tummy"
  },
  {
    title: "Mutton - Protein Rich Mutton Meal",
    src: "https://ik.imagekit.io/funlogic/pawfull/mutton-cutout.png?updatedAt=1744636807052",
    indicator_title: "Mutton",
    discription: "Rich in essenitial Amino Acids which boost muscle growth & repair"
  },
  {
    title: "Fish - Omega 3 Rich Fish",
    src: "https://ik.imagekit.io/funlogic/pawfull/Fish%20and%20Brocolli%20meal%20with%20ingredients%20cutout%20.jpg?updatedAt=1744636805971",
    indicator_title: "Fish",
    discription: "Promotes healthy skin and coat"
  },
  {
    title: "Veg - Veg Protein",
    src: "https://ik.imagekit.io/funlogic/pawfull/soya-cutout.png?updatedAt=1744636807048",
    indicator_title: "Veg",
    discription: "Balanced diet veg meals"
  },
  {
    title: "Treats - All Natural",
    src: "https://ik.imagekit.io/funlogic/pawfull/all_snacks-cut%20out%20.png",
    indicator_title: "Treats",
    discription: "Small Batch, naturally short shelf life treats"
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
    <section className="bg-[#FFF8EF] py-8">
      <div className="sb-container mx-auto grid grid-rows-5 grid-cols-1 lg:grid-rows-1 lg:grid-cols-8 lg:min-h-[700px]">
        {/* Left Content Block */}
        <div className="order-1 flex flex-col place-content-center items-center row-span-2 lg:col-span-4 bg-transparent py-10`">
          <div className="flex flex-col w-full lg:pl-12 ">
            <div className="px-6 md:px-0 mb-8">
              <HeroTitle title="Backed by science," description="Cooked with love" />
            </div>

            <div className="flex-1 w-full lg:pr-24 py-4">
              <p className="text-[#333333] text-base font-normal text-center lg:text-left px-6 md:px-0">
                Made with high quality human-grade ingredients, Pawftul’s freshly cooked meals are
                designed to be gentle on your dog’s gut while providing a balanced diet that meets
                their daily nutritional needs – helping them stay strong, healthy and fit.
              </p>
              <div className="flex justify-center lg:justify-start mt-5">
                <Button
                  text="Explore Meals"
                  handleRedirect={handleNavigate}
                  cls="bg-[#028391] min-w-[200px] h-16 rounded-md px-10 text-white hover:opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Block */}
        <div className="order-2 row-span-3 lg:col-span-4 py-4 px-4 lg:px-6 flex flex-col items-center lg:items-center">
          <div className="flex flex-col w-full items-center lg:items-center">
            {/* Slide Title */}
            <div
              className="order-2 lg:order-1 text-center lg:text-left text-[#028391] font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2rem)"
              }}
            >
              {imageSlides[activeTabIndex].title}
            </div>

            {/* Slide Image & Description */}
            <div className="order-3 lg:order-3 flex flex-col items-center py-4 min-w-[350px] md:min-w-[600px]">
              <div className="w-full min-w-[300px] h-[400px] relative mt-8">
                <Image
                  key={Math.round.toString()}
                  src={imageSlides[activeTabIndex].src}
                  alt=""
                  fill
                  sizes=""
                  objectFit="cover"
                  objectPosition="top"
                  onError={(e) => console.error("Image load failed:", e)}
                />
              </div>
              <div className="text-base font-medium text-[#028391] text-center lg:text-left mt-4 px-6 md:px-0">
                {imageSlides[activeTabIndex].discription}
              </div>
            </div>

            {/* Tabs */}
            <div className="order-1 lg:order-2 relative w-full mt-6 lg:mt-10 mb-6 lg:mb-0">
              <div className="flex justify-evenly border-b border-[#028391] border-opacity-60">
                {imageSlides.map((tab, idx) => (
                  <button
                    key={idx}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className={`pt-2 pb-3 min-w-[80px] sm:min-w-[100px] text-sm transition-opacity ${
                      idx === activeTabIndex
                        ? "text-[#028391] font-medium"
                        : "text-[#028391] opacity-50"
                    }`}
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {tab.indicator_title}
                  </button>
                ))}
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
