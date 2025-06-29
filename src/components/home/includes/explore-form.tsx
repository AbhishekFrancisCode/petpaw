"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { saveNewsLetter } from "@/store/clients/clients-slice";
import { sbToasterSuccess } from "@/utils/sb-toaster";
import { useRouter } from "next/navigation";
import { HomePageStrings } from "@/constants/title-constants";

type Inputs = {
  name: string;
};

export default function ExploreForm() {
  const [name, setName] = useState<string>("");

  const router = useRouter();

  const navigateWithQuery = () => {
    if (name.length > 0) {
      router.push(`/onboarding?name=${name}`);
    }
  };

  const handleEmailOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    saveNewsLetter(data);
    reset();
    sbToasterSuccess("Successfully Added.");
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 h-full w-full pb-6 sm:pb-8 lg:pb-0">
      <div
        className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed w-full text-center lg:text-left"
        style={{
          fontSize: "clamp(0.875rem, 2vw, 1.25rem)",
          lineHeight: "1.5"
        }}
      >
        {HomePageStrings.askPetname}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 sm:gap-5 items-center lg:items-start mt-2 sm:mt-3 w-full"
      >
        <div className="flex w-full max-w-sm lg:max-w-md">
          <input
            type="text"
            id="newsletter"
            required={true}
            placeholder="eg: Caesar"
            {...register("name", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Provide your dog name"
              }
            })}
            onChange={(e) => {
              handleEmailOnChange(e);
            }}
            className="w-full h-12 sm:h-14 bg-transparent rounded-md rounded-br-md border focus:ring-0 focus:border-none px-4 text-sm sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="flex w-full sm:w-[180px] lg:w-[140px] h-10 sm:h-11 rounded-md place-content-center items-center gap-2 sm:gap-3 bg-[#EE9422] hover:bg-[#d6851e] transition-colors"
          onClick={() => navigateWithQuery()}
        >
          <div
            className="text-center text-white font-medium leading-6"
            style={{
              fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)"
            }}
          >
            Get your plan
          </div>
        </button>
      </form>
      <div
        className="text-sm sm:text-base md:text-lg font-normal leading-relaxed mt-4 sm:mt-5 lg:mt-6 w-full text-center lg:text-left"
        style={{
          fontSize: "clamp(0.875rem, 1.8vw, 1.125rem)",
          lineHeight: "1.5"
        }}
      >
        {"Get a meal plan personalized for your dog's needs"}
      </div>
    </div>
  );
}
