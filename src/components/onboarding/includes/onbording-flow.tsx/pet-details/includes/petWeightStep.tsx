import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";

interface StepProps {
  control: Control;
}

const PetWaightStep = ({ control }: StepProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Controller
      control={control}
      name="weight"
      render={({ field }) => (
        <div className="md:min-w-[400px]">
          <label className="block mb-2 text-lg text-center">{`What's your ${formdata.petname + "'s" || "pet's"} waight?`}</label>
          <div className="relative">
            <input
              {...field}
              type="text"
              placeholder="e.g., 45"
              className="min-w-full  h-16 px-4 py-2 border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0"
            />
            <span className="absolute inset-y-0 right-4 flex items-center font-semibold text-gray-500">
              \kg
            </span>
          </div>
        </div>
      )}
    />
  );
};

export default PetWaightStep;
