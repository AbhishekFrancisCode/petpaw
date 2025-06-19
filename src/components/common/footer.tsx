"use client";
import { ENVIRONMENT } from "@/config";
import Link from "next/link";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import SocialIcons from "./social_link";

export default function Footer({ _isBlack, _isMargin }: any) {
  useEffect(() => {
    if (ENVIRONMENT == "prod") {
      hotjar.initialize({
        id: 5037950,
        sv: 6
      });
    }
  }, []);

  return (
    <div
      className={`bottom-0 bg-[#FFF8EF] pt-4 pb-10 px-4 md:px-28 border-t border-[#e0dede] ${_isMargin ? "mb-24 lg:mb-0" : ""}`}
    >
      <div className="sb-container flex flex-col lg:flex-row justify-between ">
        <div className="lg:max-w-[35%]  sm:px-2 md:p-0 flex flex-col justify-between">
          <div className="lg:max-w-[100%]  sm:px-2 md:p-0 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="text-[#000000] text-sm opacity-70 mb-4 leading-7">
                <Link href="/about-us">About Us</Link> |<Link href="/contact-us"> Contact Us</Link> |
                <Link href="/privacy-policy"> Privacy Policy</Link> |<Link href="/terms-and-conditions"> Terms and Conditions</Link>
              </div>
            </div>
          </div>
          <div className="text-[#000000] opacity-70 text-[11px]">
            Pawtful. &copy; 2024. All Rights Reserved
          </div>
        </div>
        <div className="flex space-x-4">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
