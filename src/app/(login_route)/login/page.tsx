"use client";
import Image from "next/image";
import Link from "next/link";

import AuthProvider from "@/contexts/auth-context";
import SbGoogleWrapper from "./includes/sb-google-wrapper";
// import OtpWrapper from "@/components/leader/otp/otp-wrapper";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Login(props: Props) {
  const searchParams = props.searchParams;

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="pb-4">
          <Link href="/">
            <Image
              width="200"
              height="46"
              priority={false}
              alt="gina.com"
              src="/images/logos/logo-black-b.svg"
            />
          </Link>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-300 dark:border-gray-700">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center">
            {/* Card Container */}
            <div className="bg-white rounded-lg shadow-lg w-80 p-6">
              {/* Title */}
              <h2 className="text-center text-xl font-semibold mb-6">Login</h2>
              {/* Buttons */}
              <div className="flex flex-col gap-4">
                <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  Login with Phone
                </button>
                <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                  Login with Email
                </button>
              </div>
            </div>
          </div>
          {/* <AuthProvider>
          </AuthProvider> */}
        </div>
      </div>
    </section>
  );
}
