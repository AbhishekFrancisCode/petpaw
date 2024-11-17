"use client";
import { useContext, useState } from "react";
import { MdArrowBack } from "react-icons/md";

export default function StepButton({
  currentStep,
  setCurrentStep,
  NUMBER_OF_STEPS,
  innerStep,
  setInnerStep
}: {
  currentStep: number;
  setCurrentStep: (prev: any) => void;
  NUMBER_OF_STEPS: number;
  innerStep: number;
  setInnerStep: (prev: any) => void;
}) {
  const [error, setError] = useState<string>("");

  const MAX_COUNT = 6;
  const MIN_COUNT = 0;

  const goToNextStep = () => {
    try {
      if (innerStep === 3 || innerStep === 6) {
        setCurrentStep((prev: number) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
      }
      setInnerStep((prev: number) => Math.min(MAX_COUNT, prev + 1));
    } catch (error) {}
  };
  const goToPreviousStep = () => {
    try {
      if (innerStep === 4 || innerStep === 6) {
        setCurrentStep((prev: number) => (prev <= 0 ? prev : prev - 1));
      }
      setInnerStep((prev: number) => Math.max(MIN_COUNT, prev - 1));
    } catch (error) {}
  };

  return (
    <div className="flex mx-auto justify-center">
      <section className="flex gap-2 px-6 py-4 flex-row-reverse">
        <button
          type="submit"
          onClick={goToNextStep}
          className="bg-[#EE9422] text-white text-lg py-2 px-4 min-w-[300px] rounded-full hover:text-xl"
        >
          Continue
        </button>
        <button
          onClick={goToPreviousStep}
          className="flex items-center justify-center size-24 text-xl hover:text-3xl rounded-full bg-gray-200 text-gray-700"
          aria-label="Go Back"
        >
          <MdArrowBack />
        </button>
      </section>
    </div>
  );
}
