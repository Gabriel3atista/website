"use client";

import Link from "next/link";
import clsx from "clsx";

import { NextIcon } from "@/components/atoms/next-icon";
import { Button } from "@/components/atoms/button";

export function AppHeader() {
  return (
    <>
      <div className="absolute w-full h-32 inset-x-0">
        <div className="gradient-blur z-40">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full h-16 px-4">
        <div className="relative top-4 w-full h-12 p-px bg-gradient-to-b from-[#DAE0F6] to-[#b1bbdf] rounded-xl overflow-hidden">
          <div className="w-full h-full flex items-center bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#e9ecf5] rounded-[11px]">
            <div className="max-w-6xl flex items-center justify-between mx-auto w-full px-2">
              <div className="flex items-end gap-[1px]">
                <span className="leading-none font-semibold text-black">G</span>
                <span className="leading-none font-semibold text-[#9499B2]">B</span>
                <div className="w-1 h-1 mb-[3px] rounded-full bg-[#bb9d6d]"></div>
              </div>
              <nav className="block">
                <ul className="flex items-center gap-2 xs:gap-6 text-white text-sm">
                  <li>
                    <Link
                      href="https://x.com/gabriiel3atista"
                      target="_blank"
                      className={clsx(
                        "block p-1 text-[#C7CADC] hover:text-[#5F637D] transition-all duration-100",
                      )}
                    >
                      <NextIcon name="mdi:twitter" size="lg" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/gabriel3atista/"
                      target="_blank"
                      className={clsx(
                        "block p-1 text-[#C7CADC] hover:text-[#5F637D] transition-all duration-100",
                      )}
                    >
                      <NextIcon name="ant-design:instagram-filled" size="lg" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/gabriel3atista/"
                      target="_blank"
                      className={clsx(
                        "block p-1 text-[#C7CADC] hover:text-[#5F637D] transition-all duration-100",
                      )}
                    >
                      <NextIcon name="brandico:linkedin-rect" size="xs" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Gabriel3atista"
                      target="_blank"
                      className={clsx(
                        "block p-1 text-[#C7CADC] hover:text-[#5F637D] transition-all duration-100",
                      )}
                    >
                      <NextIcon name="mdi:github" size="lg" />
                    </Link>
                  </li>
                </ul>
              </nav>
              <Button
                variant={{ color: "black" }}
                size="sm"
                href="mailto:gabriel3atista@gmail.com"
                iconLeft="tabler:mail-filled"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}