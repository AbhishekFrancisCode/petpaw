import { Metadata } from "next";
import { TITLES } from "@/constants/title-constants";
import HeroSection from "@/components/home/hero-section";
import Section_type_1 from "@/components/home/section-1";
import Section_type_3 from "@/components/home/section-3";
import Section_type_5 from "@/components/home/section-5";
import Section_type_7 from "@/components/home/section-7";
import Section_type_2 from "@/components/home/section-2";
import Section_type_6 from "@/components/home/section-6";
import NewsLetter from "@/components/home/section-8";
import BlogPosts from "@/components/blog/blog";
import CardWithHalfAvatar from "@/components/mealplans/includes/meal-portion";
import MealPortionSize from "@/components/home/section-4";
import { BlogPage } from "@/components/blog/blog-1";

export const metadata: Metadata = {
  title: TITLES.home
};

export default function Landing() {
  return (
    <main className="container mx-auto flex flex-col">
      <HeroSection />
      <Section_type_1 />
      <Section_type_2 />
      {/* <Section_type_3 /> */}
      <MealPortionSize isMealplanPage={false} />
      <Section_type_7 />
      {/* <Section_type_6 /> */}
      <BlogPage />
      <Section_type_5 />
      <NewsLetter />
    </main>
  );
}
