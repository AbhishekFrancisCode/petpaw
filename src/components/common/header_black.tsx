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

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
};

export default function HeaderBlack() {
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
    console.log("drawer");
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div
        className="fixed float-start py-4 pl-0 lg:bg-transparent backdrop-blur-[40px] w-screen z-20 min-h-[70px] max-h-[70px]"
        onBlur={(e) => e.currentTarget.focus()}
      >
        <div className="px-2 md:px-6 text-sm text-black rounded-xl font-medium text-right">
          {isMobile ? (
            <div className="flex flex-row">
              <div className="">
                <Image
                  fill={true}
                  src="/images/logos/pawtful_logo_appbar.svg"
                  alt="pawtful.com"
                  className="max-h-[52px] pt-2"
                />
              </div>
              <div onClick={() => toggleDrawer()} className="p-2 z-20">
                <Image src={Hamburger} alt="" width={18} height={18} className="mr-6 py-2" />
              </div>
            </div>
          ) : (
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
                <div className="block">
                  <div className="flex flex-row pl-32 lg:gap-3">
                    <Link href={``}>
                      <Button text="How it Works" handleRedirect={goToDateSection} />
                    </Link>
                    <Button text="Meal plan" handleRedirect={goToDateSection} />
                    <Button text="Our Products" handleRedirect={goToDateSection} />
                  </div>
                </div>
              </div>

              <div className="block">
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
                    <Link href={`/onboarding`}>
                      <Button
                        cls="w-32 h-9 text-sm text-white font-normal text-center bg-[#EE9422]"
                        text="Get Started"
                        handleRedirect={goToDateSection}
                      />
                    </Link>
                    {!user ? (
                      // !user && loading ? (
                      //   <LoadingState loading={loading} />
                      // ) : (
                        <Link href={"/login?flow=loginflow"}>
                          <Button text="Login" />
                        </Link>
                      // )
                    ) : (
                      <Link href={"/profile"}>
                        <Image
                          src={ProfileIcon}
                          alt=""
                          width={18}
                          height={18}
                          className="mr-6 py-2"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Drawer */}
      </div>
      {isMobile && isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleDrawer} // Close drawer when clicking outside
        >
          <div
            className="fixed left-0 top-0 min-h-full w-64 bg-[#FFF8EF] shadow-lg p-4 rounded-r-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex flex-col min-h-full w-56">
              <div className="flex-grow">
                <div className="p-2 min-h-[70px] max-h-[70px]">
                  <Image
                    fill={true}
                    src="/images/logos/pawtful_logo_appbar.svg"
                    alt="pawtful.com"
                    className="max-h-[52px] pt-2"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-4">Menu</h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#home" className="block text-blue-600 hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block text-blue-600 hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block text-blue-600 hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="block text-blue-600 hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto p-2">
                <button onClick={toggleDrawer} className="text-gray-500 rounded-md">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
