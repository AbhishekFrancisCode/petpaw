import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { Controller, Control } from "react-hook-form";

const breedOptions = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "Bulldog",
  "Poodle",
  "Beagle",
  "Rottweiler",
  "Siberian Husky",
  "Indie",
  "Shih Tzu",
  "Others"
];

interface StepProps {
  control: Control;
}

const PetBreedStep = ({ control }: StepProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Controller
      control={control}
      name="breed"
      rules={{ required: "Please select a gender" }}
      render={({ field, fieldState }) => (
        <div className="max-w-[300px] min-w-[300px] md:min-w-[400px] md:max-w-[400px]">
          <label className="block mb-2 text-base md:text-lg text-center">{`What's ${formdata.petname + "'s" || "pet's"} Breed?`}</label>
          <select
            {...field}
            className="w-full h-12 sm:h-14 lg:h-16 px-4 py-2 border border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0 text-sm sm:text-base"
          >
            <option value="">Select Breed</option>
            {breedOptions.map((breed) => (
              <option
                key={breed}
                value={breed}
                className=""
                style={{
                  backgroundColor: field.value === breed ? "#F5EFC3" : ""
                }}
              >
                {breed}
              </option>
            ))}
          </select>
          {fieldState?.error && (
            <p className="mt-2 text-sm text-red-500 text-center">{fieldState?.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default PetBreedStep;
