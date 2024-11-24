"use client";
import { ENVIRONMENT } from "@/config";
import Link from "next/link";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";

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
      className={`bottom-0 bg-[#FFF8EF] pt-4 pb-10 md:px-28 border-t border-[#e0dede] ${_isMargin ? "mb-24 lg:mb-0" : ""}`}
    >
      <div className="sb-container flex flex-col lg:flex-row ">
        <div className="lg:max-w-[35%]  sm:px-2 md:p-0 flex flex-col justify-between">
          <div className="lg:max-w-[100%]  sm:px-2 md:p-0 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="text-[#000000] text-sm opacity-70 mb-4 leading-7">
                <Link href="">About Us</Link> |<Link href=""> Contact Us</Link> |
                <Link href=""> Privacy Policy</Link> |<Link href=""> Terms and Conditions</Link>
              </div>
            </div>
          </div>
          <div className="text-[#000000] opacity-70 text-[11px]">
            Pwatful. &copy; 2024. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
