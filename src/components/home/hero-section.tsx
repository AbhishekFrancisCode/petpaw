import Image from "next/image";
import logo_herosection from "../../../public/images/logos/pawtful_logo_herobanner.svg";
import hero_image from "../../../public/images/img/hero_img.png";
import HeroTitle from "./includes/hero-title";
import NewsLetterPage from "./includes/explore-form";
import ExploreForm from "./includes/explore-form";
export default function HeroSection() {
  return (
    <div className="bg-[#FFF8EF] pb-10 lg:pb-0">
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
            <div className="px-6 md:px-0 lg:pl-16 xl:24">
              <HeroTitle />
            </div>
            <div className="px-6 md:px-0 flex place-content-center lg:place-content-start lg:pl-16 xl:24">
              <ExploreForm />
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block
         absolute w-[200px]"
        >
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
