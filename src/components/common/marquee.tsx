import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const items1 = [
  {
    title: "Freshly Cooked",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-05.png?updatedAt=1751561183700"
  },
  {
    title: "Daily Delivered",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-06.png?updatedAt=1751561183687"
  },
  {
    title: "Freshly Sourced",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-04.png?updatedAt=1751561183645"
  },
  {
    title: "Human Grade",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-08.png?updatedAt=1751561183788"
  },
  {
    title: "Preservative Free",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-09.png?updatedAt=1751561183738"
  },
  {
    title: "Sustainable Packaging",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-01.png?updatedAt=1751561183690"
  },
  {
    title: "Clean Eating",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-02.png?updatedAt=1751561183681"
  },
  {
    title: "Wholesome",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-03.png?updatedAt=1751561183750"
  },
  {
    title: "Natural Flavor",
    clipArt:
      "https://ik.imagekit.io/funlogic/pawfull/picart_icons/website%20icons-07.png?updatedAt=1751561183733"
  }
];

const items: any[] = [
  items1[0],
  items1[1],
  items1[2],
  items1[3],
  items1[4],
  items1[5],
  items1[6],
  items1[7],
  items1[8],
  items1[0],
  items1[1],
  items1[2],
  items1[3],
  items1[4],
  items1[5],
  items1[6],
  items1[7],
  items1[8],
  items1[0],
  items1[1],
  items1[2],
  items1[3],
  items1[4],
  items1[5],
  items1[6],
  items1[7],
  items1[8],
  items1[0],
  items1[1],
  items1[2],
  items1[3],
  items1[4],
  items1[5],
  items1[6],
  items1[7],
  items1[8],
  items1[0],
  items1[1],
  items1[2],
  items1[3],
  items1[4],
  items1[5],
  items1[6],
  items1[7],
  items1[8]
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden w-full h-24 flex items-center bg-transparent">
      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }} // Start from the initial position
        animate={{ x: "-100%" }} // Move one full width to the left
        transition={{
          duration: 200, // Adjust duration for smoothness
          repeat: Infinity, // Loop infinitely
          ease: "linear" // Constant speed
        }}
      >
        {/* Render items twice for seamless looping */}
        {items.concat(items).map((item, index) => (
          <div className="flex items-center justify-center gap-2" key={index}>
            <div className="rounded-full w-24 h-24 md:w-28 md:h-28 overflow-hidden flex items-center justify-center">
              <img src={item.clipArt} className="w-full h-full object-cover" alt={item.title} />
            </div>
            <div className="text-black font-normal text-left py-2 min-w-40">
              {item.title.toUpperCase()}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
