import { motion } from "framer-motion";
import React from "react";

const items: string[] = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5"
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden w-full h-24 flex items-center max-h-28 min-h-28 bg-green-100">
      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }} // Start from the initial position
        animate={{ x: "-100%" }} // Move one full width to the left
        transition={{
          duration: 80, // Adjust duration for smoothness
          repeat: Infinity, // Loop infinitely
          ease: "linear" // Constant speed
        }}
      >
        {/* Render items twice for seamless looping */}
        {items.concat(items).map((item, index) => (
          <div key={index} className="text-black font-semibold text-center py-2 px-4 min-w-40">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
