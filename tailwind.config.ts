import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        // body
        body: "var(--color-body)",
        // Text
        light: "var(--text-light)",
        dark: "var(--text-dark)",
        link: "var(--text-link)",
        // Primary
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-active": "var(--color-primary-active)",
        "primary-contrast": "var(--color-primary-contrast)",
        "primary-50": "var(--color-primary-50)",
        "primary-40": "var(--color-primary-40)",
        "primary-30": "var(--color-primary-30)",
        "primary-20": "var(--color-primary-20)",
        "primary-10": "var(--color-primary-10)",
        // Secondary
        secondary: "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",
        "secondary-active": "var(--color-secondary-active)",
        "secondary-50": "var(--color-secondary-50)",
        "secondary-40": "var(--color-secondary-40)",
        "secondary-30": "var(--color-secondary-30)",
        "secondary-20": "var(--color-secondary-20)",
        "secondary-10": "var(--color-secondary-10)",
        // Tertiary
        tertiary: "var(--color-tertiary)",
      },
      screens: {
        xs: "544px",
        "2xs": "448px",
        "3xs": "352px",
      }
    },
  },
  safelist: [
    {
      pattern: /text-.+/,
      variants: ["xs", "sm", "base", "lg", "xl"],
    },
    {
      pattern: /h-.+/,
      variants: ["7", "8", "10", "11", "12"],
    },
    {
      pattern: /px-.+/,
      variants: ["2", "2.5", "3", "3.5", "4"],
    },
    {
      pattern: /gap-.+/,
      variants: ["1", "2", "3"],
    },
  ],
  plugins: [],
} satisfies Config;
