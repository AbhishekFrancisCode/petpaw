"use client";
import React, { useState } from "react";
import { Title } from "../common/title-comp";
import { ChevronDown } from "lucide-react";
import Heading from "@/sb-ui/h1/h1";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  items,
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`bg-transparent py-4 mx-4 md:mx-auto  ${className}`}>
      <div className="pt-8 md:p-8 max-w-7xl mx-auto">
        {title && <Heading text={title} cls={`text-[${"#028391"}] pb-4`} />}
        <div className="space-y-4">
          {items.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:shadow-[#028391]/10 hover:border-[#028391]/20 transition-all duration-300 transform hover:scale-[1.01] ${
                openIndex === index ? "border-[#028391]/30" : ""
              }`}
            >
              <button
                className={`w-full flex justify-between items-center p-4 bg-white text-left text-lg font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#028391]/20 ${
                  openIndex !== index ? "hover:bg-[#028391]/5" : ""
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`text-gray-800 font-semibold ${openIndex === index ? "text-[#028391]" : ""}`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#028391] transition-all duration-300 ${
                    openIndex === index ? "rotate-180 transform scale-110" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`p-4 transition-colors duration-300 ${
                      openIndex === index ? "bg-[#028391]/5" : "bg-transparent"
                    }`}
                  >
                    {typeof faq.answer === "string" ? (
                      <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
