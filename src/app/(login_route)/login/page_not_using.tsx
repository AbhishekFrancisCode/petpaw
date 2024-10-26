/**
 *
 *
 *
 *  NOT USING.
 *
 *
 *
 *
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isCookieValid, sbCreateCookie } from "@/utils/session";
import { URL_PATHS } from "@/constants/title-constants";
import { useForm, SubmitHandler } from "react-hook-form";
import SbGoogleWrapper from "./includes/sb-google-wrapper";
import { AuthDetails, authSignIn, clearAuthData } from "@/store/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/store-hook";
import AuthProvider from "@/contexts/auth-context";

type Inputs = {
  email: string;
  password: string;
};

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function LoginNotUsikng(props: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const router = useRouter();
  const dispatch = useAppDispatch();
  const authDetails: AuthDetails = useAppSelector((state) => state?.auth?.authDetails);

  const searchParams = props.searchParams;

  useEffect(() => {
    if (authDetails.auth_token !== "") {
      sbCreateCookie(authDetails);

      dispatch(clearAuthData());
      router.push(URL_PATHS.ACCOUNT);
    }
  }, [authDetails, dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(authSignIn({ ...data }));
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="pb-4">
          <Link href="/">
            <Image
              src="/images/logos/gina-logo.svg"
              alt="gina.com"
              width="200"
              height="46"
            />
          </Link>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-300 dark:border-gray-700">
          <AuthProvider>
            <></>
          </AuthProvider>
          <div className="py-4">
            <AuthProvider>
              <SbGoogleWrapper />
            </AuthProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
