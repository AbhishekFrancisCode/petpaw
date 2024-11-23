import Image from "next/image";
const Card = ({ id, image, text, subtitle, subtitle1, isSelected, onClick }: any) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`relative border-2 p-4 rounded-md cursor-pointer transition-all min-w-72 max-w-72 min-h-44 ${
        isSelected ? "border-[#EE9422] bg-[#EE9422] bg-opacity-10" : "border-gray-300"
      }`}
    >
      <div className="flex">
        <Image
          src={image}
          alt={text}
          width={80}
          height={80}
          className="max-w-20 max-h-20 object-cover rounded-md"
        />
        <p className="mt-2 text-[#EE9422] text-base font-semibold text-right min-w-[160px]">
          {text}
        </p>
      </div>
      <div className="flec flex-col flex-wrap p-4 gap-2">
        <p className="mt-2 text-md text-center font-medium text-gray-400">{subtitle}</p>
        <p className="mt-2 text-sm text-center font-medium text-gray-500 opacity-50">{subtitle1}</p>
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
