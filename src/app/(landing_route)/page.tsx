import { Metadata } from "next";
import { TITLES } from "@/constants/title-constants";
import HeroSection from "@/components/home/hero-section";
import ImmigrationSection from "@/components/home/immigration-section";
import EventSection from "@/components/event/upcoming";

export const metadata: Metadata = {
  title: TITLES.home
};

export default function Landing() {
  return (
    <main>
      <div>
        <HeroSection />
        {/* <ImmigrationSection/>
        <EventSection/> */}
      </div>
    </main>
  );
}
