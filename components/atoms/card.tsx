import { type Sizes } from "@/types/styles";
import { ReactNode } from "react";

import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  title?: string;
  size?: Extract<Sizes, "sm" | "md">;
  className?: string;
  noPadding?: boolean;
}

const cardSize: Record<NonNullable<CardProps["size"]>, string> = {
  sm: "p-2",
  md: "p-4",
};

export function Card ({ 
  title, 
  size,
  className, 
  children,
  ...props 
}: CardProps) {
  return (
    <div className={clsx(
      "w-full h-full flex-1",
      title && "flex flex-col",
    )}>
      <div
        className={clsx(
          "bg-white border-gray-300",
          size ? cardSize[size] : "p-0",
          title ? "rounded-b-xl border-x border-b" : "border rounded-xl" ,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}