import React from "react";
import Image from "next/image";
import dogWithPlate from "./includes/images/dogWithPlate.jpg";

const NutritionSection: React.FC = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">The nutrition your dog needs</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Fresh Meals</h3>
            <div className="w-full h-48 mx-auto my-4">
              <Image
                src={dogWithPlate}
                alt="Fresh meals"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-600 mt-2">Balanced, fresh ingredients your dog will love.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Baked Meals</h3>
            <div className="w-full h-48 mx-auto my-4">
              <Image
                src={dogWithPlate}
                alt="Baked meals"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-600 mt-2">Delicious baked options tailored to their needs.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Custom Meals</h3>
            <div className="w-full h-48 mx-auto my-4">
              <Image
                src={dogWithPlate}
                alt="Custom meals"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-600 mt-2">Personalized meals for every stage of life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
