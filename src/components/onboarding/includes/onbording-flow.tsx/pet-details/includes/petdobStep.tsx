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
    <div className="flex flex-col max-w-[300px] min-w-[300px] md:min-w-[400px] md:max-w-[400px]">
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Please select a gender" }}
        render={({ field, fieldState }) => (
          <>
            <GenderToggle value={field.value} onChange={field.onChange} />
            {fieldState?.error && <></>}
          </>
        )}
      />
      <Controller
        control={control}
        name="age"
        defaultValue={formdata.age || ""}
        render={({ field, fieldState }) => (
          <div className="w-full min-w-[300px] md:min-w-[400px] mt-4">
            <label className="block mb-2 text-base md:text-lg text-center">{`What's ${formdata.petname + "'s" || "pet's"} age?`}</label>
            <div className="relative">
              <input
                {...field}
                type="text"
                placeholder="e.g., 2"
                className="min-w-full h-12 sm:h-14 lg:h-16 px-4 py-2 border border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0 text-sm sm:text-base"
              />
              <span className="absolute inset-y-0 right-4 flex items-center font-semibold text-gray-500 text-xs md:text-md">
                years
              </span>
            </div>
            {fieldState?.error && (
              <p className="text-red-500 text-sm mt-2">{fieldState.error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default PetAgeStep;
