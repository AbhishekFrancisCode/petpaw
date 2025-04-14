"use client";
import Button from "@/sb-ui/button/button";
import { imageUrl } from "@/utils/string-utils";
import Image from "next/image";
import styled from "styled-components";

export default function BannerElevated({
  value,
  url,
  imgUrl
}: {
  value: string;
  url?: string;
  imgUrl?: string;
}) {
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
    <div className="p-4 relative">
      <BannerSection>
        <div className="mx-auto max-h-[150px] md:min-h-[150px] flex">
          <div className="flex lg:px-10 place-content-start items-center min-h-full">
            <p className={`text-[#028391] text-1xl md:text-[28px] leading-8 font-medium text-left`}>
              {value}
            </p>
          </div>
          <div className="max-h-[150px] md:min-h-[150px] max-w-[150px]">
            {imgUrl && <img src={imgUrl} />}
          </div>
        </div>
      </BannerSection>
    </div>
  );
}
