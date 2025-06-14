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
      <div className="flex h-[900px] md:min-h-[calc(100vh-0px)] justify-center">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 w-full h-full mx-auto">
          <div className="order-1 lg:order-2 relative col-span-2">
            <div className="flex inline-block max-w-full mx-auto pt-[70px] h-full place-content-center relative bg-transparent">
              <video
                ref={videoRef}
                src="https://ik.imagekit.io/funlogic/Pawtful%20Final%20With%20Text_1280x960.mp4?updatedAt=1738081202132"
                controls={false}
                autoPlay
                loop
                muted
                className="w-full object-contain  p-0"
              ></video>
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <GiSoundOff size={32} /> : <GiSoundOn size={32} />}
              </button>
            </div>
          </div>
          <div className="order-2 lg:order-1 flex flex-col col-span-2 lg:mt-44">
            {/* Spacer for top margin on medium and up */}
            <div className="hidden md:block h-8"></div>

            {/* Hero title section */}
            <div className="md:px-0 lg:pl-12  mb-8">
              <HeroTitle title="Freshly Cooked," description="Meals for Dogs!" />
            </div>

            {/* Explore form section */}
            <div className="px-6 md:px-0 flex justify-center lg:justify-start lg:pl-12">
              <ExploreForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
