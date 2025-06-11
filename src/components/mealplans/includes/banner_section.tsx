"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BannerSection() {
  const mealOption = [
    {
      name: "Treats",
      price: "Starting at Rs.200",
      description:
        "The pinnacle of quality and nutrition, Pawtful's Fresh recipes are made from real meat, fruits, veggies, and grains, so you can give your pup the best of the best each and every day.",
      tag: "PREMIUM",
      recipes: ["Chicken Dish with Carrots", "Lamb Dish with Cranberries", "Pork Dish with Apples"]
    }
  ];

  const router = useRouter();

  const goToTeamSection = () => {
    router.push("/product?scrollTo=treatsec");
  };

  return (
    <section
      className="w-full mx-auto py-6 px-4 sm:px-8 lg:px-16 xl:px-24 rounded-xl"
      style={{
        backgroundColor: "#C4DEE1",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Text Column */}
        <div className="md:w-1/2 flex flex-col justify-center bg-transparent rounded-lg p-4 sm:p-6 gap-4">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-semibold">{mealOption[0].name}</h2>
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              {mealOption[0].tag}
            </span>
          </div>

          <p className="text-lg font-medium">{mealOption[0].price}</p>
          <p className="mt-2 mb-6 text-sm sm:text-base">{mealOption[0].description}</p>

          <button
            onClick={goToTeamSection}
            className="w-full sm:w-[200px] bg-[#FFF8EF] text-[#333333] py-3 px-6 rounded-md hover:bg-[#028391] hover:text-white transition-colors"
          >
            Get your treats
          </button>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 bg-transparent rounded-lg overflow-hidden max-w-full">
          <img
            src="https://ik.imagekit.io/funlogic/pawfull/all_snacks-cut%20out%20.png?updatedAt=1745739800517"
            alt="Dog eating from bowl"
            className="w-full max-h-[400px] md:max-h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
