"use client";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import Image from "next/image";
import { useContext, useState } from "react";
import React from "react";
import StepButton from "./includes/step-button";
import PetDetails from "./includes/onbording-flow.tsx/pet-details/get-pet-details";
import ProgressTracker from "./includes/onbording-flow.tsx/progress-tracker";
import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { User } from "@/store/interfaces/user";

export default function OnboardingPage() {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [currentStep, setCurrentStep] = useState(0);
  const [innerStep, setInnerStep] = useState(0);
  const NUMBER_OF_STEPS = 4;

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

        {/* <div className="grid row-span-2 fixed py-12 bottom-0 max-h-52 min-h-52">
          <StepButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            NUMBER_OF_STEPS={NUMBER_OF_STEPS}
            innerStep={innerStep}
            setInnerStep={setInnerStep}
          />
        </div> */}
      </div>
    </>
  );
}

// function renderSwitchWithOutSession({
//   param,
//   setStep,
//   innerStep,
//   setInnerStep,
//   onSubmit,
//   handleNext,
//   handleBack
// }: {
//   param: number;
//   setStep: any;
//   innerStep: number;
//   setInnerStep: () => void;
//   onSubmit: () => void;
//   handleNext: () => void;
//   handleBack: () => void;
// }) {
//   switch (param) {
//     case 0:
//       return (
//         <PetDetails
//           innerStep={innerStep}
//           setInnerStep={setInnerStep}
//           onSubmit={onsubmit}
//           handleNext={handleNext}
//           handleBack={handleBack}
//         />
//       );
//     // case 1:
//     //   return <PetHealth setStep={handleChildStateChange} />;
//     // case 2:
//     //   return <StepThree setStep={handleChildStateChange} />;
//     // case 3:
//     //   return <StepFour setStep={handleChildStateChange} />;

//     default:
//       return "";
//   }
// }
