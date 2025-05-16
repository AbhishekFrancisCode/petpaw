import { HomePageStrings } from "@/constants/title-constants";

export default function HeroTitle() {
  return (
    <div className="flex w-full h-full justify-center lg:justify-start items-start text-center lg:text-left px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col max-w-4xl">
        <p
          className="text-[#028391] font-semibold py-1"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: "1.2"
          }}
        >
          Freshly Cooked,
        </p>
        <p
          className="text-[#EE9422] font-semibold py-1"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: "1.2"
          }}
        >
          Meals for Dogs!
        </p>
        <p className="text-base md:text-lg font-medium mt-6 lg:pr-32">
          {HomePageStrings.description}
        </p>
      </div>
    </div>
  );
}
