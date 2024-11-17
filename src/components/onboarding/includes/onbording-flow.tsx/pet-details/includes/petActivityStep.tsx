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
interface StepProps {
  control: Control;
}

const PetActivityStatusStep = ({ control }: StepProps) => {
  const { userData } = useContext(UserDataContext) as UserDataContextType;
  const [innerStep, setInnerStep] = useState(0);
  const handleCardClick = (id: number) => {
    setInnerStep(id); // Set the selected card value in form state
  };
  const steps: SelectCardProps[] = [
    {
      title: "Chilled out",
      subtitle: "Mellow and loves sleep",
      subtitle1: "<30 minutes exercies",
      image: slimDog
    },
    {
      title: "Low to play",
      subtitle: "Energetic, small walks.",
      subtitle1: "30-90 minutes exercies",
      image: fitDog
    },
    {
      title: "Ball of energy",
      subtitle: "Athletic, long walks & runs",
      subtitle1: ">90 minutes exercies",
      image: overwaightDog
    }
  ];
  return (
    <div className="flex flex-col max-h-80 mt-8">
      <text className="text-center text-2xl font-semibold mb-6 text-[#EE9422]">
        How active is Caeser each day?
      </text>
      <div className="grid grid-rows-3 md:grid-cols-3 gap-4 max-h-72">
        {/* Cards with Controller from React Hook Form */}
        <Controller
          name="petShape"
          control={control}
          defaultValue={userData.pets?.body_shape || ""}
          rules={{ required: "Please select a card" }} // Validation rule
          render={({ field }) => (
            <>
              {steps.map((item: SelectCardProps, i: number) => (
                <Card
                  key={i}
                  id={i}
                  image={item.image}
                  text={item.title}
                  subtitle={item.subtitle}
                  subtitle1={item.subtitle1}
                  isSelected={innerStep === i}
                  onClick={() => handleCardClick(i)}
                />
              ))}
            </>
          )}
        />
      </div>
    </div>
    //   {errors.selectedCard && (
    //     <p className="text-red-500">{errors.selectedCard.message}</p>
    //   )}
  );
};

export default PetActivityStatusStep;
