export const GenderToggle = ({ value, onChange }: any) => {
  return (
    <div className="flex space-x-4 mx-auto">
      {/* Male Toggle Button */}
      <button
        type="button"
        className={`px-4 py-2 transition-all max-w-[140px] min-w-[140px] md:max-w-[190px] md:min-w-[190px] min-h-12 md:min-h-16 rounded-full ${
          value === "male" ? "bg-blue-100" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onChange("male")}
      >
        Male
      </button>

      {/* Female Toggle Button */}
      <button
        type="button"
        className={`px-4 py-2 transition-all max-w-[140px] min-w-[140px] md:max-w-[190px] md:min-w-[190px] min-h-12 md:min-h-16 rounded-full ${
          value === "female" ? "bg-pink-100" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onChange("female")}
      >
        Female
      </button>
    </div>
  );
};
