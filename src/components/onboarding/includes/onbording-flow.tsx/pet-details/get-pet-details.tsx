"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { User } from "@/store/interfaces/user";
import PetNameStep from "./includes/petNameStep";
import PetWaightStep from "./includes/petWeightStep";
import PetBreedStep from "./includes/petBreedStep";
import PetShapeStep from "./includes/PetShapeStep";
import PetActivityStatusStep from "./includes/petActivityStep";
import PetFoodTypesStep from "./includes/petFoodtypesStep";
import PetAllergiesTypesStep from "./includes/petAllergiestypesStep";
import { Formdata } from "@/store/interfaces/form-data";
import { MdArrowBack } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/store/firebase";
import OnLoadingingPage from "@/components/onboarding/onUploadScreen";
import { useRouter, useSearchParams } from "next/navigation";
import PetAgeStep from "./includes/petdobStep";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import { useCallback as reactUseCallback } from "react";

const steps = [
  PetNameStep,
  PetAgeStep,
  PetWaightStep,
  PetBreedStep,
  PetShapeStep,
  PetActivityStatusStep,
  PetFoodTypesStep,
  PetAllergiesTypesStep,
  OnLoadingingPage
];

const MAX_STEP = steps.length - 1;
const MIN_STEP = 0;

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
  const { user } = useContext(AuthContext) as AuthContextType;
  const { formdata, updateFormdata } = useContext(UserDataContext) as UserDataContextType;
  const router = useRouter();
  const searchParams = useSearchParams();

  const { control, handleSubmit, setValue, getValues, trigger } = useForm<Formdata>({
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

  const nameParam = useMemo(() => searchParams.get("name"), [searchParams]);
  const StepComponent = steps[innerStep];

  useEffect(() => {
    if (nameParam) {
      updateFormdata({ petname: nameParam });
      setInnerStep(1);
      setCurrentStep(0);
    }
  }, [nameParam]);

  useEffect(() => {
    Object.entries(formdata).forEach(([key, value]) => {
      setValue(key as keyof Formdata, value);
    });
  }, [formdata]);

  const goToNextStep = useCallback(async () => {
    const isValid = await trigger();
    if (!isValid) return;

    if (innerStep === 0 && !user) {
      router.push("/login?flow=onboardingflow");
      return;
    }

    if ([3, 6].includes(innerStep)) {
      setCurrentStep((prev: number) => Math.min(prev + 1, NUMBER_OF_STEPS - 1));
    }

    setInnerStep((prev: number) => Math.min(prev + 1, MAX_STEP));
  }, [innerStep, user]);

  const goToPreviousStep = useCallback(() => {
    if (innerStep === 0 && currentStep === 0) {
      document.referrer ? router.back() : router.push("/");
      return;
    }

    if ([4, 7].includes(innerStep)) {
      setCurrentStep((prev: number) => Math.max(prev - 1, 0));
    }

    setInnerStep((prev: number) => Math.max(prev - 1, MIN_STEP));
  }, [innerStep, currentStep]);

  const handleNext = (data: Formdata) => {
    updateFormdata(data);
    goToNextStep();
  };

  const createUser = async (data: Formdata) => {
    const payload: User = {
      name: data.name,
      contact: {
        phone: data.phone,
        email: data.email
      },
      pets: {
        petname: data.petname,
        gender: data.gender,
        age: data.age,
        weight: data.weight,
        breed: data.breed,
        body_shape: data.body_shape,
        activity_level: data.activity_level,
        preferred_foods: data.preferred_foods,
        allergies: data.allergies
      }
    };

    // Debug only:
    console.log("Payload for submission:", payload);

    // Uncomment to enable Firebase submission:
    // try {
    //   const docRef = await addDoc(collection(db, "user"), payload);
    //   console.log("Document written with ID:", docRef.id);
    //   router.push("/profile");
    // } catch (error) {
    //   console.error("Error adding document:", error);
    // }
  };

  const onSubmit = (data: Formdata) => {
    updateFormdata(data);
    createUser(data);
  };

  const handleBackRoute = () => {
    router.push(`/onboarding?name=${getValues("petname")}`);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Scrollable content (only if needed) */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-6">
        <form
          onSubmit={handleSubmit(innerStep === MAX_STEP ? onSubmit : handleNext)}
          className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl pb-40"
          id="onboarding-form"
        >
          <motion.div
            key={innerStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StepComponent control={control} getValues={getValues} />
          </motion.div>
        </form>
      </div>

      {/* Fixed bottom nav */}
      <div className="sticky bottom-0 left-0 right-0 bg-white shadow-md py-4 sm:py-5 md:py-6 z-50">
        <div className="flex justify-center">
          <div className="flex flex-row-reverse items-center gap-3 sm:gap-4 px-4 sm:px-6">
            {innerStep !== MAX_STEP && (
              <button
                type="submit"
                form="onboarding-form"
                className="bg-[#EE9422] text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full min-w-[140px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] hover:scale-105 transition-transform duration-200"
              >
                Continue
              </button>
            )}
            <button
              type="button"
              onClick={innerStep !== MAX_STEP ? goToPreviousStep : handleBackRoute}
              className="flex items-center justify-center text-gray-700 bg-gray-200 rounded-full size-10 sm:size-12 md:size-14 hover:scale-110 transition-transform duration-200"
            >
              <MdArrowBack size={20} className="sm:size-6 md:size-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
