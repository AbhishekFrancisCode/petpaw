"use client";
import Image from "next/image";
import logo_herosection from "../../../public/images/logos/pawtful_logo_herobanner.svg";
import HeroTitle from "./includes/hero-title";
import ExploreForm from "./includes/explore-form";
import { useRef, useState } from "react";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <section className="bg-[#FFF8EF]">
      <div className="flex h-[900px] md:min-h-screen justify-center">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 w-full h-full">
          <div className="order-1 lg:order-2 relative col-span-2">
            <div className="inline-block max-w-full mx-auto pt-[70px] h-full place-content-center relative bg-transparent">
              <video
                ref={videoRef}
                src="https://ik.imagekit.io/funlogic/Pawtful%20Final%20With%20Text_1280x960.mp4?updatedAt=1738081202132"
                controls={false}
                autoPlay
                loop
                muted
                className="w-full min-h-full object-top lg:object-cover p-0"
              ></video>
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <GiSoundOff size={32} /> : <GiSoundOn size={32} />}
              </button>
            </div>
            {/* <Image
                objectPosition="bottom"
                src={hero_image}
                alt="pawtful"
                fill={true}
                className="object-cover"
              /> */}
          </div>
          <div className="order-2 lg:order-1 grid grid-rows-12 col-span-2">
            <div className="hidden md:block row-span-2 max-h-3 "></div>
            <div className="row-span-4 px-6 md:px-0 lg:pl-44 ">
              <HeroTitle />
            </div>
            {/* <div className="row-span-1 max-h-3 "></div> */}
            <div className="row-span-5 px-6 md:px-0 flex place-content-center lg:place-content-start lg:pl-44">
              <ExploreForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
