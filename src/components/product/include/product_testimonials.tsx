import Testimonials, { Card } from "@/components/common/testimonial";
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
      title: "Card 1",
      content: "Short content card",
      color: "bg-[#f5f3ee]",
      height: "h-32"
    },
    {
      title: "Card 2",
      content:
        "Medium length content with some extra text to show how it handles longer content blocks.",
      color: "bg-[#f5f3ee]",
      height: "h-48"
    },
    {
      title: "Card 3",
      content: "Another short card",
      color: "bg-purple-500",
      height: "h-32"
    },
    {
      title: "Card 4",
      content:
        "This card has a bit more content to display and show how the grid handles different heights.",
      color: "bg-red-500",
      height: "h-40"
    },
    {
      title: "Card 5",
      content: "Short and sweet",
      color: "bg-yellow-500",
      height: "h-32"
    },
    {
      title: "Card 6",
      content: "The final card with normal content length",
      color: "bg-indigo-500",
      height: "h-36"
    },
    {
      title: "Card 4",
      content:
        "This card has a bit more content to display and show how the grid handles different heights.",
      color: "bg-red-500",
      height: "h-40"
    },
    {
      title: "Card 5",
      content: "Short and sweet",
      color: "bg-yellow-500",
      height: "h-32"
    },
    {
      title: "Card 6",
      content: "The final card with normal content length",
      color: "bg-indigo-500",
      height: "h-36"
    }
  ];

  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-4">
      <p className="text-3xl text-[#999999] md:text-4xl font-normal text-center md:max-h-16">
        Real real reviews about Pawtful's meal plans
      </p>
      <p className="text-sm text-center text-[#999999] ">See what real customers are saying</p>
      <Testimonials cards={cards} />
    </div>
  );
};

export default ProductTestimonials;
