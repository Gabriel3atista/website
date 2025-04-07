import { Dialog } from "radix-ui";

import { NextIcon } from "@/components/atoms/next-icon";

export function ModalTopSubscribers () {
  return (
    <>
      <Dialog.Title className="DialogTitle">Top Inscritos</Dialog.Title>
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
    </>
  );
}