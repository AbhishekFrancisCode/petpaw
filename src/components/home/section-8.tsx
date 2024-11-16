"use client";
import Button from "@/sb-ui/button/button";
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Email from "../../../public/images/svg/email-1.svg";
import Subscribe from "../../../public/images/svg/subscribe.svg";
import { saveNewsLetter } from "@/store/clients/clients-slice";
import { sbToasterSuccess } from "@/utils/sb-toaster";

type Inputs = {
  email: string;
};

export default function NewsLetter() {
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
    <div className="flex place-content-center py-14 px-2 lg:px-8 bg-[#FFF8EF]">
      <div className="container bg-transprent px-8 flex flex-col lg:flex-row gap-0 justify-between items-center rounded-lg pt-8 lg:pt-14 pb-16 lg:pb-14 border-2 border-[#EE9422]">
        <div className="h-auto min-w-[325px] max-w-[675px] flex flex-col text-[#EE9422] text-center lg:text-left">
          <div className="text-[40px] font-medium leading-[47.60px] text-[#028391]">
            Join our newsletter
          </div>
          <div className="text-[28px] font-normal leading-[39.20px]">
            Stay up-to-date with tips and cute stories about pets and their parents
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-center lg:items-start mt-9 lg:mt-0"
        >
          <div className="flex max-h-12">
            <div className="flex bg-[#DADADA] min-w-11 rounded-tl-md rounded-bl-md min-h-full">
              <Image src={Email} alt="" width={20} height={16} className="mx-auto" />
            </div>
            <input
              type="email"
              id="newsletter"
              required={true}
              placeholder="Your email address"
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
              className="w-[292px] h-12 bg-[#e9e6e6] rounded-tr-md rounded-br-md border-none focus:ring-0 focus:border-none"
            />
          </div>
          <button
            type="submit"
            className="flex bg-[#028391] w-[224px] h-[54px] lg:w-[172px] lg:h-12 rounded-xl place-content-center items-center gap-4"
          >
            <div className="text-center text-white text-xl font-normal leading-7">Subscribe</div>
            <Image src={Subscribe} alt="" width={20} height={20} className="" />
          </button>
        </form>
      </div>
    </div>
  );
}
