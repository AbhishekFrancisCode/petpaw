import Image from "next/image";
const Card = ({
  id,
  image,
  text,
  subtitle,
  subtitle1,
  isSelected,
  onClick,
  className = ""
}: any) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`relative border-2 p-4 rounded-md cursor-pointer transition-all 
        min-w-[140px] max-w-[140px] min-h-[120px] 
        sm:min-w-full sm:min-h-[140px]
        md:min-w-52 md:max-w-52 md:min-h-44
        ${isSelected ? "border-[#EE9422] bg-[#EE9422] bg-opacity-10" : "border-gray-300"}
        ${className}`}
    >
      <div className="flex justify-between">
        <Image
          src={image}
          alt={text}
          width={80}
          height={80}
          className="max-w-16 max-h-16 sm:max-w-20 sm:max-h-20 object-cover rounded-md"
        />
        <p className="flex flex-col justify-end mt-2 text-[#EE9422] text-base font-semibold">
          {text}
        </p>
      </div>
      <div className="flex flex-col flex-wrap pt-2 gap-2">
        <p className="text-md text-center font-medium text-gray-400">{subtitle}</p>
        {subtitle1 && (
          <p className="mt-2 text-sm text-center font-medium text-graty-50">{subtitle1}</p>
        )}
      </div>
      {/* Display the tick mark if the card is selected */}
      {isSelected && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
          <button />
        </div>
      )}
    </div>
  );
};

export default Card;
