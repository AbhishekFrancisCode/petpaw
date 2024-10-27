export default function HeroTitle() {
  return (
    <div className="flex w-full h-full place-content-center lg:place-content-start items-center text-center lg:text-left">
      <div className="flex flex-col">
        <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#EE9422] font-bold">
          <p className="w-full">Happy Gut,</p>
          <p className="w-full">Waggy Butt!</p>
        </div>
        <p className="text-base font-medium mt-6 ">
          Fresh expert crafted meals, cooked and deliverd daily
        </p>
      </div>
    </div>
  );
}
