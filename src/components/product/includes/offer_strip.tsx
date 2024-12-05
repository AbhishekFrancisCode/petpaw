"use client";
import { ENVIRONMENT } from "@/config";
import Link from "next/link";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";

interface HotStripProps {
  text: string;
  subText?: string;
  height: string;
  width: string;
  bgColor?: string;
  bgImageLink?: string;
  link?: string;
  buttonlable?: string;
  buttoncolor?: string;
}

const OfferStrip: React.FC<HotStripProps> = ({
  text,
  subText,
  height,
  width,
  bgColor = "bg-gray-300",
  bgImageLink,
  link = "#",
  buttonlable,
  buttoncolor = "bg-blue-600"
}) => {
  return (
    <div
      className={`flex items-center justify-center ${height} ${width} ${bgColor} bg-cover bg-center`}
      style={{ backgroundImage: bgImageLink ? `url(${bgImageLink})` : undefined }}
    >
      <text className="text-white">{text}</text>
    </div>
  );
};

export default OfferStrip;
