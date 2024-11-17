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

const PetShapeStep = ({ control }: StepProps) => {
  const { userData } = useContext(UserDataContext) as UserDataContextType;
  const [innerStep, setInnerStep] = useState(0);
  const handleCardClick = (id: number) => {
    setInnerStep(id); // Set the selected card value in form state
  };
  const steps: SelectCardProps[] = [
    {
      title: "A bit slim",
      subtitle: "Skinny waist with visable ribs",
      image: slimDog
    },
    {
      title: "Just right",
      subtitle: "Visable waist and easy to feel ribs",
      image: fitDog
    },
    {
      title: "Carries a bit extra",
      subtitle: "Hidden waist, hard to find to ribs",
      image: overwaightDog
    }
  ];
  return (
    <div className="flex flex-col max-h-80 mt-8">
      <text className="text-center text-2xl font-semibold mb-6 text-[#EE9422]">
        What is Caeser's body shape?
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
              {steps.map((item: SelectCardProps, i: number) => {
                const isSelected = field.value.includes(item);
                return (
                  <Card
                    key={item.title}
                    id={i}
                    image={item.image}
                    text={item.title}
                    subtitle={item.subtitle}
                    subtitle1={""}
                    isSelected={innerStep === i}
                    onClick={() => {
                      handleCardClick(i);
                      const newValue = isSelected;
                      console.log(field.value);
                      // field.onChange(isSelected)
                    }}
                  />
                );
              })}
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

export default PetShapeStep;
