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
  const { formdata } = useContext(UserDataContext) as UserDataContextType;
  const [innerStep, setInnerStep] = useState(1);
  const handleCardClick = (id: number) => {
    console.log(id);
    setInnerStep(id); // Set the selected card value in form state
  };
  const steps: SelectCardProps[] = [
    {
      id: 1,
      title: "A bit slim",
      subtitle: "Skinny waist with visable ribs",
      image: slimDog
    },
    {
      id: 2,
      title: "Just right",
      subtitle: "Visable waist and easy to feel ribs",
      image: fitDog
    },
    {
      id: 3,
      title: "Carries a bit extra",
      subtitle: "Hidden waist, hard to find to ribs",
      image: overwaightDog
    }
  ];
  return (
    <div className="flex flex-col max-h-80 mt-8">
      <text className="text-center text-2xl font-semibold mb-6 text-[#EE9422]">
        {`What is ${formdata.petname + "'s" || "pet's"} body shape?`}
      </text>
      <div className="grid grid-rows-3 md:grid-cols-3 gap-4 max-h-72">
        {/* Cards with Controller from React Hook Form */}
        <Controller
          name="body_shape"
          control={control}
          rules={{ required: "Please select a card" }} // Validation rule
          render={({ field }) => (
            <>
              {steps.map((item: SelectCardProps) => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  text={item.title}
                  subtitle={item.subtitle}
                  subtitle1={""}
                  isSelected={innerStep === item.id}
                  onClick={() => {
                    handleCardClick(item.id);
                    field.onChange(item.title);
                  }}
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

export default PetShapeStep;
