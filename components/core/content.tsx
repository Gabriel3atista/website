import { type ReactNode } from "react";

import { type Sizes } from "@/types/styles";

import clsx from "clsx";

interface ContentProps {
  className?: string;
  children: ReactNode;
  size?: Sizes | "none";
  variant?: "elevated" | "solid" | "default"
}

const contentSizes: Record<NonNullable<ContentProps["size"]>, string> = {
  none: "p-0",
  xs: "p-2",
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
  xl: "p-12",
};

const contentVariants: Record<NonNullable<ContentProps["variant"]>, string> = {
  default: "bg-transparent",
  elevated: "bg-white shadow-md",
  solid: "bg-white"
};

export function Content ({ 
  size = "md",
  variant = "elevated",
  className, 
  children
}: ContentProps) {
  return (
    <div
      className={clsx(
        "rounded-md",
        contentSizes[size],
        contentVariants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}