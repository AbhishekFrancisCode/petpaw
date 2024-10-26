"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterEffectTxt() {
  return (
    <Typewriter
      options={{
        strings: [
          "#ActionableConversations",
          "#UniqueInsights",
          "#LeaderConnect",
          "#CollectiveWisdom"
        ],
        autoStart: true,
        loop: true
      }}
    />
  );
}
