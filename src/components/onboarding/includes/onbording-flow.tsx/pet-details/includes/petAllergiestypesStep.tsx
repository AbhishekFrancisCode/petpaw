import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";
import { MdCheck } from "react-icons/md";
import { MdBrightness1 } from "react-icons/md";
import ChipView from "./chip-view";

const dogAllergens = [
  "None",
  "Wheat",
  "Soy",
  "Corn",
  "Chicken",
  "Beef",
  "Dairy",
  "Eggs",
  "Lamb",
  "Fish",
  "Pork"
];

interface StepProps {
  control: Control;
}

const PetAllergiesTypesStep = ({ control }: StepProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return (
    <div className="flex flex-col max-h-80 mt-8">
      <text className="text-center text-2xl font-semibold mb-6 text-[#EE9422]">
        {`Dose ${formdata.petname + "'s" || "pet's"} have any allergies?`}
      </text>
      <div className="grid grid-rows-3 md:grid-cols-1 gap-4 max-h-72">
        {/* Cards with Controller from React Hook Form */}
        <Controller
          control={control}
          name="allergies"
          render={({ field }) => {
            if (field.value.length === 0) {
              field.onChange([dogAllergens[0]]);
            }
            return (
              <ChipView field={field} list={dogAllergens}/>
            );
          }}
        />
      </div>
    </div>
  );
};

export default PetAllergiesTypesStep;
