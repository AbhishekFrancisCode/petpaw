import { Formdata } from "@/store/interfaces/form-data";
import { Controller, Control } from "react-hook-form";

interface StepProps {
  control: Control;
}

const PetNameStep = ({ control }: StepProps) => {
  return (
    <Controller
      control={control}
      name="petname"
      rules={{ required: "Pet name is required" }}
      render={({ field, fieldState }) => (
        <div className="min-w-[300px] md:min-w-[400px]">
          <label className="block mb-2 text-lg text-center">{`What's your pet's name?`}</label>
          <input
            {...field}
            type="text"
            placeholder="e.g., Bella"
            className="w-full h-16 px-4 py-2 border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0"
          />
          {fieldState?.error && (
            <p className="mt-2 text-sm text-red-500 text-center">{fieldState?.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default PetNameStep;
