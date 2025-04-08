import { useRouter } from "next/navigation";
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

const HowItWorks = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "INTRODUCE US TO YOUR PUP",
      description:
        "We've distilled our quiz down to the essential questions so you can spend less time online and more time playing fetch."
    },
    {
      number: 2,
      title: "GET YOUR STARTER BOX",
      description:
        "Your starter box contains two weeks of food and the tools you need for easy serving at",
      discount: {
        amount: 60,
        tooltip: "Limited time offer"
      }
    },
    {
      number: 3,
      title: "REAL FOOD, REGULARLY DELIVERED",
      description:
        "No more last-minute trips to the pet store — we deliver your pup's meals to your door on your schedule."
    }
  ];

  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/onboarding`);
  };

  return (
    <div className="flex flex-col gap-6 mx-auto place-content-center md:max-h-96 min-w-full bg-[#f5f3ee] rounded-3xl py-8">
      <h1 className="text-3xl text-[#999999] md:text-4xl font-normal text-center md:max-h-16">
        How Pawtful Works
      </h1>

      <div className="grid md:grid-cols-3 gap-8 md:max-h-52">
        {steps.map((step) => (
          <div key={step.number} className="text-center px-4">
            <div
              className={`
                w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl 
                ${step.number === 1 ? "bg-[#506D54]" : ""}
                ${step.number === 2 ? "bg-[#9E6B5D]" : ""}
                ${step.number === 3 ? "bg-[#5D5650]" : ""}
              `}
            >
              <span className="text-white text-xl">{step.number}</span>
            </div>

            <h3 className="text-[#999999] font-medium mb-4 text-sm tracking-wider">{step.title}</h3>

            <p className="text-sm leading-relaxed text-gray-700 px-12">
              {step.description}
              {step.discount && (
                <span className="inline-flex items-center ml-1">
                  <span className="font-medium">{step.discount.amount}% OFF</span>
                  {step.discount.tooltip && (
                    <span
                      className="ml-1 w-4 h-4 rounded-full bg-gray-200 text-[#999999] text-xs flex items-center justify-center cursor-help"
                      title={step.discount.tooltip}
                    >
                      ?
                    </span>
                  )}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleNavigate}
          className="bg-[#028391] min-w-[200px] h-16 rounded-md px-10 text-[#ffffff] hover:opacity-80 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
