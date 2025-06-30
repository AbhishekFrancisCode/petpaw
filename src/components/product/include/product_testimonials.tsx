import Testimonials, { Card } from "@/components/common/testimonial";
import Heading from "@/sb-ui/h1/h1";
import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  discount?: {
    amount: number;
    tooltip?: string;
  };
}

const ProductTestimonials = () => {
  const cards: Card[] = [
    {
      title: "Jack",
      content: "Short content card",
      color: "bg-[#f5f3ee]",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Chris Rayan",
      content:
        "Medium length content with some extra text to show how it handles longer content blocks.",
      color: "bg-[#f5f3ee]",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Preethi",
      content: "Another short card",
      color: "bg-purple-500",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Riya Ashely",
      content:
        "This card has a bit more content to display and show how the grid handles different heights.",
      color: "bg-red-500",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Aaron",
      content: "Short and sweet",
      color: "bg-yellow-500",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Divya",
      content: "The final card with normal content length",
      color: "bg-indigo-500",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Robin",
      content:
        "This card has a bit more content to display and show how the grid handles different heights, This card has a bit more content to display and show how the grid handles different heights.",
      color: "bg-red-500",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Anto",
      content: "Short and sweet",
      color: "bg-yellow-500",
      petInfo: "4-year-old Golden Retriever"
    },
    {
      title: "Francis",
      content: "The final card with normal content length",
      color: "bg-indigo-500",
      petInfo: "4-year-old Golden Retriever"
    }
  ];

  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-4">
      <Heading text={"Real reviews about Pawtful's meal plans"} cls={`text-[#028391] pt-4`} />
      <p className="text-sm text-center text-[#999999] ">See what real customers are saying</p>
      <Testimonials cards={cards} />
    </div>
  );
};

export default ProductTestimonials;
