import { Controller, Control } from "react-hook-form";

interface StepProps {
  control: Control;
}

const PetNameStep = ({ control }: StepProps) => {
  return (
    <Controller
      control={control}
      name="petname"
      render={({ field }) => (
        <div className="md:min-w-[400px]">
          <label className="block mb-2 text-lg text-center">{`What's your pet's name?`}</label>
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

export default PetNameStep;
