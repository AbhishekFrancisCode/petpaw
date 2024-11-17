import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";

interface StepProps {
  control: Control;
}

const PetWaightStep = ({ control }: StepProps) => {
  const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <div className="flex flex-col md:min-w-[400px]">
      <Controller
        control={control}
        name="petwaight"
        defaultValue={userData.pets?.waight || ""}
        render={({ field }) => (
          <div>
            <label className="block mb-2 text-lg text-center">What's your pet's waight?</label>
            <input
              {...field}
              type="text"
              placeholder="e.g., Bella"
              className="min-w-full  h-16 px-4 py-2 border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0"
            />
          </div>
        )}
      />
      <Controller
        control={control}
        name="petAge"
        defaultValue={userData.pets?.age || ""}
        render={({ field }) => (
          <div>
            <label className="block mb-2 text-lg text-center">What's your pet's ?</label>
            <input
              {...field}
              type="text"
              placeholder="e.g., Bella"
              className="min-w-full  h-16 px-4 py-2 border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0"
            />
          </div>
        )}
      />
    </div>
  );
};

export default PetWaightStep;
