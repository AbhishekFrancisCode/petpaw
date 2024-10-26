"use client";

import { useRouter } from "next/navigation";
import SbGoogleAuth from "@/components/google-auth/google-auth";
import { URL_PATHS } from "@/constants/title-constants";

export default function SbGoogleWrapper() {
  const router = useRouter();
  return (
    <SbGoogleAuth
      callback={() => {
        router.push(URL_PATHS.ACCOUNT);
      }}
    />
  );
}
