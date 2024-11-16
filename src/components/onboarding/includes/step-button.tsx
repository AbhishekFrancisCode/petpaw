"use client";
import { useContext, useState } from "react";

export default function StepButton({
  currentStep,
  setCurrentStep,
  NUMBER_OF_STEPS
}: {
  currentStep: number;
  setCurrentStep: (prev: any) => void;
  NUMBER_OF_STEPS: number;
}) {
  const [error, setError] = useState<string>("");

  const goToNextStep = () => {
    setCurrentStep((prev: number) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  };
  const goToPreviousStep = () => setCurrentStep((prev: number) => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="flex mx-auto justify-center">
      <section className="flex gap-2 px-6 py-4 flex-row-reverse">
        <button onClick={goToNextStep} className="sb-gradient text-white py-2 px-4 w-24 rounded-md">
          Continue
        </button>

        <button
          onClick={goToPreviousStep}
          className="bg-white py-2 px-4 border-2 w-24 rounded-md hidden lg:block"
        >
          Back
        </button>
      </section>
    </div>
  );
}
