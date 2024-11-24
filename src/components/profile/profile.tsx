"use client";

import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../../../public/images/svg/arrow-left.svg";

const ProfilePage = () => {
  const { logOut } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {}
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <main className="profile-page">
        <div className="absolute">
          <Link href={"/"}>
            <div className="fixed align-middle mb-4 z-50 p-4">
              <Image src={Back} alt="" width={18} height={18} className="" />
            </div>
          </Link>
        </div>
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.imgur.com/OoE40e1.jpeg')"
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative p-2 max-w-[200px] min-h-[200px]">
                      {/* <Image
                        fill={true}
                        src="/images/logos/pawtful_logo_appbar.svg"
                        alt="pawtful.com"
                        className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      /> */}
                      <div>
                        <img
                          alt="..."
                          src="/images/logos/pawtful_logo_appbar.svg"
                          className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-[200px] min-h-[200px] bg-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Name
                  </h3>
                  {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution
                    Manager - Creative Tim Officer
                  </div> */}
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Under
                    Construction
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Discription about dog.
                      </p>
                      <div
                        onClick={handleSignOut}
                        className="font-normal text-pink-500 cursor-pointer"
                      >
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made by{" "}
                    <a
                      href="https://www.pawtful.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      Pawtful
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
