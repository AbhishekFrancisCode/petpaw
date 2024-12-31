"use client";
// import FirstBoxDetails from "@/components/how-it-works/FirstBoxSection";
// import Header from "@/components/how-it-works/Header";

// import NutritionSection from "@/components/how-it-works/NutritionSection";

// import StepSection from "@/components/how-it-works/StepSection";
// import SubscriptionSection from "@/components/how-it-works/Subscribption";
// import Faq from "@/components/how-it-works/Faq";

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen mx-auto bg-[#FFF8EF]">
      <main className="">{children}</main>
    </div>
  );
}
