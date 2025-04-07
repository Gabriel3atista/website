import clsx from "clsx";
import { type ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container ({ className, children }: ContainerProps) {
  return (
    <div className={clsx("w-full h-full max-w-6xl mx-auto", className)}>
      { children }
    </div>
  );
}