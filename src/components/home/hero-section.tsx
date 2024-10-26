import Image from "next/image";
import logo_herosection from "../../../public/images/logos/pawtful_logo_herobanner.svg";
import hero_image from "../../../public/images/img/hero_img.png";
import HeroTitle from "./includes/hero-title";
export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="flex h-[800px] justify-center">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full h-full">
          <div className="order-1 lg:order-2 relative bg-orange-200 col-span-1">
            <Image
              objectPosition="bottom"
              src={hero_image}
              alt="pawtful"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="order-2 lg:order-1 grid grid-rows-2 bg-[#FFF8EF]">
            <div className="">
              <HeroTitle />
            </div>
            <div className="bg-slate-400"></div>
          </div>
        </div>
        <div className="hidden lg:visible absolute w-[200px]">
          <Image
            src={logo_herosection}
            alt="pawtful"
            width={0}
            height={0}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
