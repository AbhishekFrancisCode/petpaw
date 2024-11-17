"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
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
import { Formdata } from "@/store/interfaces/form-data";
import StepButton from "../../step-button";
import { MdArrowBack } from "react-icons/md";

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

export default function PetDetails({
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
  const { control, handleSubmit, setValue, getValues } = useForm<Formdata>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      petname: "",
      gender: "",
      age: 1,
      weight: "",
      breed: "",
      body_shape: "",
      activity_level: "",
      preferred_foods: [],
      allergies: []
    }
  });

  const { formdata, updateFormdata } = useContext(UserDataContext) as UserDataContextType;
  const StepComponent = steps[innerStep];

  useEffect(() => {
    if (formdata) {
      setValue("name", formdata.name);
      setValue("email", formdata.gender);
      setValue("phone", formdata.phone);
      setValue("petname", formdata.petname);
      setValue("gender", formdata.gender);
      setValue("age", formdata.age);
      setValue("weight", formdata.weight);
      setValue("breed", formdata.breed);
    }
  }, [formdata, setValue]);

  const MAX_COUNT = 7;
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
      if (innerStep === 4 || innerStep === 7) {
        setCurrentStep((prev: number) => (prev <= 0 ? prev : prev - 1));
      }
      setInnerStep((prev: number) => Math.max(MIN_COUNT, prev - 1));
    } catch (error) {}
  };

  const handleNext = (data: any) => {
    console.log(formdata);
    updateFormdata(data);
  };

  const onSubmit = (data: any) => {
    updateFormdata(data);
    console.log("Submitting data:", formdata);
  };

  return (
    <div className="place-content-center pt-16">
      <form
        onSubmit={handleSubmit(innerStep === steps.length - 1 ? onSubmit : handleNext)}
        className="flex min-w-full place-content-center"
      >
        <motion.div
          key={innerStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-full "
        >
          <StepComponent control={control} />
        </motion.div>
        <div className="fixed py-12 bottom-0 max-h-52 min-h-52">
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
        </div>
      </form>
    </div>
  );
}
