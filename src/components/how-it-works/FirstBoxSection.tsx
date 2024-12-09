import React from "react";
import Image from "next/image";
import firstBox1 from '../../../public/images/howItWorks/firstBox/firstBoxImage1.webp'



const FirstBoxDetails = () => {
  const sections = [
    {
      title: "DELICIOUS FOOD",
      description: "All recipes arrive ready to serve or store.",
      imgAlt: "Delicious food packages",
      // imgSrc: "/public/images/howItWorks/firstBox/firstBoxImage1.webp", // Replace with your image path
    },
    {
      title: "DIGITAL FEEDING GUIDE",
      description: "Custom instructions ensure a smooth transition and easy feeding.",
      imgAlt: "Digital feeding guide on phones",
      // imgSrc: "/public/images/howItWorks/firstBox/firstBoxImage2.webp", // Replace with your image path
    },
    {
      title: "WELCOME KIT",
      description: "A special scoop and Puptainer to make serving and storing Ollie a breeze.",
      imgAlt: "Welcome kit with scoop and container",
      // imgSrc: "/public/images/howItWorks/firstBox/firstBoxImage3.webp", // Replace with your image path
    },
    {
      title: "HEALTH SCREENINGS",
      description:
        "Free and informative digestion, dental, and weight screenings from our experts.",
      imgAlt: "Health screening information on phone",
      // imgSrc: "/public/images/howItWorks/firstBox/firstBoxImage4.webp", // Replace with your image path
    },
  ];

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What new members get with their first box
      </h2>

      {/* Sections */}
      <div className="flex flex-wrap justify-center gap-8">
        {sections.map((section, index) => (
          <div key={index} className="max-w-xs text-center">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={firstBox1}
                alt={section.imgAlt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-600 text-sm">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBoxDetails;
