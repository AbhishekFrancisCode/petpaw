"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { User } from "@/store/interfaces/user";
import PetNameStep from "./includes/petNameStep";
import PetWaightStep from "./includes/petWeightStep";
import PetBreedStep from "./includes/petBreedStep";
import PetShapeStep from "./includes/PetShapeStep";
import PetActivityStatusStep from "./includes/petActivityStep";
import PetAgeStep from "./includes/petAgeStep";
import PetFoodTypesStep from "./includes/petFoodtypesStep";
import PetAllergiesTypesStep from "./includes/petAllergiestypesStep";

const steps = [
  PetNameStep,
  PetAgeStep,
  PetWaightStep,
  PetBreedStep,
  PetShapeStep,
  PetActivityStatusStep,
  PetFoodTypesStep,
  PetAllergiesTypesStep
];

export default function PetDetails({ innerStep }: { innerStep: number }) {
  const { control, handleSubmit } = useForm<User>();
  const { userData, updateUserData } = useContext(UserDataContext) as UserDataContextType;
  const StepComponent = steps[innerStep];

  const handleNext = (data: any) => {
    console.log(userData);
    updateUserData(data);
  };

  const onSubmit = (data: any) => {
    console.log("Submitting data:", userData);
  };

  return (
    <div className="max-h-80">
      <form onSubmit={handleSubmit(innerStep === steps.length - 1 ? onSubmit : handleNext)}>
        <motion.div
          key={innerStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-h-80"
        >
          <StepComponent control={control} />
        </motion.div>
        <button
          type="submit"
          className="bg-[#EE9422] text-white text-lg py-2 px-4 min-w-[300px] rounded-full hover:text-xl"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
