"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import OfferBanner from "@/components/common/offer_strip";
import HeaderBlack from "@/components/common/header_black";
import { offerBannerConfig } from "@/config/offerBannerConfig";

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

  // Check if offer banner config exists and is enabled
  const isOfferBannerEnabled = offerBannerConfig && offerBannerConfig.visible;

  const shouldShowBanner = isOfferBannerEnabled &&
    offerBannerConfig.showOnRoutes?.some((route) => pathname.startsWith(route)) &&
    !(offerBannerConfig.hideOnRoutes?.some((route) => pathname.startsWith(route)));

  return (
    <>
      <div className="relative">
        {shouldShowBanner && (
          <div ref={bannerRef} id="offer-banner-wrapper" className="relative">
            <OfferBanner
              text={offerBannerConfig.text}
              link={offerBannerConfig.link}
              linkLabel={offerBannerConfig.linkLabel}
            />
          </div>
        )}
        <HeaderBlack isFixed={isHeaderFixed} />
      </div>
      <div className={`relative ${shouldShowBanner ? 'mt-[100px]' : 'mt-[80px]'}`}>
        {children}
      </div>
    </>
  );
}