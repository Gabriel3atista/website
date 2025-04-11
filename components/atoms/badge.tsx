import { type Variants } from "@/types/styles";
import { type HTMLAttributes, type ReactNode } from "react";

import clsx from "clsx";

import { NextIcon } from "@/components/atoms/next-icon";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  iconLeft?: string;
  iconRight?: string;
  variant?: Variants;
  className?: string;
}

const chipVariant: Record<Variants, string> = {
  white: "text-white bg-white/10 border-white/20",
  black: "text-black bg-black/10 border-black/20",
  red: "text-rose-500 bg-rose-500/10 border-rose-500/20",
  green: "text-emerald-600 bg-emerald-600/10 border-emerald-600/20",
  yellow: "text-amber-600 bg-amber-600/10 border-amber-600/20",
  blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
};

export function Badge({
  variant = "blue",
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}: ChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex text-xs uppercase py-1 border font-medium rounded-full",
        (iconLeft && !iconRight) && "pl-1 pr-2",
        (iconRight && !iconLeft) && "pl-2 pr-1",
        (iconLeft && iconRight) && "px-1",
        (!iconLeft && !iconRight) && "px-2",
        chipVariant[variant],
        className,
      )}
      {...props}
    >
      <div className="flex gap-1 items-center justify-center">
        {iconLeft && <NextIcon name={iconLeft} size="xs" />}
        <p>{children}</p>
        {iconRight && <NextIcon name={iconRight} size="xs" />}
      </div>
    </span>
  );
}