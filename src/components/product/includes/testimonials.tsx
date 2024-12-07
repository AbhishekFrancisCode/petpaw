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
  }
];

export default function Testimonials() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const handleVideoPlayer = (url: any) => {
    console.log(url);
    setUrl(url);
    setShow(true);
  };
  return (
    <div className="mx-auto bg-[#F9E8D9] min-w-full">
      <div className=" w-[315px] lg:w-[571px] mx-auto">
        <SectionHeading title={"Pawtful's Testimonials"} />
      </div>
      <div className="mx-auto">
        <TestimonialsSwiper imageList={testimonialsJson} handleVideoPlayer={handleVideoPlayer} />
      </div>
      <div className="flex items-center justify-center gap-6 py-6">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram Logo"
            className="size-16"
          />
        </div>
        <div className="text-3xl font-semibold text-[#EE9422]">#pawtful</div>
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
  <div className="flex place-items-center relative">
    <div className="swiper-button-prev px-4">
      <Image alt="" width={28} height={28} src={chevronLeft} className="cursor-pointer" />
    </div>
    <div className="w-full max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={35}
        cssMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        initialSlide={1} // Starts from the second slide
        className=""
      >
        {imageList.map((slide: any, index: number) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div key={index} className="relative">
              {/* Media Content */}
              <YouTubePlayer videoId="JbTbM9c4urI" />
              {/* Brand Logo Overlay */}
              {/* <div className="absolute top-2 right-2 bg-white bg-opacity-80 p-1 rounded-full shadow-md">
              <div>{slide.desc}</div>
            </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="swiper-button-next px-4">
      <Image alt="" width={28} height={28} src={chevronRight} className="cursor-pointer " />
    </div>
  </div>
);

const YouTubePlayer = ({ videoId }: { videoId: any }) => {
  const src = `https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}`;

  return (
    <div className="youtube-wrapper1">
      <div className="youtube-container1">
        <iframe
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Player"
          style={{
            border: "6px solid #ddd",
            borderRadius: "8px"
          }}
        ></iframe>
      </div>
    </div>
  );
};
