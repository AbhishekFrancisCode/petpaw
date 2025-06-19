"use client";
import { usePathname } from "next/navigation";
import StickyHeaderWrapper from "./StickyHeaderWrapper";

export default function ConditionalHeaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOnboardingRoute = pathname.startsWith("/onboarding");
  if (isOnboardingRoute) {
    return <>{children}</>;
  }
  return <StickyHeaderWrapper>{children}</StickyHeaderWrapper>;
}
