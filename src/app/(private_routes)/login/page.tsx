"use client";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sbCreateTempInfo } from "@/utils/session";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

type FormData = {
  name: string;
  phone: string;
};

export default function Login(props: Props) {
  const searchParams = props.searchParams["flow"];
  const { googleSignIn } = useContext(AuthContext) as AuthContextType;
  const { updateUserData } = useContext(UserDataContext) as UserDataContextType;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: ""
    }
  });

  const watchedFields = watch();

  const onSubmit = (data: FormData) => {
    // Store user data in localStorage and context
    const userData = {
      name: data.name,
      contact: {
        phone: data.phone
      }
    };

    // Update context
    updateUserData(userData);

    // Store in localStorage
    sbCreateTempInfo(JSON.stringify(userData));

    // Navigate based on flow
    if (searchParams === "onboardingflow") {
      router.push("/onboarding");
    } else {
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // First execute form submission if form is valid
      if (isValid) {
        const formData = watchedFields;
        const userData = {
          name: formData.name,
          contact: {
            phone: formData.phone
          }
        };

        // Update context
        updateUserData(userData);

        // Store in localStorage and ensure it's successful
        try {
          sbCreateTempInfo(JSON.stringify(userData));
          console.log("Data stored successfully in localStorage");
        } catch (storageError) {
          console.error("Failed to store data:", storageError);
          // Don't proceed with Google login if storage fails
          return;
        }
      }

      // Only execute Google sign in after storage is successful
      const result = await googleSignIn();
      if (result.user) {
        searchParams === "onboardingflow" ? router.push("/onboarding") : router.push("/");
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
        <div className="bg-[#EE9422] rounded-lg shadow-lg w-80 p-6">
          <h2 className="text-center text-xl text-white font-semibold mb-6">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })}
                className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE9422] focus:border-transparent ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-white">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be exactly 10 digits"
                  }
                })}
                className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE9422] focus:border-transparent ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your 10-digit phone number"
                maxLength={10}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>
          </form>

          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              disabled={!isValid}
              className={`w-full flex items-center justify-center py-2 rounded-lg shadow-sm transition-colors ${
                isValid
                  ? "bg-white border border-gray-300 hover:bg-gray-100"
                  : "bg-gray-100 border border-gray-200 cursor-not-allowed opacity-50"
              }`}
            >
              <Image
                width={20}
                height={20}
                src="/images/icons/google_logo.png"
                alt=""
                className="mr-2"
              />
              <span className={`font-medium ${isValid ? "text-gray-700" : "text-gray-400"}`}>
                Sign in with Google
              </span>
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
