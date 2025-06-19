// components/WhatsAppButton.tsx
"use client";

import React from "react";
import wicon from "../../public/images/icons/whatsapp-icon.png";
import Image from "next/image";
const WhatsAppButton = ({
  phoneNumber = "+917019596309", // International format, no '+'
  message = "Hello! I have a question."
}: {
  phoneNumber?: string;
  message?: string;
}) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const webUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Detect if mobile
    const isMobile =
      typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Try opening WhatsApp app
      const timeout = setTimeout(() => {
        window.open(webUrl, "_blank"); // fallback
      }, 1500);

      window.location.href = appUrl;

      // Clear fallback if app opens
      window.addEventListener("blur", () => {
        clearTimeout(timeout);
      });
    } else {
      // Desktop: open WhatsApp Web directly
      window.open(webUrl, "_blank");
    }
  };

  return (
    <div
      onClick={openWhatsApp}
      className="cursor-pointer bg-[#EE9422] min-w-[200px] h-16 rounded-md px-4 text-[#FFF8EF] hover:opacity-80  flex items-center gap-4 shadow-sm transition duration-200"
    >
      <Image src={wicon} alt="WhatsApp" width={32} height={32} />
      <span className="text-white  font-medium">Chat on WhatsApp</span>
    </div>
  );
};

export default WhatsAppButton;
