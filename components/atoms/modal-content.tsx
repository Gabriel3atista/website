// ModalContent.tsx
"use client";

import { type ReactNode } from "react";
import { Dialog } from "radix-ui";
import { NextIcon } from "@/components/atoms/next-icon";
import clsx from "clsx";

interface ModalContentProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ModalContent({ children, title, className }: ModalContentProps) {
  return (
    <div 
      className={clsx(
        "bg-body rounded-tr-xl rounded-tl-xl md:rounded-xl shadow-md w-full md:w-min overflow-hidden",
        className
      )}
    >
      <div className="absolute py-3 px-4 bg-body w-full rounded-t-xl">
        <Dialog.Title className="text-lg text-secondary font-semibold">
          {title}
        </Dialog.Title>
      </div>
      <Dialog.Close asChild>
        <button className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 transition-all duration-150 cursor-pointer hover:text-black hover:bg-black/10 active:bg-black/20 rounded-lg">
          <NextIcon name="mdi:close" size="xs" />
        </button>
      </Dialog.Close>
      <div className="pt-14 h-full">
        {children}
      </div>
    </div>
  );
}