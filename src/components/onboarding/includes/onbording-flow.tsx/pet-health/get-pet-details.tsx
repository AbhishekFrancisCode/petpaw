"use client";
import { useForm, Controller } from "react-hook-form";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { UserDataContext, UserDataContextType } from "@/contexts/leader-data-context";
import { User } from "@/store/interfaces/user";
import PetAgeStep from "../pet-details/includes/PetAgeStep";
import PetBreedStep from "../pet-details/includes/petBreedStep";
import PetNameStep from "../pet-details/includes/petNameStep";
import PetWaightStep from "../pet-details/includes/petWeightStep";

const steps = [PetNameStep, PetAgeStep, PetWaightStep, PetBreedStep];

export default function PetHealth({ setStep }: { setStep: any }) {
  const { control, handleSubmit } = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const { userData, updateUserData } = useContext(UserDataContext) as UserDataContextType;
  const StepComponent = steps[currentStep];

  const handleNext = (data: any) => {
    updateUserData(data);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data: any) => {
    // const finalData = { ...formData, ...data };
    console.log("Submitting data:", userData);
    // // Replace with your API endpoint
    // fetch('/api/submitPetDetails', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(finalData),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log('Success:', result))
    //   .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(currentStep === steps.length - 1 ? onSubmit : handleNext)}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-4"
        >
          <StepComponent control={control} />
        </motion.div>

        <div className="flex justify-between">
          {currentStep > 0 && (
            <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded-lg">
              Back
            </button>
          )}
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}
