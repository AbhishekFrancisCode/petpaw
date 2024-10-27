import { Metadata } from "next";
import { TITLES } from "@/constants/title-constants";
import HeroSection from "@/components/home/hero-section";
import Section_type_1 from "@/components/home/section-1";
import Section_type_3 from "@/components/home/section-3";
import Section_type_5 from "@/components/home/section-5";
import Section_type_7 from "@/components/home/section-7";
import Section_type_2 from "@/components/home/section-2";
import Section_type_6 from "@/components/home/section-6";

export const metadata: Metadata = {
  title: TITLES.home
};

export default function Landing() {
  return (
    <main>
      <div>
        <HeroSection />
        <Section_type_1 />
        <Section_type_2 />
        <Section_type_3 />
        <Section_type_5 />
        <Section_type_6 />
        <Section_type_7 />
      </div>
    </main>
  );
}
