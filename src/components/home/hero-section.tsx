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
    <section className="bg-[#FFF8EF] ">
      <div className="flex">
        <div className="flex flex-col lg:flex-row w-full mx-auto">
          <div className="order-1 lg:order-2 relative w-full lg:w-1/2 flex-shrink-0">
            <div className="flex max-w-full bg-transparent">
              <div className="relative w-full">
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
          </div>
          <div className="order-2 lg:order-1 flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 xl:px-16 pb-4 md:pb-8 pt-4">
            {/* Hero title section */}
            <div className="w-full flex justify-center md:justify-start mb-8">
              <HeroTitle title="Freshly Cooked," description="Meals for Dogs!" />
            </div>

            {/* Explore form section */}
            <div className="w-full flex justify-start">
              <ExploreForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
