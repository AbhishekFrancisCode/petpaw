import { Metadata } from "next";
import { TITLES } from "@/constants/title-constants";
import Faq from "@/components/how-it-works/Faq";
import FirstBoxDetails from "@/components/how-it-works/FirstBoxSection";
import Header from "@/components/how-it-works/Header";
import NutritionSection from "@/components/how-it-works/NutritionSection";
import StepSection from "@/components/how-it-works/StepSection";
import SubscriptionSection from "@/components/how-it-works/Subscribption";

export const metadata: Metadata = {
  title: TITLES.howitworks
};

export default function HowItWorksPage() {
  return (
    <div>
      <Header />
      <StepSection />
      <NutritionSection />
      <FirstBoxDetails />
      <SubscriptionSection />
      <Faq />
    </div>
  );
}
