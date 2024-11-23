"use client";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import Image from "next/image";
import { useContext, useState } from "react";
import React from "react";
import PetDetails from "./includes/onbording-flow.tsx/pet-details/get-pet-details";
import ProgressTracker from "./includes/onbording-flow.tsx/progress-tracker";

export default function OnboardingPage() {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [currentStep, setCurrentStep] = useState(0);
  const [innerStep, setInnerStep] = useState(0);
  const NUMBER_OF_STEPS = 4;

  return (
    <>
      <div className="flex flex-col min-w-full min-h-screen place-items-center">
        <div className="absolute">
       
        </div>
        <div className="flex flex-col min-w-full place-items-center max-h-4 min-h-48">
          <div className="p-4 max-h-24 min-h-24">
            <Image
              width={110}
              height={0}
              src="/images/logos/pawtful_logo_appbar.svg"
              alt="pawtful.com"
            />
          </div>
          <ProgressTracker currentStep={currentStep} />
        </div>

        <div className="flex min-w-full place-content-center">
          <PetDetails
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            NUMBER_OF_STEPS={NUMBER_OF_STEPS}
            innerStep={innerStep}
            setInnerStep={setInnerStep}
          />
        </div>
      </div>
    </>
  );
}

