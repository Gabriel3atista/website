import { type Sizes } from "@/types/styles";

// Patterns for Buttons and Inputs

export const SIZES: {
  text: Record<Sizes, string>;
  padding: Record<Sizes, string>;
  height: Record<Sizes, string>;
} = {
  text: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
    xl: "text-base",
  },
  padding: {
    xs: "px-2",
    sm: "px-2.5",
    md: "px-3",
    lg: "px-3.5",
    xl: "px-4",
  },
  height: {
    xs: "h-7",
    sm: "h-8",
    md: "h-10",
    lg: "h-11",
    xl: "h-12",
  },
};

export const SIZE_VARIANTS = {
  xs: `${SIZES.text["xs"]} ${SIZES.padding["xs"]} ${SIZES.height["xs"]}`,
  sm: `${SIZES.text["sm"]} ${SIZES.padding["sm"]} ${SIZES.height["sm"]}`,
  md: `${SIZES.text["md"]} ${SIZES.padding["md"]} ${SIZES.height["md"]}`,
  lg: `${SIZES.text["lg"]} ${SIZES.padding["lg"]} ${SIZES.height["lg"]}`,
  xl: `${SIZES.text["xl"]} ${SIZES.padding["xl"]} ${SIZES.height["xl"]}`,
};