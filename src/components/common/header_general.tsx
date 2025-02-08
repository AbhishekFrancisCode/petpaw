"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/sb-ui/button/button";

export default function HeaderGeneral() {
  return (
    <div
      className="flex py-4 pl-0  backdrop-blur-[40px] w-screen z-20 min-h-[70px] max-h-[70px]"
      onBlur={(e) => e.currentTarget.focus()}
    >
      <div className="flex flex-row justify-between min-w-full">
        <div className="flex justify-between place-content-center min-w-full px-6">
          <div className="">
            <Link href="/">
              <Image
                fill={true}
                src="/images/logos/logo_round.png"
                alt="pawtful.com"
                className="max-h-[64px] md:max-h-[80px] max-w-[64px]  md:max-w-[80px] py-2"
              />
            </Link>
            <div className=" ">
              <div className="flex flex-row pl-32 lg:gap-3">
                {/* <Link href={`/how-it-works`}>
                      <Button text="How it Works" />
                    </Link> */}
                <Link href={`/mealplan`}>
                  <Button text="Meal plan" />
                </Link>
                <Link href={`/product`}>
                  <Button text="Our Products" />
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="justify-center place-content-center ">
              <div className="flex flex-row w-auto gap-12 ">
                <Link href={`https://pawtful-blog.vercel.app/`}>
                  <Button
                    text="blog"
                    // handleRedirect={handleRedirect}
                  />
                </Link>
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
          </div>
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
