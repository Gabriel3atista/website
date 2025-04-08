"use client";

import Link from "next/link";
import clsx from "clsx";

import { NextIcon } from "@/components/atoms/next-icon";
import { Button } from "@/components/atoms/button";

export function AppHeader() {
  return (
    <header className="relative w-full h-16 px-4">
      <div className="sticky top-4 w-full h-12 p-px bg-gradient-to-b from-[#DAE0F6] to-[#b1bbdf] rounded-xl overflow-hidden">
        <div className="w-full h-full flex items-center bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#e9ecf5] rounded-[11px]">
          <div className="max-w-6xl flex items-center justify-between mx-auto w-full px-2">
            <div className="flex items-end">
              <span className="leading-none font-semibold text-black">G</span>
              <span className="leading-none font-semibold text-[#9499B2]">B</span>
              <div className="w-1 h-1 mb-[3px] rounded-full bg-[#CDAA71]"></div>
            </div>
            <nav className="block">
              <ul className="flex items-center gap-2 text-white text-sm">
                <li>
                  <Link
                    href="/"
                    className={clsx(
                      "block p-1 text-[#C7CADC] hover:text-[#5F637D] transition-all duration-100",
                    )}
                  >
                    <NextIcon name="mdi:twitter" size="lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={clsx(
                      "block p-1 text-[#C7CADC] hover:text-[#5F637D] transition-all duration-100",
                    )}
                  >
                    <NextIcon name="ant-design:instagram-filled" size="lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={clsx(
                      "block p-1 text-[#C7CADC] hover:text-[#5F637D] transition-all duration-100",
                    )}
                  >
                    <NextIcon name="brandico:linkedin-rect" size="xs" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
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
              href="#"
              iconLeft="tabler:mail-filled"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}