"use client";
import { InstagramIcon } from "next-share";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "./css/layout.css";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import chevronLeft from "../../../../public/images/svg/chevron_left.svg";
import chevronRight from "../../../../public/images/svg/chevron_right.svg";
import SectionHeading from "@/components/common/section-heading";
import { Title } from "@/components/common/title-comp";

const testimonialsJson = [
  {
    type: "video",
    name: "Zubair",
    who: "Founder, Pastelfeathers <br /> Tinsukia, Assam",
    img: "/images/img/zubair.png",
    star: "",
    instagram: "",
    desc: `JbTbM9c4urI`
  },
  {
    type: "video",
    name: "Ali Saiger",
    who: "Founder, Pastelfeathers <br /> Tinsukia, Assam",
    img: "/images/img/ali.png",
    star: "",
    instagram: "",
    desc: `JbTbM9c4urI`
  },
  {
    type: "video",
    name: "Sreekanth",
    who: "Founder, Pastelfeathers <br /> Tinsukia, Assam",
    img: "/images/img/sreekanth.png",
    star: "",
    instagram: "",
    desc: `JbTbM9c4urI`
  },
  {
    type: "video",
    name: "Priyanka",
    who: "Founder, Pastelfeathers <br /> Tinsukia, Assam",
    img: "/images/img/priyanka.png",
    star: "",
    instagram: "",
    desc: `JbTbM9c4urI`
  },
  {
    type: "video",
    name: "Zubair",
    who: "Founder, Pastelfeathers <br /> Tinsukia, Assam",
    img: "/images/img/zubair.png",
    star: "",
    instagram: "",
    desc: `JbTbM9c4urI`
  }
];

export default function TestimonialsVideo() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const handleVideoPlayer = (url: any) => {
    console.log(url);
    setUrl(url);
    setShow(true);
  };
  return (
    <div className="w-full bg-transparent mt-12 px-4 sm:px-6">
      <div className="max-w-md sm:max-w-lg lg:max-w-2xl mx-auto">
        <Title
          variant="h2"
          textStyle="primary"
          className="text-[#028391] text-[28px] sm:text-[32px] lg:text-4xl font-bold text-center py-6"
        >
          Pawtful's Testimonials
        </Title>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <TestimonialsSwiper imageList={testimonialsJson} handleVideoPlayer={handleVideoPlayer} />
      </div>
    </div>
  );
}

const TestimonialsSwiper = ({
  imageList,
  handleVideoPlayer
}: {
  imageList: any;
  handleVideoPlayer: Function;
}) => (
  <div className="flex items-center relative">
    {/* Left arrow - visible on mobile only, vertically centered */}
    <div className="swiper-button-prev absolute left-0 z-10 md:hidden top-1/2 transform -translate-y-1/2 px-2">
      <Image alt="Previous" width={28} height={28} src={chevronLeft} className="cursor-pointer" />
    </div>

    <div className="w-full max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        cssMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        mousewheel={true}
        keyboard={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        initialSlide={1}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 35 }
        }}
      >
        {imageList.map((slide: any, index: number) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative">
              <YouTubePlayer videoId="JbTbM9c4urI" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Right arrow - visible on mobile only, vertically centered */}
    <div className="swiper-button-next absolute right-0 z-10 md:hidden top-1/2 transform -translate-y-1/2 px-2">
      <Image alt="Next" width={28} height={28} src={chevronRight} className="cursor-pointer" />
    </div>

    <div className="swiper-pagination"></div>
  </div>
);

const YouTubePlayer = ({ videoId }: { videoId: any }) => {
  const src = `https://www.youtube.com/embed/${videoId}?loop=1&mute=1`;

  return (
    <div className="youtube-wrapper1 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
      <div className="youtube-container1 aspect-w-16 aspect-h-9">
        <iframe
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          title="YouTube Video Player"
          className="w-full h-full rounded-lg border-[6px] border-gray-300"
        ></iframe>
      </div>
    </div>
  );
};
