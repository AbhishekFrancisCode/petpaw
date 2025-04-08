"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How is OlPawtful made?",
      answer:
        "Short answer: with a whole lotta love. Longer answer: We started by working with a veterinary nutritionist who helped us formulate our balanced and complete, human-grade recipes, abiding by the AAFCO standards. Then we carefully sourced our ingredients (more on this below), cook them at low temperatures in small batches at our facility in Minnesota, and hand-pack them. We personally know the people who are making the food—and our dogs can attest to how delicious it is."
    },
    {
      question: "Where are the ingredients sourced from?",
      answer:
        "Our ingredients are sourced from trusted suppliers with a focus on quality and sustainability."
    },
    {
      question: "When is it shipped?",
      answer: "We ship your orders every week on the same day to ensure freshness."
    },
    {
      question: "When am I charged?",
      answer: "You'll be charged at the time of your order confirmation."
    },
    {
      question: "What if I'm not home when it's delivered?",
      answer:
        "Our packaging is designed to keep the food fresh for several hours, even if you're not home."
    },
    {
      question: "How long will the food stay fresh after it's delivered?",
      answer: "The food will stay fresh for 24-48 hours if kept in the original packaging."
    },
    {
      question: "What if I don't have enough room in my fridge to store the trays?",
      answer: "You can portion the trays into smaller containers or freeze the trays for later use."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-transprent py-12">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">FAQ's</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl overflow-hidden bg-white">
              <button
                className="w-full flex justify-between items-center p-4 bg-white text-left text-sm font-semibold hover:bg-orange-100 rounded-md transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 text-xs ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`transition-all duration-400 ease-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100 p-4 bg-gray-50"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
