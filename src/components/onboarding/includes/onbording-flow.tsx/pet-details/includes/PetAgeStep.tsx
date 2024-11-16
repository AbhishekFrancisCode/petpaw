import { UserDataContext, UserDataContextType } from "@/contexts/leader-data-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";

interface StepProps {
  control: Control;
}

const PetAgeStep = ({ control }: StepProps) => {
  const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Controller
      control={control}
      name="petAge"
      defaultValue={userData.pets?.date_of_birth || ""}
      render={({ field }) => (
        <div>
          <label className="block mb-2 text-lg text-center">What's your pet's age?</label>
          <input
            {...field}
            type="text"
            placeholder="e.g., Bella"
            className="w-full h-16 px-4 py-2 border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0"
          />
        </div>
      )}
    />
  );
};

export default PetAgeStep;
