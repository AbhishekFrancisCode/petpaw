import { HomePageStrings } from "@/constants/title-constants";

export default function HeroTitle() {
  return (
    <div className="flex w-full h-full place-content-center lg:place-content-start items-start text-center lg:text-left">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p
            className={`text-[#028391] text-4xl lg:text-[52px] xl:text-[64px] lg:leading-[68px] font-semibold py-1 text-center lg:text-left`}
          >
            {"Freshly Cooked,"}
          </p>
          <p
            className={`text-[#EE9422] text-4xl lg:text-[52px] xl:text-[64px] lg:leading-[68px] font-semibold py-1 text-center lg:text-left`}
          >
            {"Meals for Dogs!"}
          </p>
        </div>
        <p className="text-base font-medium mt-6 lg:pr-32">{HomePageStrings.description}</p>
      </div>
    </div>
  );
}
