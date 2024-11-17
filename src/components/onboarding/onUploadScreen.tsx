"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import ProgressTracker from "./includes/onbording-flow.tsx/progress-tracker";

export default function OnLoadingingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <div className="flex flex-col min-w-full min-h-screen place-items-center">
        <div className="flex flex-col min-w-full place-items-center max-h-4 min-h-48">
          <div className="p-4 max-h-24 min-h-24">
            <Image
              width={110}
              height={0}
              src="/images/logos/pawtful_logo_appbar.svg"
              alt="pawtful.com"
            />
          </div>
          {/* <ProgressTracker currentStep={currentStep} /> */}
        </div>

        <div className="flex min-w-full place-content-center">
          <text>Uploading</text>
        </div>
      </div>
    </>
  );
}
