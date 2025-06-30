import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";
import { GenderToggle } from "./genderToggle";

interface StepProps {
  control: Control;
}

const PetAgeStep = ({ control }: StepProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return (
    <div className="flex justify-center pt-6">
      <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg px-4">
        {/* Gender Toggle */}
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Please select a gender" }}
          render={({ field, fieldState }) => (
            <>
              <GenderToggle value={field.value} onChange={field.onChange} />
              {fieldState?.error && (
                <p className="text-red-500 text-sm mt-2 text-center">{fieldState.error.message}</p>
              )}
            </>
          )}
        />

        {/* Age Input */}
        <Controller
          control={control}
          name="age"
          defaultValue={formdata.age || ""}
          rules={{ required: "Age is required" }}
          render={({ field, fieldState }) => (
            <div className="mt-6">
              <label className="block mb-2 text-base sm:text-lg md:text-xl text-center">
                {`What's ${formdata.petname ? `${formdata.petname}'s` : "your pet's"} age?`}
              </label>
              <div className="relative">
                <input
                  {...field}
                  type="number"
                  placeholder="e.g., 2"
                  className="w-full h-12 sm:h-14 lg:h-16 px-4 py-2 border border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0 text-sm sm:text-base"
                />
                <span className="absolute inset-y-0 right-4 flex items-center font-semibold text-gray-500 text-xs md:text-sm">
                  years
                </span>
              </div>
              {fieldState?.error && (
                <p className="text-red-500 text-sm mt-2 text-center">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PetAgeStep;
