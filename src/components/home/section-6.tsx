"use client";
import { HomePageStrings } from "@/constants/title-constants";
import Button from "@/sb-ui/button/button";
import WhatsAppButton from "@/utils/whatsapp-connect";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Section_type_8() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/mealplan`);
  };
  const data: any = HomePageStrings.fifthSection[0];
  return (
    <section className="place-content-center bg-[#FFF8EF]">
      <div className="mx-auto min-h-[500px] grid grid-rows-10 grid-cols-1 lg:grid-rows-1 lg:grid-cols-10">
        <div className="order-2 lg:order-1 flex flex-col row-span-6 lg:col-span-6 bg-[#C4DEE1] p-10 lg:px-20 lg:py-10">
          {/* <div className="lg:px-10 xl:px-12">
            <p className={`text-[#028391] text-5xl font-semibold py-1 text-left`}>
              {"Benefits of Eating Fresh Food"}
            </p>
          </div> */}
          <div className="flex flex-col md:px-4 lg:px-10 xl:pl-12 xl:px-0">
            <p
              className={`text-[#028391] text-4xl lg:text-[64px] lg:leading-[68px] font-semibold py-1 text-center md:text-left`}
            >
              {data.title}
            </p>
            <p
              className={`text-[#EE9422] text-4xl lg:text-[64px] lg:leading-[68px] font-semibold py-1 text-center md:text-left`}
            >
              {data.sub_title}
            </p>
          </div>
          <div className="flex place-content-center lg:place-content-start lg:px-10 xl:px-12 py-4 w-full lg:w-[550px]">
            <p className={`text-[#333333] text-sm py-2 text-left`}>{data.description}</p>
          </div>
          <div className="flex place-content-center lg:place-content-start lg:px-10 xl:px-12 gap-4">
            <Button
              text={"Explore Pricing Plans"}
              handleRedirect={handleNavigate}
              cls="bg-[#EE9422] min-w-[200px] h-16 rounded-md px-10 text-[#FFF8EF] hover:opacity-80 "
            />
            <WhatsAppButton />
          </div>
        </div>
        <div className="order-1 lg:order-2 p-0  row-span-4 lg:col-span-4">
          <div className="w-full h-full lg:h-[500px] relative">
            <Image
              key={0}
              src={data.image_link}
              alt={""}
              fill
              sizes=""
              objectFit="letf"
              className=""
              objectPosition="left"
              onError={(e) => {
                console.error("Image load failed:", e);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
