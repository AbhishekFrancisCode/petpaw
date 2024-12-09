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
    <section className="bg-[#FFF8EF] pb-10 lg:pb-0">
      <div className="flex h-[800px] justify-center">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 w-full h-full">
          <div className="order-1 lg:order-2 relative col-span-2">
            <div className="inline-block max-w-full mx-auto pt-[70px] h-full place-content-center relative bg-black">
              <video
                ref={videoRef}
                src="/images/img/heroVid.mp4"
                controls={false} // Disables the controls
                autoPlay
                loop
                muted
                className="w-full aspect-video object-center max-h-[800px]"
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
          <div className="order-2 lg:order-1 grid grid-rows-3 col-span-2">
            {/* <div className="hidden lg:block absolute w-[35%]">
              <div className="flex max-h-[200px] place-content-">
                <Image
                  src={logo_herosection}
                  alt="pawtful"
                  width={0}
                  height={0}
                  className="h-full max-h-[250px] w-[200px]"
                />
              </div>
            </div> */}
            <div className="px-6 md:px-0 lg:pl-16 xl:24 pt-24">
              <HeroTitle />
            </div>
            <div className="px-6 md:px-0 flex place-content-center lg:place-content-start lg:pl-16 xl:24">
              <ExploreForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
