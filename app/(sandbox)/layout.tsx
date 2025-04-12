import "@/app/tailwind.css";
import "@/styles/globals.scss";
import "@/styles/gradient-blur.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import clsx from "clsx";

const geist = Geist({
  variable: "--font-geist-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Batista",
  description: "A Software Engineer from Curitiba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={clsx(
          `${geist.variable} antialiased tracking-tight flex flex-col w-full h-full min-h-svh`,
        )}
      >
        <main className="flex-1 flex items-center justify-center w-full h-full bg-slate-200">
          {children}
        </main>
      </body>
    </html>
  );
}
