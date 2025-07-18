import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";
import { MdCheck } from "react-icons/md";
import { MdBrightness1 } from "react-icons/md";
import ChipView from "./chip-view";
import { sortStringsAlphabetically } from "@/utils/string-utils";

const dogFoodOptions = [
  "Dry Kibble",
  "Canned Food",
  "Raw Meat",
  "Freeze-Dried",
  "Grain-Free",
  "Home Cooked",
  "Puppy Food",
  "Senior Dog Food",
  "High-Protein",
  "Gluten-Free"
];

interface StepProps {
  control: Control;
}

const PetFoodTypesStep = ({ control }: StepProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return (
    <div className="flex flex-col max-h-80">
      <text className="text-center text-2xl font-semibold mb-6 text-[#EE9422]">
        {`What has ${formdata.petname || "your pet"} been eating?`}
      </text>
      <div className="grid grid-auto md:grid-cols-1 gap-4 max-h-72 mx-auto">
        {/* Cards with Controller from React Hook Form */}
        <Controller
          control={control}
          name="preferred_foods"
          render={({ field }) => {
            if (field.value.length === 0) {
              field.onChange("Others");
            }
            return (
              <ChipView
                field={field}
                list={[...sortStringsAlphabetically(dogFoodOptions), "Others"]}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default PetFoodTypesStep;
