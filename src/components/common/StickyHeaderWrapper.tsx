"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import OfferBanner from "@/components/common/offer_strip";
import HeaderBlack from "@/components/common/header_black";

export default function StickyHeaderWrapper({ children }: { children: React.ReactNode }) {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const bannerRect = bannerRef.current.getBoundingClientRect();
      setIsHeaderFixed(bannerRect.bottom <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBanner = !pathname.startsWith("/onboarding");

  return (
    <>
      {showBanner && (
        <div ref={bannerRef} id="offer-banner-wrapper">
          <OfferBanner />
        </div>
      )}
      <HeaderBlack isFixed={isHeaderFixed} />
      <div>{children}</div>
    </>
  );
}