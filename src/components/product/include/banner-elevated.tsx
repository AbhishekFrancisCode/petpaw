"use client";
import Button from "@/sb-ui/button/button";
import { imageUrl } from "@/utils/string-utils";
import Image from "next/image";
import styled from "styled-components";
import { twMerge } from "tailwind-merge";

export default function BannerElevated({
  value,
  url,
  imgUrl,
  height,
  width,
  imagePosition,
  imageHide = false,
  backgroundColor,
  textColor,
  borderColor,
  borderRadius,
  borderWidth,
  borderStyle
}: {
  value: string;
  url?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
  imagePosition?: string; // "left" | "right" | "top" | "bottom"
  imageHide?: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
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
    <div
      className={twMerge(
        height ? `max-h-[${height}]` : "md:max-h-[200px]",
        width ? `w-[${width}]` : "md:w-full",
        backgroundColor ? `${backgroundColor}` : "bg-transparent",
        textColor ? `${textColor}` : "text-[#028391]",
        borderColor ? `border-[${borderColor}]` : "border-[#028391]",
        borderRadius ? `${borderRadius}` : "rounded-3xl",
        borderWidth ? `${borderWidth}` : "border-1",
        borderStyle ? `${borderStyle}` : "border-solid",
        "max-h-[400px] relative  m-2 mx-auto"
      )}
    >
      <BannerSection>
        <div
          className={twMerge(
            height
              ? `md:max-h-[calc(${height}-50px)] min-h-[calc(${height}-50px)]`
              : "md:max-h-[150px] min-h-[100px] md:min-h-[150px]",
            "mx-auto flex flex-col md:flex-row   rounded-xl"
          )}
        >
          <div className="flex p-2 lg:px-10 place-content-start items-center min-h-full z-10 md:max-w-[60%] xl:max-w-[75%]">
            <p
              className={`text-[#028391] text-[18px] md:text-1xl md:text-[28px] leading-8 font-medium text-center md:text-left min-w-full`}
            >
              {value}
            </p>
          </div>
          <div
            className={twMerge(
              imagePosition ? `${imagePosition}` : "md:right-0 md:bottom-[70px]",
              imageHide ? "hidden" : "hidden md:block",
              "md:absolute  md:max-h-[150px]  md:max-w-[350px]"
            )}
          >
            {imgUrl && <img src={imgUrl} className="rounded-b-xl" />}
          </div>
        </div>
      </BannerSection>
    </div>
  );
}
