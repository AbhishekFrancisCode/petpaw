"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/sb-ui/button/button";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../home/includes/mobile-menu";
// import styled from "styled-components";
// export const Container = styled.div``;

export default function HeaderBlack() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  var faqElement: HTMLElement | null;

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const goToDateSection = () => {
    faqElement = document.getElementById("faq");
    faqElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed float-start py-4 md:py-6 pl-0 lg:bg-transprent backdrop-blur-[2px] w-screen z-50  "
      onBlur={(e) => e.currentTarget.focus()}
    >
      <div className="px-2 md:px-6 text-sm text-black rounded-xl font-medium text-right">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row w-auto justify-between place-content-center ">
            <div className="">
              <Link href="">
                <Image
                  fill={true}
                  src="/images/logos/pawtful_logo_appbar.svg"
                  alt="pawtful.com"
                  className="max-h-[64px] md:max-h-[72px] max-w-[100px]  md:max-w-[150px] py-2"
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="flex flex-row pl-32 lg:gap-3">
                <Link href={``}>
                  <Button text="How it Works" handleRedirect={goToDateSection} />
                </Link>
                <Button text="Meal plan" handleRedirect={goToDateSection} />
                <Button text="Our Products" handleRedirect={goToDateSection} />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="justify-center place-content-center ">
              <div className="flex flex-row w-auto gap-12 ">
                <Link href={``}>
                  <Button
                    text="FAQ's"
                    // handleRedirect={handleRedirect}
                  />
                </Link>
                <Link href={``}>
                  <Button
                    text="Contact us"
                    // handleRedirect={handleRedirect}
                  />
                </Link>
                <Button
                  cls="w-32 h-10 text-sm text-black rounded-xl font-medium text-center bg-[#EE9422]"
                  text="EXPLORE"
                  handleRedirect={goToDateSection}
                />
                <Link href={"/login"}>
                  <text>Login</text>
                </Link>
              </div>
            </div>
          </div>
          <div className="visible lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
