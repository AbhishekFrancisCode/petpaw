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
    <div className="flex flex-col items-center lg:items-start w-full h-full gap-3 sm:gap-2">
      <div
        className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed w-full text-center lg:text-left"
        style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
      >
        {HomePageStrings.askPetname}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 sm:gap-8 items-center lg:items-start w-full"
      >
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
          onChange={handleEmailOnChange}
          className="min-w-[220px] w-full max-w-xs sm:max-w-sm lg:max-w-[300px] h-12 md:h-10 lg:h-12 bg-transparent rounded-md border focus:ring-0 focus:border-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="flex w-full sm:w-[180px] lg:w-[140px] h-10 sm:h-11 rounded-md place-content-center items-center gap-2 sm:gap-3 bg-[#EE9422] hover:bg-[#d6851e] transition-colors"
          onClick={navigateWithQuery}
        >
          <div
            className="text-center text-white font-medium leading-6"
            style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
          >
            Get your plan
          </div>
        </button>
      </form>
      <div
        className="text-sm sm:text-base md:text-lg font-normal leading-relaxed w-full text-center lg:text-left"
        style={{ fontSize: "clamp(0.875rem, 1.8vw, 1rem)", lineHeight: "1.5" }}
      >
        {"Get a meal plan personalized for your dog's needs"}
      </div>
    </div>
  );
}
