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
          {/* <AuthProvider>
            <OtpWrapper searchParams={searchParams} loginFlow={true} handleCurrentStep={() => {}} />
          </AuthProvider> */}
          {/* <div className="py-4">
            <AuthProvider>
              <SbGoogleWrapper />
            </AuthProvider>
          </div> */}
        </div>
      </div>
    </section>
  );
}
