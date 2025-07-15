"use client";
import { HomePageStrings } from "@/constants/title-constants";
import Button from "@/sb-ui/button/button";
import WhatsAppButton from "@/utils/whatsapp-connect";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Section_type_8() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/product?scrollTo=treatsec");
  };
  const data: any = HomePageStrings.fifthSection[0];
  return (
    <section className="bg-[#C4DEE1] mx-4 md:mx-0 py-10 relative overflow-hidden rounded-md md:rounded-none">
      <div className="sb-container mx-auto flex flex-col min-h-[500px] justify-center items-center relative">
        <div className="w-full h-64 sm:h-80 md:h-96 flex justify-center items-center relative lg:absolute lg:w-full lg:h-full lg:z-0">
          <Image
            key={0}
            src={data.image_link}
            alt="Visual Representation"
            fill
            className="object-cover object-center w-full h-full max-w-full max-h-full"
            style={{ objectPosition: "right" }}
            onError={(e) => console.error("Image load failed:", e)}
            priority
          />
        </div>

        <div
          className="relative z-10 flex flex-col justify-center gap-4 px-4 sm:px-8 
        lg:px-10 xl:pl-16 h-full min-w-full max-w-3xl mx-auto lg:mx-0 text-center lg:text-left items-center 
        lg:items-start min-h-[400px] lg:min-h-[500px] lg:justify-left"
        >
          <div className="flex gap-2 justify-center lg:justify-start w-full">
            <p className="text-[#028391] font-semibold text-2xl md:text-4xl lg:text-6xl text-center lg:text-left drop-shadow-lg">
              {data.title}{" "}
              <span className="text-[#EE9422] font-semibold text-2xl md:text-4xl lg:text-6xl text-center lg:text-left">
                {data.sub_title}
              </span>
            </p>
          </div>

          <div className="flex justify-center lg:justify-start w-full max-w-2xl mx-auto lg:mx-0">
            <p className="text-black text-base md:text-lg py-2 text-center lg:text-left drop-shadow-lg">
              {data.description}
            </p>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mt-4 w-full">
            <Button
              text="Explore Pricing Plans"
              handleRedirect={handleNavigate}
              cls="bg-[#EE9422] min-w-[180px] h-14 md:h-16 rounded-md px-8 md:px-10 text-[#FFF8EF] hover:opacity-80 text-base md:text-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
