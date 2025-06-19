"use client";
import Link from "next/link";

export default function OfferBanner({
  text,
  link,
  linkLabel,
}: {
  text: string;
  link: string;
  linkLabel: string;
}) {
  return (
    <div className="w-full bg-[#F88E8E] text-white text-center py-2 px-4 flex items-center justify-center text-sm font-medium relative z-40">
      <span className="mr-2">{text}</span>
      <Link href={link} className="underline font-semibold hover:text-[#fff] focus:outline-none ml-2">
        {linkLabel}
      </Link>
    </div>
  );
}
