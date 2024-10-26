import useMediaQuery from "./use_mediaquery";

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 */
export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery("(max-width: 768px)"),
    // isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
    // isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    // isLg: useMediaQuery("(min-width: 1025px) and (max-width: 1280px)"),
    // isXl: useMediaQuery("(min-width: 1281px) and (max-width: 1536px)"),
    isXx: useMediaQuery("(min-width: 769px)")
    // active: "xs",
  };
  if (breakpoints.isXs) breakpoints.active = "xs";
  // if (breakpoints.isSm) breakpoints.active = "sm";
  // if (breakpoints.isMd) breakpoints.active = "md";
  // if (breakpoints.isLg) breakpoints.active = "lg";
  // if (breakpoints.isXl) breakpoints.active = "xl";
  if (breakpoints.isXx) breakpoints.active = "xx";
  return breakpoints;
}
