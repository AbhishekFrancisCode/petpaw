"use client";
import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext, useState } from "react";
import { Controller, Control } from "react-hook-form";
import Image from "next/image";
import fitDog from "../../../../../../../public/images/img/fit_dog.png";
import slimDog from "../../../../../../../public/images/img/slim_dog.png";
import overwaightDog from "../../../../../../../public/images/img/overwaight_dog.png";
import Card from "@/components/common/card";
import { SelectCardProps } from "@/store/interfaces/card";
import CardView from "./card-view";
interface StepProps {
  control: Control;
}

const PetActivityStatusStep = ({ control }: StepProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;
  const [innerStep, setInnerStep] = useState(0);
  const handleCardClick = (id: number) => {
    setInnerStep(id); // Set the selected card value in form state
  };
  const steps: SelectCardProps[] = [
    {
      id: 1,
      title: "Chilled out",
      subtitle: "Mellow and loves sleep",
      subtitle1: "<30 minutes exercies",
      image: slimDog
    },
    {
      id: 2,
      title: "Low to play",
      subtitle: "Energetic, small walks.",
      subtitle1: "30-90 minutes exercies",
      image: fitDog
    },
    {
      id: 3,
      title: "Ball of energy",
      subtitle: "Athletic, long walks & runs",
      subtitle1: ">90 minutes exercies",
      image: overwaightDog
    }
  ];
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 md:mt-8">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-[#EE9422]">
        {`What is ${formdata.petname ? `${formdata.petname}'s` : "your pet's"} body shape?`}
      </h2>

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl mb-28 md:mb-0">
        <Controller
          name="body_shape"
          control={control}
          rules={{ required: "Please select a card" }}
          render={({ field, fieldState }) => (
            <>
              <CardView step={innerStep} list={steps} field={field} handleClick={handleCardClick} />
              {fieldState?.error && (
                <p className="text-sm text-red-500 text-center w-full mt-6 md:mt-24">
                  {fieldState?.error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default PetActivityStatusStep;
