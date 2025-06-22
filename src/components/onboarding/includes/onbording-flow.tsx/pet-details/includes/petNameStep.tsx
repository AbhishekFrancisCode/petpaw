import { Formdata } from "@/store/interfaces/form-data";
import { Controller, Control } from "react-hook-form";

interface StepProps {
  control: Control<Formdata>;
}

const PetNameStep = ({ control }: StepProps) => {
  return (
    <Controller
      control={control}
      name="petname"
      rules={{ required: "Pet name is required" }}
      render={({ field, fieldState }) => (
        <div className="w-full px-4">
          <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <label
              htmlFor="petname"
              className="block mb-2 text-base sm:text-lg md:text-xl text-center font-medium"
            >
              What&apos;s your pet&apos;s name?
            </label>
            <input
              id="petname"
              {...field}
              type="text"
              placeholder="e.g., Bella"
              autoFocus
              className="w-full h-12 sm:h-14 lg:h-16 px-4 py-2 border border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0 text-sm sm:text-base"
            />
            {fieldState?.error && (
              <p className="mt-2 text-sm text-red-500 text-center">{fieldState?.error.message}</p>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default PetNameStep;
