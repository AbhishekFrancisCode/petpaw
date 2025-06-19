"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useContext, useEffect, useMemo, useState } from "react";
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
  const { control, handleSubmit, setValue, getValues, formState, trigger } = useForm<Formdata>({
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = useMemo(() => searchParams.get("name"), [searchParams]);

  useEffect(() => {
    console.log("innerStep", innerStep);
  }, [innerStep]);

  useEffect(() => {
    if (name) {
      updateFormdata({ petname: name });
      setInnerStep(1);
      setCurrentStep(0);
    }
  }, [name]);

  useEffect(() => {
    if (formdata) {
      // setValue("name", formdata.name);
      // setValue("email", formdata.email);
      // setValue("phone", formdata.phone);
      setValue("petname", formdata.petname);
      setValue("gender", formdata.gender);
      setValue("age", formdata.age);
      setValue("weight", formdata.weight);
      setValue("breed", formdata.breed);
    }
  }, [formdata, setValue]);

  const MAX_COUNT = 8;
  const MIN_COUNT = 0;

  const goToNextStep = async () => {
    const isValid = await trigger();
    // switch (currentStep) {
    //   case 1:
    //     isValid = await trigger("name"); // Only validate "name" on Step 1
    //     break;
    //   case 2:
    //     isValid = await trigger("gender"); // Only validate "gender" on Step 2
    //     break;
    //   case 3:
    //     isValid = await trigger("age"); // Only validate "age" on Step 3
    //     break;
    //   case 4:
    //     isValid = await trigger(["phone", "email"]); // Only validate "phone" and "email" on Step 4
    //     break;
    //   default:
    //     isValid = true;
    // }
    if (isValid) {
      if (innerStep === 0 && !user) {
        router.push("/login?flow=onboardingflow");
      } else {
        try {
          if (innerStep === 3 || innerStep === 6) {
            setCurrentStep((prev: number) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
          }
          setInnerStep((prev: number) => Math.min(MAX_COUNT, prev + 1));
        } catch (error) {}
      }
    }
  };
  const goToPreviousStep = () => {
    if (innerStep === 0 && currentStep === 0) {
      if (document.referrer) {
        router.back();
      } else {
        router.push("/"); // Navigate to a fallback page
      }
    } else {
      try {
        if (innerStep === 4 || innerStep === 7) {
          setCurrentStep((prev: number) => (prev <= 0 ? prev : prev - 1));
        }
        setInnerStep((prev: number) => Math.max(MIN_COUNT, prev - 1));
      } catch (error) {}
    }
  };

  const handleNext = (data: any) => {
    updateFormdata(data);
    goToNextStep();
  };

  const onSubmit = (data: any) => {
    updateFormdata(data);

    createUser(data);
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
    console.log(payload);
    // if (payload.name !== "") {
    //   console.log("Submitting data:", formdata);
    //   await addDoc(collection(db, "user"), { ...payload })
    //     .then((docRef) => {
    //       console.log("Document written with ID: ", docRef.id);
    //       router.push("/profile");
    //     })
    //     .catch((error) => {
    //       console.error("Error adding document: ", error);
    //     });
    // }
  };

  const handleRoute = () => {
    router.push(`/onboarding?name=${getValues("petname")}`);
  };

  return (
    <div className="flex justify-center pt-12 md:pt-6 px-4 sm:px-6 md:px-8">
      <form
        onSubmit={handleSubmit(innerStep === steps.length - 1 ? onSubmit : handleNext)}
        className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl pb-24 lg:pb-0"
      >
        <motion.div
          key={innerStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-full"
        >
          <StepComponent control={control} getValues={getValues} />
        </motion.div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-transparent py-4 sm:py-5 md:py-3 lg:py-6 z-10 max-h-20 lg:max-h-40">
          <div className="flex justify-center">
            <div className="flex flex-row-reverse items-center gap-3 sm:gap-4 px-4 sm:px-6">
              {innerStep !== 8 && (
                <button
                  type="submit"
                  className="bg-[#EE9422] text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full min-w-[140px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] hover:scale-105 transition-transform duration-200"
                >
                  Continue
                </button>
              )}
              <button
                type="button"
                onClick={innerStep !== 8 ? goToPreviousStep : handleRoute}
                className="flex items-center justify-center text-gray-700 bg-gray-200 rounded-full size-10 sm:size-12 md:size-14 hover:scale-110 transition-transform duration-200"
              >
                <MdArrowBack size={20} className="sm:size-6 md:size-7" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
