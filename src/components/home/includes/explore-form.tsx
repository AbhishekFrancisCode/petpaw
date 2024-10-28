"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { saveNewsLetter } from "@/store/clients/clients-slice";
import { sbToasterSuccess } from "@/utils/sb-toaster";

type Inputs = {
  email: string;
};

export default function ExploreForm() {
  const [email, setEmail] = useState<string>("");

  const handleEmailOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
    <div className="flex flex-col gap-2 h-full px-4">
      <div className="text-base font-normal leading-snug lg:mt-[10px] w-full text-center lg:text-left">
        {"What breed is your dog?!"}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col xl:flex-row  gap-4 items-center lg:items-start mt-0"
      >
        <div className="flex max-h-12">
          <input
            type="email"
            id="newsletter"
            required={true}
            placeholder="eg: Labrador"
            {...register("email", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address"
              }
            })}
            onChange={(e) => {
              handleEmailOnChange(e);
            }}
            className="w-[292px] h-12 bg-transparent rounded-md rounded-br-md border focus:ring-0 focus:border-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-[224px] lg:w-[172px] h-12 rounded-md place-content-center items-center gap-4 bg-[#EE9422]"
        >
          <div className="text-center text-black text-base font-normal leading-7">
            Get your plan
          </div>
        </button>
      </form>
      <div className="text-base font-normal leading-snug lg:mt-[10px] w-full text-center lg:text-left">
        {"Get a feeding plan personalized for your dog’s needs"}
      </div>
    </div>
  );
}
