"use client";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Login(props: Props) {
  const searchParams = props.searchParams['flow'];
  const { googleSignIn } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const result = await googleSignIn();
      if (result.user) {
        searchParams === "onboardingflow" ?
        router.push("/onboarding") : router.push("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="">
      <div className="fixed inset-0 bg-[#FFF8EF] flex flex-col items-center justify-center">
        <text>Welcome to Pawtful</text>
        <div className="mb-4">
          <Image
            width={144}
            height={300}
            src="/images/logos/pawtful_logo_appbar.svg"
            alt="pawtful.com"
          />
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg w-80 p-6">
          <h2 className="text-center text-xl font-semibold mb-6">Login</h2>

          <div className="flex flex-col gap-4">
            <button className="bg-[#EE9422] text-white py-2 rounded-lg hover:bg-blue-600">
              Login with Phone
            </button>
            <button
              onClick={handleSignIn}
              className="flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg shadow-sm hover:bg-gray-100"
            >
              <Image
                width={20}
                height={20}
                src="/images/icons/google_logo.png"
                alt=""
                className="mr-2"
              />
              <span className="text-gray-700 font-medium">Sign in with Google</span>
            </button>
          </div>
        </div>
        <p className="text-[11px] text-[#888888] py-10">
          By continuing you agree to our{" "}
          <a href="/terms-and-conditions" target="_blank" className="text-black">
            Terms
          </a>{" "}
          and
          <a href="/privacy-policy" target="_blank" className="text-black">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
