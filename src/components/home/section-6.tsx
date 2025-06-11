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
    <section className="place-content-center bg-[#C4DEE1]">
      <div className="mx-auto min-h-[500px] grid grid-rows-10 grid-cols-1 lg:grid-rows-1 lg:grid-cols-10">
        {/* Image Section */}
        <div className="order-1 lg:order-2 row-span-4 lg:col-span-5">
          <div className="w-full h-full relative">
            <Image
              key={0}
              src={data.image_link}
              alt="Visual Representation"
              fill
              className="object-cover object-right max-w-[800px]"
              onError={(e) => console.error("Image load failed:", e)}
            />
          </div>
        </div>

        {/* Text and CTA Section */}
        <div className="order-2 lg:order-1 flex flex-col row-span-6 lg:col-span-5 bg-[#C4DEE1] p-6 lg:p-10 2xl:pl-48 h-full">
          {/* Title & Subtitle */}
          <div className="flex flex-col px-4 md:px-4 lg:px-10 xl:pl-12 xl:px-0">
            <p className="text-[#028391] text-4xl lg:text-6xl font-semibold py-1 text-center md:text-left">
              {data.title}
            </p>
            <p className="text-[#EE9422] text-4xl lg:text-6xl font-semibold py-1 text-center md:text-left">
              {data.sub_title}
            </p>
          </div>

          {/* Description */}
          <div className="flex justify-center lg:justify-start px-4 lg:px-10 xl:px-12 py-4 w-full lg:w-[550px]">
            <p className="text-[#333333] text-sm py-2 text-left">{data.description}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start px-4 lg:px-10 xl:px-12 gap-4 mt-auto">
            <Button
              text="Explore Pricing Plans"
              handleRedirect={handleNavigate}
              cls="bg-[#EE9422] min-w-[200px] h-16 rounded-md px-10 text-[#FFF8EF] hover:opacity-80"
            />
            {/* <WhatsAppButton /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
