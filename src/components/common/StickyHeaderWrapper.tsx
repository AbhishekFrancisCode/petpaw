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

  const isOfferBannerEnabled = offerBannerConfig && offerBannerConfig.visible;

  const shouldShowBanner =
    isOfferBannerEnabled &&
    offerBannerConfig.showOnRoutes?.some((route) => pathname.startsWith(route)) &&
    !offerBannerConfig.hideOnRoutes?.some((route) => pathname.startsWith(route));
  const reservedHeight = 90;

  return (
    <>
      <div className="relative">
        {shouldShowBanner && (
          <div ref={bannerRef} id="offer-banner-wrapper">
            <OfferBanner
              text={offerBannerConfig.text}
              link={offerBannerConfig.link}
              linkLabel={offerBannerConfig.linkLabel}
            />
          </div>
        )}
      </div>
      <div
        style={{
          position: isHeaderFixed ? "fixed" : "relative",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50
        }}
      >
        <HeaderBlack isFixed={isHeaderFixed} />
      </div>
      <div style={{ height: reservedHeight }} />
      <div>{children}</div>
    </>
  );
}
