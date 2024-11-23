import { UserDataContext, UserDataContextType } from "@/contexts/userdata-context";
import { useContext } from "react";
import { MdCheck } from "react-icons/md";
import { MdBrightness1 } from "react-icons/md";


interface ChipProps {
  field: any;
  list: string[];
}

const ChipView = ({ field, list }: ChipProps) => {
  const { formdata } = useContext(UserDataContext) as UserDataContextType;

  return (
    <div className="flex flex-wrap max-w-[500px] gap-4 justify-center px-[6px] md:px-0">
      {list.map((food) => {
        const isSelected = field.value.includes(food);

        return (
          <button
            key={food}
            type="button"
            onClick={() => {
              // Toggle selection
              const newValue = isSelected
                ? field.value.filter((item: any) => item !== food)
                : [...field.value, food];

              field.onChange(newValue);
            }}
            className={`flex items-center px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
              isSelected
                ? "bg-[#EE9422] text-white border-[#EE9422]"
                : "bg-[#faefe1] text-gray-700 border-[#faefe1]"
            }`}
          >
            <span className="mr-2 text-sm">{food}</span>
            {isSelected ? (
              <div className="p-1 rounded-full bg-[#faefe1]">
                <MdCheck className="text-[#EE9422]" />
              </div>
            ) : (
              <MdBrightness1 className="text-[#f5e1c8]" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ChipView;
