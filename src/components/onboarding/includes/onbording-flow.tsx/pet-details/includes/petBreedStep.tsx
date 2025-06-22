"use client";

import { useContext } from "react";
import { Controller, Control } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { sortStringsAlphabetically } from "@/utils/string-utils";

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
      name="breed"
      control={control}
      rules={{ required: "Please select a breed" }}
      render={({ field, fieldState }) => (
        <div className="w-full min-w-[300px] md:min-w-[400px] max-w-sm sm:max-w-md px-4 mx-auto">
          <label className="block mb-2 text-base md:text-lg text-center">
            {`What's ${formdata.petname ? `${formdata.petname}'s` : "your pet's"} Breed?`}
          </label>

          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="min-w-full h-12 sm:h-14 lg:h-16 rounded-full bg-white border-[#f2d4ad] shadow-md focus:ring-0 focus:border-[#f2c386]">
              <SelectValue placeholder="Select Breed" />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-auto z-50">
              {sortStringsAlphabetically(breedOptions).map((breed) => (
                <SelectItem key={breed} value={breed}>
                  {breed}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {fieldState?.error && (
            <p className="mt-2 text-sm text-red-500 text-center">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default PetBreedStep;
