import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  heading: string;
  detail: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  heading,
  detail,
  children,
  isOpen,
  onToggle
}) => {
  return (
    <div
      className={`${isOpen ? "rounded-xl" : "rounded-full"} mb-2 overflow-hidden min-w-[500px] max-w-[500px]`}
    >
      <div className="flex justify-between p-2 items-center bg-white">
        <h3 className="pl-6 text-xl font-light">{heading}</h3>
        <button
          className="size-13 rounded-full text-left bg-[#dad0b7]"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className="flex justify-between items-center w-full p-4">
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown className="h-5 w-5 text-gray-600" />
            </motion.div>
          </div>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            // className="border-t border-gray-200"
          >
            <div className="p-4 bg-white">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    id: string;
    heading: string;
    detail: string;
    content: React.ReactNode;
  }>;
  defaultOpenId?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId = "" }) => {
  // Only one accordion can be open at a time
  const [openItemId, setOpenItemId] = useState<string>(defaultOpenId);

  const handleToggle = (id: string) => {
    setOpenItemId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          heading={item.heading}
          detail={item.detail}
          isOpen={openItemId === item.id}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
