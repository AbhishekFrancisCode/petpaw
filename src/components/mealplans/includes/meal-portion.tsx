import React from "react";
import dogmeadium from "../../../../public/images/img/dog-small.png";
import dogsmall from "../../../../public/images/img/dog-meadium.png";
import doglarge from "../../../../public/images/img/dog-large.png";
import Image from "next/image";

const CardWithHalfAvatar = () => {
  const data = [1, 2, 3];
  const dogSizes = [
    {
      size: "Small Dog",
      weight: "5 to 10 kgs",
      price: "Rs. 100",
      image: dogsmall
    },
    {
      size: "Medium Dog",
      weight: "10 - 25 kgs",
      price: "Rs. 210",
      image: dogmeadium
    },
    {
      size: "Large Dog",
      weight: "25 Kgs & above",
      price: "Rs. 300",
      image: doglarge
    }
  ];
  return (
    <div className="flex flex-col min-h-[600px]">
      <h1 className="text-3xl font-semibold text-center mb-4">Meal Portion Size</h1>
      <p className="text-center text-gray-700 mb-8"></p>
      <div className="flex sm:flex-col md:flex-row justify-center items-center min-h-[500px] p-4 gap-6">
        {dogSizes.map((e: any) => (
          <div key={e} className="relative w-full max-w-sm">
            {/* Card content */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col place-content-center">
              {/* Avatar that's exactly half outside the card */}

              <div className="w-48 h-48 mx-auto">
                <Image src={e.image} alt="User avatar" className="w-full h-full" />
              </div>

              <div className="text-center mb-4 mt-2">
                <h3 className="text-xl font-medium text-gray-800">{e.size}</h3>
                <p className="text-gray-600">{e.weight}</p>
              </div>

              <div className="text-gray-700 mb-6 text-center">
                <p>{e.price}</p>
              </div>

              <div className="flex justify-center">
                <button className="bg-[#EE9422] hover:bg-gray-300 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  View Meal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWithHalfAvatar;
