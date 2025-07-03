import { twMerge } from "tailwind-merge";

interface HeadingProps {
  text: string;
  cls?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({ text, cls, as = "h1" }: HeadingProps) {
  const baseClasses =
    "text-[1.7rem] md:text-[2.4rem] font-medium text-[#EE9422] flex items-center justify-center text-center leading-[1.7rem] md:leading-[2rem]";
  const mergedClasses = twMerge(baseClasses, cls);

  const Component = as;
  return <Component className={mergedClasses}>{text}</Component>;
}
