import { type HTMLAttributes } from "react";
import clsx from "clsx";

export function Hr ({
  ...props 
}: HTMLAttributes<HTMLHRElement>) {
  return (
    <hr 
      className={clsx(
        "border-none h-[1px] bg-gray-300",
      )} 
      {...props} 
    />
  );
}