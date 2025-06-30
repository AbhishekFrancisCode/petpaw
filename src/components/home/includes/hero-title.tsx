import { HomePageStrings } from "@/constants/title-constants";

interface HeroTitleProps {
  title?: string;
  description?: string;
}

export default function HeroTitle({ title, description }: HeroTitleProps) {
  return (
    <div className="flex w-full h-full justify-center lg:justify-start items-center text-center lg:text-left px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col max-w-4xl gap-2 lg:gap-3">
        <p
          className="text-[#028391] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          style={{
            lineHeight: "1.2"
          }}
        >
          {title || ""}
        </p>
        <p
          className="text-[#EE9422] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          style={{
            lineHeight: "1.2"
          }}
        >
          {description || ""}
        </p>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2 lg:mt-4 max-w-2xl"
          style={{
            lineHeight: "1.5"
          }}
        >
          {HomePageStrings.description}
        </p>
      </div>
    </div>
  );
}
