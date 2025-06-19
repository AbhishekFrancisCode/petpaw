"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/sb-ui/button/button";
import { useContext, useEffect, useRef, useState, CSSProperties } from "react";
import HamburgerMenu from "../home/includes/mobile-menu";
import Hamburger from "../../../public/images/svg/hamburger.svg";
import ProfileIcon from "../../../public/images/svg/profile_icon_black.svg";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import SyncLoader from "react-spinners/ClipLoader";
import LoadingState from "@/utils/loading-state";
import { UserRound, LogIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import MobileDrawer from "./drawer-panel";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
};

export default function HeaderBlack({ isFixed = false }: { isFixed?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  let [loading, setLoading] = useState(true);

  const menuRef = useRef<HTMLDivElement>(null);
  var faqElement: HTMLElement | null;
  const { user } = useContext(AuthContext) as AuthContextType;

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

  //mobile drawer
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div
        className={`${
          isFixed ? "fixed top-0 left-0 w-full z-50 bg-white/80" : ""
        } float-start pl-0 lg:bg-transparent backdrop-blur-[40px] w-screen lg:min-h-[90px]`}
        onBlur={(e) => e.currentTarget.focus()}
      >
        <div className="px-2 md:px-6 text-sm text-black rounded-xl font-medium text-right">
          {isMobile ? (
            <div className="flex flex-row justify-between items-center min-h-[70px]">
              <Link href="/">
                <Image
                  fill={true}
                  src="/images/logos/logo_round.png"
                  alt="pawtful.com"
                  className="max-h-[64px] max-w-[64px] ml-2"
                />
              </Link>
              <div onClick={() => toggleDrawer()} className="p-2 z-20">
                <Image src={Hamburger} alt="" width={18} height={18} className="mr-6 py-2" />
              </div>
            </div>
          ) : (
            <div className="flex flex-row min-h-[90px] min-w-full justify-between items-center">
              <div className="flex flex-row justify-between  ">
                <Link href="/">
                  <Image
                    fill={true}
                    src="/images/logos/logo_round.png"
                    alt="pawtful.com"
                    className="max-h-full max-w-[100px] ml-6"
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
                  <div className="flex flex-row w-auto gap-12 place-content-center items-center ">
                    <Link href={`https://pawtful-blog.vercel.app/`}>
                      <Button
                        text="Blog"
                        // handleRedirect={handleRedirect}
                      />
                    </Link>
                    <Link href={`/faq`}>
                      <Button
                        text="FAQ's"
                        // handleRedirect={handleRedirect}
                      />
                    </Link>
                    <Link href={`/onboarding`}>
                      <Button
                        cls="w-32 h-9 text-[1rem] text-white font-normal text-center bg-[#EE9422]"
                        text="Get Started"
                        handleRedirect={goToDateSection}
                      />
                    </Link>
                    {!user ? (
                      // !user && loading ? (
                      //   <LoadingState loading={loading} />
                      // ) : (
                      <Link href={"/login?flow=loginflow"}>
                        <LogIn size={24} className="mt-2 text-[#EE9422]" />
                        {/* <Button text="Login" /> */}
                      </Link>
                    ) : (
                      // )
                      <Link href={"/profile"}>
                        <UserRound size={24} className="mt-2  text-[#EE9422]" />
                        {/* <Image
                          src={ProfileIcon}
                          alt=""
                          width={18}
                          height={18}
                          className="mr-6 py-2"
                        /> */}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <MobileDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        user={user}
        goToDateSection={goToDateSection}
      />
    </div>
  );
}
