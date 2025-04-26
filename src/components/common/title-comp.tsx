import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Helper function to combine classNames with twMerge
const cn = (...inputs: (string | undefined)[]) => {
  return twMerge(inputs.filter(Boolean).join(" "));
};

const titleVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold"
    },
    textStyle: {
      default: "",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      muted: "text-muted-foreground",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "h1",
    textStyle: "default"
  }
});

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, variant, textStyle, asChild = false, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : variant === "h1"
        ? "h1"
        : variant === "h2"
          ? "h2"
          : variant === "h3"
            ? "h3"
            : "h4";

    return (
      <Comp className={cn(titleVariants({ variant, textStyle }), className)} ref={ref} {...props} />
    );
  }
);
Title.displayName = "Title";

export { Title, titleVariants, cn };
