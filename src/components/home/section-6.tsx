"use client";
import Button from "@/sb-ui/button/button";
import Image from "next/image";

export default function Section_type_8() {
  return (
    <div className="place-content-center bg-[#FFF8EF]">
      <div className="mx-auto min-h-[800px] grid grid-rows-10 grid-cols-1 lg:grid-rows-1 lg:grid-cols-10">
        <div className="order-2 lg:order-1 flex flex-col row-span-6 lg:col-span-6 bg-[#C4DEE1] p-10 lg:p-20">
          <div className="lg:px-10 xl:px-12">
            <p className={`text-[#028391] text-5xl font-semibold py-1 text-left`}>
              {"Benefits of Eating Fresh Food"}
            </p>
          </div>
          <div className="flex-1 place-content-center lg:place-content-start lg:px-10 xl:px-12 py-4 w-full lg:w-[550px]">
            <p className={`text-[#333333] text-base font-normal py-2 text-left`}>
              {
                "IMPROVED DIGESTION & ENERGY \n More digestible than kibble, giving your pup more nutrients and pep in their step. ALLERGY & WEIGHT CONTROL Our food helps maintain your pup's ideal weight and is great for allergies and sensitivities. MORE MEALTIMES TOGETHER A fresh, whole food diet has been proven to help dogs live up to 2.5 years longer."
              }
            </p>
          </div>
          <div className="flex place-content-center lg:place-content-end">
            <Button
              text={"Explore Pricing Plans"}
              handleRedirect={() => {}}
              cls="bg-[#028391] w-[300px] min-h-16 rounded-xl text-white "
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 p-0  row-span-4 lg:col-span-4 bg-slate-400">
          <div className="w-full h-full lg:h-[800px] relative">
            <Image
              key={0}
              src={
                "https://ik.imagekit.io/funlogic/price_plans_1.jpg?updatedAt=1730188452928?tr=w-500"
              }
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
    </div>
  );
}
