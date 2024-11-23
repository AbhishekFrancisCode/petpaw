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
import PetFoodTypesStep from "./includes/petFoodtypesStep";
import PetAllergiesTypesStep from "./includes/petAllergiestypesStep";
import { Formdata } from "@/store/interfaces/form-data";
import StepButton from "../../step-button";
import { MdArrowBack } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/store/firebase";
import OnLoadingingPage from "@/components/onboarding/onUploadScreen";
import { useRouter } from "next/navigation";
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
      name: "Abhishek",
      email: "abhi09shek@gmail.com",
      phone: "9845449281",
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
    console.log(innerStep);
    if (isValid) {
      if (innerStep === 0 && !user) {
        console.log(user);
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
    // createUser(data);
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
    if (payload.name !== "") {
      await addDoc(collection(db, "user"), { ...payload })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          router.push("/profile");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
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
