"use client";

import { Dialog } from "radix-ui";
import { motion } from "motion/react";

import { NextIcon } from "@/components/atoms/next-icon";

export function ModalSubscribers () {
  return (
    <Dialog.Content>
      <motion.div 
        className="fixed bg-white rounded-tr-xl rounded-tl-xl md:rounded-xl shadow-md bottom-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-full md:w-max md:max-w-[768px] p-4 h-[calc(100dvh-128px)] md:h-min"
        initial={{
          opacity: 0,
        }}
        animate={{ 
          opacity: 1,
        }}
        transition={{ 
          duration: 0.250,
        }}
      >
        <Dialog.Title className="DialogTitle">Inscrições</Dialog.Title>
        <div className="flex gap-4 items-center justify-between">
          <Dialog.Close asChild>
            <button className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 transition-all duration-150 cursor-pointer hover:text-black hover:bg-black/10 active:bg-black/20 rounded">
              <NextIcon name="mdi:close" size="xs" />
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when you&apos;re done.
        </Dialog.Description>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
      </motion.div>
    </Dialog.Content>
  );
}