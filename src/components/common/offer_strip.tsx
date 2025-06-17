"use client";
import Link from "next/link";

export default function OfferBanner() {
  return (
    <div className="w-full bg-[#F88E8E] text-white text-center py-2 px-4 flex items-center justify-center text-sm font-medium">
      <span className="mr-2">The Semi-Annual Sale: 60% off your first box!</span>
      <Link href="/onboarding" className="underline font-semibold hover:text-[#fff] focus:outline-none ml-2">Try now!</Link>
    </div>
  );
}
