"use client";
import React from "react";
import FAQ from "@/components/how-it-works/Faq";
import { faqData } from "@/faq-data/FAQ-faq-data";

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <FAQ items={faqData} />
    </div>
  );
}
