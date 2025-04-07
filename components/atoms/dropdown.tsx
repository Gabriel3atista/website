"use client";

import clsx from "clsx";

import { type ReactNode, useCallback, useState } from "react";
import { Dialog } from "radix-ui";
import { DropdownMenu } from "radix-ui";
import { motion } from "motion/react";

export interface DropdownOptions {
  label: string;
  beforeLabel?: string | ReactNode;
  afterLabel?: string | ReactNode;
  variant?: {
    color: "secondary" | "danger" | "success";
    type: "ghost" | "text" | "solid"
  };
  as?: "item" | "sub" | "checkbox" | "radio";
  subOptions?: DropdownOptions[];
  modal?: ReactNode;
};

export interface DropdownProps {
  options?: DropdownOptions[];
  children: ReactNode;
};

const dropdownOptionsVariants: {
  [K in NonNullable<DropdownOptions["variant"]>["color"]]: {
    [T in NonNullable<DropdownOptions["variant"]>["type"]]: string;
  };
} = {
  secondary: {
    text: "hover:bg-secondary-10 hover:text-secondary",
    ghost: "bg-secondary-10 hover:bg-secondary-20 text-secondary",
    solid: "bg-secondary text-white hover:bg-secondary-hover",
  },
  danger: {
    text: "hover:bg-rose-500/10 hover:text-rose-500",
    ghost: "bg-rose-500/10 hover:bg-rose-500/20 text-rose-500",
    solid: "bg-rose-500 text-white hover:bg-rose-600",
  },
  success: {
    text: "hover:bg-emerald-500/10 hover:text-emerald-600",
    ghost: "bg-emerald-500/10 hover:bg-emerald-500/20",
    solid: "bg-emerald-500 text-white hover:bg-emerald-600",
  }
};

const setDropdownItemVariant = (
  color: NonNullable<DropdownOptions["variant"]>["color"] = "secondary", 
  type: NonNullable<DropdownOptions["variant"]>["type"] = "text"
): string => {
  return dropdownOptionsVariants[color][type];
};

export function Dropdown({ options, children, ...props }: DropdownProps) {
  const renderDropdownItems = useCallback(
    (option: Omit<DropdownOptions, "as" | "subOptions">) => {
      return (
        <DropdownMenu.Item
          key={option.label}
          className={clsx(
            "flex justify-between items-center cursor-default px-2 py-1 rounded-md border-0 focus:outline-none",
            setDropdownItemVariant(option.variant?.color, option.variant?.type)
          )}
        >
          <div className="flex gap-2 items-center">
            {option.beforeLabel}
            {option.label}
          </div>
          {option.afterLabel}
        </DropdownMenu.Item>
      );
    }, []);
  
  const renderDropdownOptions = useCallback(
    (options: DropdownOptions[]) => {
      return options.map((option) => {
        // DropdownMenu.Sub não tem uma função de renderização própria porque causaria um loop nas dependências do useCallback
        if (option.as === "sub" && option.subOptions) {
          return (
            <DropdownMenu.Sub key={option.label}>
              <DropdownMenu.SubTrigger
                className={clsx(
                  "flex justify-between gap-2 items-center cursor-default px-2 py-1 rounded-md border-0 data-[state='open']:bg-secondary-10 data-[state='open']:text-secondary focus:outline-none",
                  setDropdownItemVariant(option.variant?.color, option.variant?.type),
                )}
              >
                <div className="flex gap-2 items-center">
                  {option.beforeLabel}
                  {option.label}
                </div>
                {option.afterLabel}
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="flex flex-col gap-2 bg-white border border-solid border-gray-300 shadow-lg p-2 rounded-md max-h-72 overflow-auto"
                  side="bottom"
                  align="start"
                  sideOffset={5}
                  alignOffset={-5}
                  collisionPadding={10}
                  avoidCollisions
                >
                  {option.subOptions?.length
                    ? renderDropdownOptions(option.subOptions)
                    : <p>Sem itens</p>
                  }
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          );
        }
    
        return renderDropdownItems(option);
      });
    }, [renderDropdownItems]);

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col gap-2 bg-white border border-solid border-gray-300 shadow-md p-2 rounded-md max-h-72 min-w-72 overflow-y-auto" sideOffset={5} avoidCollisions collisionPadding={10}>
          {
            options?.length 
              ? renderDropdownOptions(options) 
              : <p>Sem opções</p>
          }
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function DropdownModal({ options, children, ...props }: DropdownProps) {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const renderDropdownModalItems = useCallback(
    (option: Omit<DropdownOptions, "as" | "subOptions">) => {
      return (
        <Dialog.Trigger key={option.label} asChild>
          <DropdownMenu.Item
            className={clsx(
              "flex justify-between items-center cursor-default px-2 py-1 rounded-md border-0 focus:outline-none",
              setDropdownItemVariant(option.variant?.color, option.variant?.type)
            )}
            onClick={() => setModalContent(option.modal)}
          >
            <div className="flex gap-2 items-center">
              {option.beforeLabel}
              {option.label}
            </div>
            {option.afterLabel}
          </DropdownMenu.Item>
        </Dialog.Trigger>
      );
    },
    []
  );

  const renderDropdownModalOptions = useCallback(
    (options: DropdownOptions[]) => {
      return options.map((option) => {
        // DropdownMenu.Sub não tem uma função de renderização própria porque causaria um loop nas dependências do useCallback
        if (option.as === "sub" && option.subOptions) {
          return (
            <DropdownMenu.Sub key={option.label}>
              <DropdownMenu.SubTrigger
                className={clsx(
                  "flex justify-between gap-2 items-center cursor-default px-2 py-1 rounded-md border-0 data-[state='open']:bg-secondary-10 data-[state='open']:text-secondary focus:outline-none",
                  setDropdownItemVariant(option.variant?.color, option.variant?.type)
                )}
              >
                <div className="flex gap-2 items-center">
                  {option.beforeLabel}
                  {option.label}
                </div>
                {option.afterLabel}
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="flex flex-col gap-2 bg-white border border-solid border-gray-300 shadow-lg p-2 rounded-md max-h-72 overflow-auto"
                  side="bottom"
                  align="start"
                  sideOffset={5}
                  alignOffset={-5}
                  collisionPadding={10}
                  avoidCollisions
                >
                  {option.subOptions?.length
                    ? renderDropdownModalOptions(option.subOptions)
                    : <p>Sem itens</p>
                  }
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          );
        }

        return renderDropdownModalItems(option);
      });
    },
    [renderDropdownModalItems]
  );

  return (
    <Dialog.Root>
      <DropdownMenu.Root {...props}>
        <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content 
            className="flex flex-col gap-2 bg-white border border-solid border-gray-300 shadow-md p-2 rounded-md max-h-72 min-w-72 overflow-y-auto" 
            sideOffset={5} 
            collisionPadding={10}
            avoidCollisions 
          >
            {
              options?.length 
                ? renderDropdownModalOptions(options) 
                : <p>Sem opções</p>
            }
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <Dialog.Portal>
        {modalContent && (
          <>
            <motion.div
              initial={{ 
                opacity: 0,
                backdropFilter: "blur(0px)",
              }}
              animate={{ 
                opacity: 1, 
                backdropFilter: "blur(2px)",
              }}
              transition={{ 
                duration: 0.150,
              }}
              className="fixed inset-0 w-dvw h-dvh bg-black/60"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </motion.div>
            {modalContent}
          </>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}

