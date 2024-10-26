import HeroTitle from "./includes/hero-title";
import HeroButton from "./includes/button";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div
        style={{ maxWidth: "1920px", maxHeight: "1080px" }}
        className="flex sb-container bg-cover bg-green-300 min-h-screen place-items-end"
      >
        <div className="flex flex-col mx-auto min-w-full place-items-center mb-14">
          <HeroTitle />
          <div className="mx-auto pt-12">
            <HeroButton />
          </div>
        </div>
      </div>
    </div>
  );
}
