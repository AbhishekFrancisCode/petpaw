import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";
import { MdCheck } from "react-icons/md";
import { MdBrightness1 } from "react-icons/md";

const dogAllergens = [
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
  const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <div className="flex flex-col max-h-80 mt-8">
      <text className="text-center text-2xl font-semibold mb-6 text-[#EE9422]">
        What has Caeser's been eating?
      </text>
      <div className="grid grid-rows-3 md:grid-cols-1 gap-4 max-h-72">
        {/* Cards with Controller from React Hook Form */}
        <Controller
          control={control}
          name="allergies"
          defaultValue={userData.pets?.allergies || ""}
          render={({ field }) => (
            <div className="flex flex-wrap max-w-[500px] gap-4 justify-center">
              {dogAllergens.map((food) => {
                const isSelected = field.value.includes(food);

                return (
                  <button
                    key={food}
                    type="button"
                    onClick={() => {
                      // Toggle selection
                      const newValue = isSelected
                        ? field.value.filter((item: any) => item !== food)
                        : [...field.value, food];

                      field.onChange(newValue);
                    }}
                    className={`flex items-center px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-[#EE9422] text-white border-[#EE9422]"
                        : "bg-[#faefe1] text-gray-700 border-[#faefe1]"
                    }`}
                  >
                    <span className="mr-2 text-sm">{food}</span>
                    {isSelected ? (
                      <div className="p-1 rounded-full bg-[#faefe1]">
                        <MdCheck className="text-[#EE9422]" />
                      </div>
                    ) : (
                      <MdBrightness1 className="text-[#f5e1c8]" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PetAllergiesTypesStep;
