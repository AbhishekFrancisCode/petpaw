"use client";
import Button from "@/sb-ui/button/button";
import Image from "next/image";
import styled from "styled-components";

export default function Banner({ value, url }: { value: string; url: string }) {
  const urlt = url;
  const BannerSection = styled.section`
    place-content-center: center;
    border-radius: 1.5rem;
    background-image: url(${urlt});
    background-position: right bottom;
    background-repeat: no-repeat;

    @media (max-width: 640px) {
      border-radius: 0;
      background-position: right top;
    }
  `;

  return (
    <BannerSection>
      <div className="mx-auto max-h-[150px] md:min-h-[150px] grid grid-rows-10 grid-cols-1 lg:grid-rows-1 lg:grid-cols-10">
        <div className="order-2 lg:order-1 flex flex-col row-span-3 lg:col-span-8  pl-6">
          <div className="flex lg:px-10 place-content-start items-center min-h-full">
            <p className={`text-[#028391] text-1xl md:text-[28px] leading-8 font-medium text-left`}>
              {value}
            </p>
          </div>
          {/* <div className="lg:px-10">
            <p className={`text-[#028391] text-4xl font-medium py-1 text-left`}></p>
          </div> */}
        </div>
        {/* <div className="order-1 lg:order-2 p-0  row-span-7 lg:col-span-7 object-bottom"></div> */}
      </div>
    </BannerSection>
  );
}
