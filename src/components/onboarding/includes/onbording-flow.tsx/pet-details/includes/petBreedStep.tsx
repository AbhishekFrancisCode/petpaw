import { UserDataContext, UserDataContextType } from "@/contexts/leader-data-context";
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
  "Persian Cat",
  "Maine Coon",
  "Bengal Cat",
  "Sphynx Cat",
  "British Shorthair"
];

interface StepProps {
  control: Control;
}

const PetBreedStep = ({ control }: StepProps) => {
  const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Controller
      control={control}
      name="petAge"
      defaultValue={userData.pets?.breed || ""}
      render={({ field }) => (
        <div>
          <label className="block mb-2 text-lg text-center">What's your pet's Bread?</label>
          <select
            {...field}
            className="w-full h-16 px-4 py-2 border-[#f2d4ad] rounded-full shadow-md focus:border-[#f2c386] focus:ring-0"
          >
            <option value="">-- Select Breed --</option>
            {breedOptions.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  );
};

export default PetBreedStep;
