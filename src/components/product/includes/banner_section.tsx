"use client";
import Button from "@/sb-ui/button/button";
import Image from "next/image";

export default function BannerSection() {
  const url = "https://ik.imagekit.io/funlogic/DifferentDogFood.webp?updatedAt=1733408400724";
  return (
    <section className="place-content-center">
      <div className="mx-auto min-h-[500px] grid grid-rows-10 grid-cols-1 lg:grid-rows-1 lg:grid-cols-10">
        <div className="order-2 lg:order-1 flex flex-col row-span-3 lg:col-span-3 bg-[#F9E8D9] pt-20 pl-6">
          <div className="lg:px-10 ">
            <p className={`text-[#028391] text-4xl font-medium py-1 text-left`}>
              {"Crafting Wellness in Every Bite: Nutritious Dog Food Made with Love and Care."}
            </p>
          </div>
          <div className="flex place-content-center lg:place-content-start px-10 pt-20">
            <Button
              text={"Explore"}
              handleRedirect={() => {}}
              cls="bg-[#028391] min-w-[200px] h-16 rounded-md px-10 text-[#ffffff] hover:opacity-80 "
            />
          </div>
        </div>
        <div
          className="order-1 lg:order-2 p-0  row-span-7 lg:col-span-7 bg-transparent"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      </div>
    </section>
  );
}
