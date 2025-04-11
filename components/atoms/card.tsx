import { ReactNode } from "react";

import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card ({
  className, 
  children,
  ...props 
}: CardProps) {
  return (
    <div className={clsx(
      "w-full h-full flex-1",
    )}>
      <div
        className={clsx(
          "bg-white border border-gray-300 rounded-2xl",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}