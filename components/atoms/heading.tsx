import { 
  type ComponentPropsWithoutRef,
  type ReactNode 
} from "react";

import clsx from "clsx";
import { Sizes } from "@/types/styles";

interface HeadingProps extends ComponentPropsWithoutRef<"h1">  {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  color?: "primary" | "secondary" | "black" | "white"
  size?: Sizes;
  className?: string;
};

const headingColor: Record<NonNullable<HeadingProps["color"]>, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  black: "text-gray-800",
  white: "text-white",
};

const headingSize: Record<NonNullable<HeadingProps["size"]>, string> = {
  xs: "text-base md:text-md",
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl",
  xl: "text-3xl md:text-4xl",
};

export function Heading ({ 
  level = "h2", 
  size = "md",
  color = "black",
  className, 
  children, 
  ...props 
}: HeadingProps) {
  const Comp = level;

  return (
    <Comp 
      className={clsx(
        "font-bold",
        headingColor[color], 
        headingSize[size],
        className
      )} 
      {...props}
    >
      {children}
    </Comp>
  );
}