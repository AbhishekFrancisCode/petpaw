import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";

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
        render={({ field }) => <GenderToggle value={field.value} onChange={field.onChange} />}
      />
      <Controller
        control={control}
        name="age"
        defaultValue={formdata.age || ""}
        render={({ field }) => (
          <div className="md:min-w-[400px] mt-4">
            <label className="block mb-2 text-lg text-center">{`What's your ${formdata.petname + "'s" || "pet's"} age?`}</label>
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
          </div>
        )}
      />
    </div>
  );
};

export default PetAgeStep;

const GenderToggle = ({ value, onChange }: any) => {
  return (
    <div className="flex space-x-4 mx-auto">
      {/* Male Toggle Button */}
      <button
        type="button"
        className={`px-4 py-2 transition-all min-w-[190px] min-h-16 rounded-full ${
          value === "male" ? "bg-blue-100" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onChange("male")}
      >
        Male
      </button>

      {/* Female Toggle Button */}
      <button
        type="button"
        className={`px-4 py-2 transition-all min-w-[190px] min-h-16 rounded-full ${
          value === "female" ? "bg-pink-100" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onChange("female")}
      >
        Female
      </button>
    </div>
  );
};
