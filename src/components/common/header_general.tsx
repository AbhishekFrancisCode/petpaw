"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/sb-ui/button/button";

export default function HeaderGeneral() {
  return (
    <div
      className="flex py-4 pl-0 lg:bg-transprent backdrop-blur-[40px] w-screen z-20 min-h-[70px] max-h-[70px]"
      onBlur={(e) => e.currentTarget.focus()}
    >
      <div className="flex flex-row justify-between min-w-full">
        <div className="flex justify-between place-content-center ">
          <div className="">
            <Link href="/">
              <Image
                fill={true}
                src="/images/logos/pawtful_logo_appbar.svg"
                alt="pawtful.com"
                className="max-h-[64px] md:max-h-[72px] max-w-[100px]  md:max-w-[150px] py-2"
              />
            </Link>
          </div>
          <div className="block"></div>
        </div>

        {/* <div className="flex px-">
          <div className="justify-center place-content-center ">
            <div className="flex flex-row w-auto gap-12 ">
              <Link href={``}>
                <Button
                  text="Contact us"
                  // handleRedirect={handleRedirect}
                />
              </Link>
              <Link href={`/onboarding`}>
                <Button
                  cls="w-32 h-9 text-sm text-white font-normal text-center bg-[#EE9422]"
                  text="Get Started"
                />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
