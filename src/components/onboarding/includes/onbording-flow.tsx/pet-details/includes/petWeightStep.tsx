import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";

interface StepProps {
  control: Control;
}

const PetWaightStep = ({ control }: StepProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return (
    <div className="flex justify-center pt-6">
      <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg px-4">
        <Controller
          control={control}
          name="weight"
          rules={{ required: "Please enter the weight" }}
          render={({ field, fieldState }) => (
            <>
              <label className="block mb-[0.5rem] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-center font-medium">
                {`What's ${formdata.petname ? `${formdata.petname}'s` : "your pet's"} weight?`}
              </label>
              <div className="relative">
                <input
                  {...field}
                  type="number"
                  placeholder="e.g., 45"
                  className="w-full h-[3rem] sm:h-[3.5rem] lg:h-[4rem] px-[1rem] py-[0.5rem] border border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0 text-[0.875rem] sm:text-[1rem]"
                />
                <span className="absolute inset-y-0 right-[1rem] flex items-center font-semibold text-gray-500 text-[0.75rem] md:text-[0.875rem]">
                  kg
                </span>
              </div>
              {fieldState?.error && (
                <p className="text-red-500 text-[0.875rem] mt-[0.5rem] text-center">
                  {fieldState.error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default PetWaightStep;
