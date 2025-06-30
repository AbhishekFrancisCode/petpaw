"use client";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import Image from "next/image";
import { Suspense, useContext, useState } from "react";
import PetDetails from "./includes/onbording-flow.tsx/pet-details/get-pet-details";
import ProgressTracker from "./includes/onbording-flow.tsx/progress-tracker";

export default function OnboardingPage() {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [currentStep, setCurrentStep] = useState(0);
  const [innerStep, setInnerStep] = useState(0);
  const NUMBER_OF_STEPS = 4;

  return (
    <div className="flex flex-col h-screen w-full bg-[#FFF8EF] overflow-hidden">
      {/* Header */}
      <div className="shrink-0 flex flex-col items-center px-4 pt-2 sm:pt-4 pb-4 md:pb-6 bg-[#FFF8EF] z-10 w-full max-w-full">
        <Image
          width={100}
          height={100}
          src="/images/logos/logo_round.png"
          alt="pawtful.com"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-12 object-contain mx-auto"
        />
        <div className="w-full mt-2 max-w-lg mx-auto">
          <ProgressTracker currentStep={currentStep} />
        </div>
      </div>

      {/* PetDetails section — only scrolls if content overflows */}
      <div className="sb-container flex-grow min-h-0 overflow-y-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <PetDetails
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            NUMBER_OF_STEPS={NUMBER_OF_STEPS}
            innerStep={innerStep}
            setInnerStep={setInnerStep}
          />
        </Suspense>
      </div>
    </div>
  );
}
