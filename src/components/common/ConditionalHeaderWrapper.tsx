"use client";
import { usePathname } from "next/navigation";
import StickyHeaderWrapper from "./StickyHeaderWrapper";

export default function ConditionalHeaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current route is an onboarding route
  const isOnboardingRoute = pathname.startsWith('/onboarding');

  if (isOnboardingRoute) {
    // For onboarding routes, render children without StickyHeaderWrapper
    return <>{children}</>;
  }

  // For all other routes, render with StickyHeaderWrapper
  return <StickyHeaderWrapper>{children}</StickyHeaderWrapper>;
}