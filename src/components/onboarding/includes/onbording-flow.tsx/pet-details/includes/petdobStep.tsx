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
    <div className="flex flex-col md:min-w-[400px]">
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Please select a gender" }}
        render={({ field, fieldState }) => (
          <>
            <GenderToggle value={field.value} onChange={field.onChange} />
            {fieldState?.error && (<></>)}
          </>
        )}
      />
      <Controller
        control={control}
        name="age"
        defaultValue={formdata.age || ""}
        render={({ field, fieldState }) => (
          <div className="md:min-w-[400px] mt-4">
            <label className="block mb-2 text-lg text-center">{`What's ${formdata.petname + "'s" || "pet's"} age?`}</label>
            <div className="relative">
              <input
                {...field}
                type="text"
                placeholder="e.g., 2"
                className="w-full h-16 px-4 py-2 border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0"
              />
              <span className="absolute inset-y-0 right-4 flex items-center font-semibold text-gray-500">
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
