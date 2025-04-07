"use client";

import { 
  type ElementType,
  type ButtonHTMLAttributes, 
  type ReactNode,
} from "react";

import { 
  type Sizes, 
  type Variants, 
} from "@/types/styles";

import Link from "next/link";
import clsx from "clsx";

import { SIZE_VARIANTS } from "@/lib/constants/styles";
import { NextIcon } from "@/components/atoms/next-icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: {
    color?: Variants;
    type?: "solid" | "ghost" | "text" | "outline" | "soft";
  };
  size?: Sizes;
  className?: string;
  children?: ReactNode;
  iconRight?: string;
  iconLeft?: string;
  loading?: boolean
  hideChildren?: Sizes | "none";
  href?: string;
  contentBetween?: boolean;
};

const buttonVariant: {
  [K in Required<NonNullable<ButtonProps["variant"]>>["color"]]: {
    [T in Required<NonNullable<ButtonProps["variant"]>>["type"]]: string;
  };
} = {
  primary: {
    solid: `
      text-primary-contrast
      bg-primary hover:bg-primary-hover active:bg-primary-active
      focus-visible:outline-primary-50
    `,
    outline: `
      text-primary
      hover:bg-primary-10 active:bg-primary-20
      focus-visible:outline-primary-50
      border border-solid border-primary-20
    `,
    ghost: `
      text-primary hover:text-primary-contrast
      focus-visible:outline-primary-30
      hover:bg-primary
    `,
    text: `
      text-primary !px-0 !h-fit
      focus-visible:outline-primary-50
    `,
    soft: `
    text-yellow-600
    bg-primary-10 hover:bg-primary-20
    active:bg-primary-30
    border border-solid border-primary-20
    focus-visible:outline-primary-50
  `,
  },
  secondary: {
    solid: `
      text-white
      bg-secondary hover:bg-secondary-hover active:bg-secondary-active
      focus-visible:outline-secondary-50
    `,
    outline: `
      text-secondary
      hover:bg-secondary-10 active:bg-secondary-20
      focus-visible:outline-secondary-50
      border border-solid border-secondary-20
      `,
    ghost: `
      text-secondary
      hover:bg-secondary-10
      focus-visible:outline-secondary-50
      `,
    text: `
      text-secondary !px-0 !h-fit
      focus-visible:outline-secondary-50
      `,
    soft: `
      text-secondary
      bg-secondary-10 hover:bg-secondary-20
      border border-solid border-secondary-20
      active:bg-secondary-30
      focus-visible:outline-secondary-50
    `,
  },
  black: {
    solid: `
      text-white
      bg-black hover:bg-neutral-900 active:bg-neutral-800
      focus-visible:outline-black/50
    `,
    outline: `
      text-black
      hover:bg-black/20 active:bg-black/30
      focus-visible:outline-black/50
      border border-solid border-black/20
    `,
    ghost: `
      text-black hover:text-white
      focus-visible:outline-black/50
      hover:bg-black
    `,
    text: `
      text-black !px-0 !h-fit
      focus-visible:outline-black/50
    `,
    soft: `
      text-black
      bg-black/10 hover:bg-black/20
      active:bg-black/30
      border border-solid border-black/20
      focus-visible:outline-black/50
    `,
  },
  white: {
    solid: `
      text-primary-contrast
      bg-white hover:bg-neutral-100 active:bg-neutral-200
      focus-visible:outline-black/10
      border border-solid border-gray-300
    `,
    outline: `
      text-white
      hover:bg-white/20 active:bg-white/30
      focus-visible:outline-black/10
      border border-solid border-white/20
    `,
    ghost: `
      text-white hover:text-primary-contrast
      focus-visible:outline-black/10
      hover:bg-white
      border border-solid border-gray-300
    `,
    text: `
      text-white !px-0 !h-fit
      focus-visible:outline-black/10
    `,
    soft: `
      text-white
      bg-white/10 hover:bg-white/20
      active:bg-white/30
      focus-visible:outline-white/50
    `,
  },
  danger: {
    solid: `
      text-white
      bg-rose-500 hover:bg-rose-600 active:bg-rose-700
      focus-visible:outline-rose-500/50
    `,
    outline: `
      text-rose-500
      hover:bg-rose-500/10 active:bg-rose-500/20
      focus-visible:outline-rose-500/50
      border border-solid border-rose-500/20
    `,
    ghost: `
      text-rose-500
      hover:bg-rose-500/10
      focus-visible:outline-rose-500/50
    `,
    text: `
      text-rose-500 !px-0 !h-fit
      focus-visible:outline-rose-500/50
    `,
    soft: `
      text-rose-500
      bg-rose-500/10 hover:bg-rose-500/20
      border border-solid border-rose-500/20
      active:bg-rose-500/30
      focus-visible:outline-rose-500/50
    `,
  },
  // TODO(Gabriel): Change the new colors
  success: {
    solid: `
      text-white
      bg-rose-500 hover:bg-rose-600 active:bg-rose-700
      focus-visible:outline-rose-500/50
    `,
    outline: `
      text-rose-500
      hover:bg-rose-500/10 active:bg-rose-500/20
      focus-visible:outline-rose-500/50
      border border-solid border-rose-500/20
    `,
    ghost: `
      text-rose-500
      hover:bg-rose-500/10
      focus-visible:outline-rose-500/50
    `,
    text: `
      text-rose-500 !px-0 !h-fit
      focus-visible:outline-rose-500/50
    `,
    soft: `
      text-rose-500
      bg-rose-500/10 hover:bg-rose-500/20
      border border-solid border-rose-500/20
      active:bg-rose-500/30
      focus-visible:outline-rose-500/50
    `,
  },
  warning: {
    solid: `
      text-white
      bg-rose-500 hover:bg-rose-600 active:bg-rose-700
      focus-visible:outline-rose-500/50
    `,
    outline: `
      text-rose-500
      hover:bg-rose-500/10 active:bg-rose-500/20
      focus-visible:outline-rose-500/50
      border border-solid border-rose-500/20
    `,
    ghost: `
      text-rose-500
      hover:bg-rose-500/10
      focus-visible:outline-rose-500/50
    `,
    text: `
      text-rose-500 !px-0 !h-fit
      focus-visible:outline-rose-500/50
    `,
    soft: `
      text-rose-500
      bg-rose-500/10 hover:bg-rose-500/20
      border border-solid border-rose-500/20
      active:bg-rose-500/30
      focus-visible:outline-rose-500/50
    `,
  },
};

const buttonSizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  ...SIZE_VARIANTS,
};

const buttonGaps: Record<NonNullable<ButtonProps["size"]>, string> = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-2",
  lg: "gap-2",
  xl: "gap-3",
};

const buttonWidths: Record<NonNullable<ButtonProps["size"]>, string> = {
  xs: "min-w-7",
  sm: "min-w-8",
  md: "min-w-10",
  lg: "min-w-11",
  xl: "min-w-12",
};

const hideChildrenMap: Record<NonNullable<ButtonProps["hideChildren"]>, string> = {
  none: "",
  xs: "hidden xs:block",
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
  xl: "hidden xl:block",
};

export const Button = ({
  className,
  children,
  variant,
  size = "md",
  iconLeft,
  iconRight,
  hideChildren = "none",
  loading,
  contentBetween,
  ...props 
}: ButtonProps) => {
  const Comp: ElementType = props.href ? Link : "button";
  const disabled = loading === true || props.disabled;
  
  return (
    <Comp
      {...props}
      className={clsx(
        "flex items-center font-medium rounded-md cursor-pointer active:scale-[0.97] active:translate-y-[2px] transition-all duration-150 outline-none focus-visible:outline-[3px] focus-visible:outline-offset-0",
        className,
        buttonVariant[variant?.color ?? "secondary"][variant?.type ?? "solid"],
        buttonSizes[size],
        buttonGaps[size],
        buttonWidths[size],
        !children && "!p-0",
        disabled && "opacity-60 pointer-events-none",
        contentBetween ? "justify-between" : "justify-center",
      )}
      disabled={disabled}
    >
      {iconLeft && (
        <NextIcon
          className={loading ? "animate-spin" : ""}
          name={loading ? "mingcute:loading-fill" : iconLeft} 
          size={size} 
        />
      )}
      { children &&
        <span
          className={clsx(
            "flex items-center", 
            hideChildrenMap[hideChildren],
            buttonGaps[size],
          )}
        >
          {
            loading && !iconLeft && !iconRight
              ? (
                <NextIcon
                  className="animate-spin"
                  name="mingcute:loading-fill"
                  size={size} 
                />
              )
              : children
          }
        </span>
      }
      {iconRight && (
        <NextIcon
          className={!iconLeft && loading ? "animate-spin" : ""}
          name={!iconLeft && loading ? "mingcute:loading-fill" : iconRight} 
          size={size} 
        />
      )}
    </Comp>
  );
};
