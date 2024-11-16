"use client";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import Image from "next/image";
import { useContext, useState } from "react";
import StepOne from "./includes/onbording-flow.tsx/pet-details/get-pet-details";
import StepTwo from "./includes/onbording-flow.tsx/step2";
import StepThree from "./includes/onbording-flow.tsx/step3";
import StepFour from "./includes/onbording-flow.tsx/step4";
import React from "react";
import StepButton from "./includes/step-button";
import PetDetails from "./includes/onbording-flow.tsx/pet-details/get-pet-details";
import PetHealth from "./includes/onbording-flow.tsx/pet-health/get-pet-details";

export default function OnboardingPage() {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 4;

  const handleChildStateChange = (newValue: number) => {
    setCurrentStep(newValue);
  };

  return (
    <>
      <div className="grid grid-rows-8 min-w-full min-h-screen place-items-center">
        <div className="grid grid-rows-2 row-span-2 min-w-full place-items-center max-h-52 min-h-52">
          <div className="p-4">
            <Image
              width={110}
              height={0}
              src="/images/logos/pawtful_logo_appbar.svg"
              alt="pawtful.com"
            />
          </div>
          <Stepper
            currentStep={currentStep}
            numberOfSteps={NUMBER_OF_STEPS}
            setStep={handleChildStateChange}
          />
        </div>

        <div className="grid row-span-4 min-w-full h-full items-center place-content-center">
          {renderSwitchWithOutSession({
            param: currentStep,
            setStep: handleChildStateChange
          })}
        </div>

        <div className="grid row-span-2 fixed py-12 bottom-0 max-h-52 min-h-52">
          <StepButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            NUMBER_OF_STEPS={NUMBER_OF_STEPS}
          />
        </div>
      </div>
    </>
  );
}

function Stepper({
  currentStep,
  numberOfSteps,
  setStep
}: {
  currentStep: number;
  numberOfSteps: number;
  setStep: any;
}) {
  const steps = ["Dog details", "Dog health", "Plan detail"];

  return (
    <div className="flex flex-col max-w-[400px] mx-auto">
      <div className="flex max-w-[300px] mt-4 mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 min-w-[130px]">
            {/* Step Indicator */}
            <div className="flex items-center">
              <div
                className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  index < currentStep
                    ? "border-[#EE9422] bg-[#EE9422] text-white"
                    : index === currentStep
                      ? "border-[#EE9422] text-[#EE9422]"
                      : "border-gray-300 text-gray-500"
                }`}
              >
                {index < currentStep ? (
                  <span className="text-sm font-semibold">✔</span>
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 ${index < currentStep ? "bg-[#EE9422]" : "bg-gray-300"}`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-6 min-w-[400px]">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 max-w-[130px]">
            {/* Step Label */}
            <div className=" text-center mt-2 text-[12px] font-normal">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderSwitchWithOutSession({ param, setStep }: { param: number; setStep: any }) {
  const handleChildStateChange = (newValue: number) => {
    setStep(newValue);
  };
  switch (param) {
    case 0:
      return <PetDetails setStep={handleChildStateChange} />;
    case 1:
      return <PetHealth setStep={handleChildStateChange} />;
    case 2:
      return <StepThree setStep={handleChildStateChange} />;
    case 3:
      return <StepFour setStep={handleChildStateChange} />;

    default:
      return "";
  }
}

const DummySpacer = () => <section className="min-h-6 mt-12"></section>;
