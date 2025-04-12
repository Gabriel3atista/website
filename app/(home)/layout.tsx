import "@/app/tailwind.css";
import "@/styles/globals.scss";
import "@/styles/gradient-blur.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import clsx from "clsx";

import { AppHeader } from "@/components/core/app-header";
import { Container } from "@/components/core/container";
import { AppFooter } from "@/components/core/app-footer";

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
        <Container className="flex-1 flex flex-col px-2 md:px-4">
          <div className="flex-1 h-full border-x border-gray-300">
            <AppHeader />
            <main className="flex-1 w-full">
              {children}
            </main>
            <AppFooter />
          </div>
        </Container>
      </body>
    </html>
  );
}
