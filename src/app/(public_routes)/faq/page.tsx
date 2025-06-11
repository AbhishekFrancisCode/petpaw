"use client";
import { Title } from "@/components/common/title-comp";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const data = [
  {
    title: "What makes freshly prepared food for dogs a better option?",
    content:
      "Freshly prepared food is made with real, high-quality ingredients without artificial preservatives or fillers. It’s more nutritious, easier to digest, and supports better overall health."
  },
  {
    title: "Is fresh food suitable for all dog breeds and ages?",
    content:
      "Yes! Our meal plans are tailored to fit dogs of all breeds, sizes, and life stages—from puppies to seniors."
  },
  {
    title: "How do you determine the right portion for my dog?",
    content:
      "Our nutritionists calculate the perfect portion based on your dog’s weight, age, activity level, and any other health needs."
  },
  {
    title: "What ingredients do you use?",
    content:
      "We use high-quality, human-grade meats, fresh vegetables, and food toppers, ensuring your dog gets wholesome nutrition."
  },
  {
    title: "Do you use any preservatives or additives?",
    content:
      "No! Our meals are free from artificial preservatives, fillers, or by-products. They are gently cooked and refrigerated to maintain freshness."
  },
  {
    title: "Can this food help with sensitive stomachs?",
    content:
      "Absolutely! Our recipes are formulated with limited, high-quality ingredients that are easy to digest, making them great for dogs with sensitivities."
  },
  {
    title: "How does the subscription work?",
    content:
      "You choose a meal plan, and we deliver fresh, pre-portioned meals for the day to your doorstep on a daily basis."
  },
  {
    title: "Can I try before subscribing?",
    content:
      "Yes! We offer a trial pack so your pup can taste and test our meals before committing."
  },
  {
    title: "How is the food packaged and delivered?",
    content: "Our meals are packed in leaf packaging."
  },
  {
    title: "What if my dog doesn’t like the food?",
    content:
      "We have multiple recipes and are open to a certain level of customization (Taking off or replacing a certain ingredient)."
  },
  {
    title: "How should I store the food?",
    content:
      "Keep meals refrigerated and take it out 10 minutes before serving. They stay fresh in the fridge for up to 2 days."
  },
  {
    title: "Can I mix fresh food with kibble?",
    content:
      "Yes! If you’re transitioning, you can mix fresh food with kibble before fully switching to a fresh diet."
  },
  {
    title: "How long will the food stay fresh?",
    content: "Our meals stay fresh for up to 4 days in the freezer and 2 days in the fridge."
  }
];
export default function Faq() {
  const faqRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={faqRef} id="faq" className="container mx-auto px-4 mt-8">
      <Title
        variant="h2"
        textStyle="primary"
        className={`text-[#028391] lg:leading-[67.20px] pt-12 pb-2 lg:pb-4 text-center lg:text-left`}
      >
        FAQ's
      </Title>
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
    <div className="bg-white border-t-[1px] border-[#DADADA] px-4 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="text-base text-[#505050] font-normal pt-6">{title}</p>
        <motion.span
          className="text-4xl text-[#505050] pt-4 md:pr-2"
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isActive ? "-" : "+"}
        </motion.span>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-black font-normal pt-4 max-w-3xl">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
