import useBreakpoints from "./use_breakpoints";

export default function Breakpoint({ at, children }) {
  if (!at) {
    console.error("<Breakpoint>: must specify a breakpoint for the `at` prop.");
  }
  const { active } = useBreakpoints();
  return active === at ? children : null;
}
