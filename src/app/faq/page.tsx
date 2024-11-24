"use client";
import { useRef, useState } from "react";

const data = [
  {
    title: "How do you tailor the recipe to my dog?",
    content:
      "The proprietary algorithm we designed with a board-certified vet nutritionist ensures that your dog is getting the right portion of food, as we calculate the exact number of calories needed based on weight, activity level and body composition \n \n If the changes prompt a new portion recommendation, you will be given the option to save your changes with the new meal plan, or to keep your existing meal plan without making changes."
  },
  {
    title: "Can I choose more than one recipe?",
    content: "Absolutely! You can select up to four of our five Fresh recipes or both Gently Baked recipes for your pup's meal plan. You can even do a mix if you would like!"
  }
];
export default function Faq() {
  const faqRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={faqRef} id="faq" className="container mx-auto px-4 mt-8">
      <div className="text-2xl lg:text-5xl text-black font-medium lg:leading-[67.20px] pt-12 pb-2 lg:pb-4 text-center lg:text-left">
        {"FAQs"}
      </div>
      <div className="pt-6 pb-20">
        {data.map((item, i) => {
          return <Accordion key={i} title={item.title} content={item.content} />;
        })}
      </div>
    </div>
  );
}

interface dataFormProps {
  title: any;
  content: any;
}

const Accordion = ({ title, content }: dataFormProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-white border-t-[1px] border-[#DADADA] pb-4">
      <div className="flex justify-between" onClick={() => setIsActive(!isActive)}>
        <p className="text-base text-[#505050] font-normal pt-6">{title}</p>
        <p className="text-4xl text-[#505050] pt-4 md:pr-2 cursor-pointer">
          {isActive ? "-" : "+"}
        </p>
      </div>
      {isActive && <p className="text-sm text-black font-normal pt-6 max-w-3xl">{content}</p>}
    </div>
  );
};