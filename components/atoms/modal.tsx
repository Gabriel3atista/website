"use client";

import { Dialog } from "radix-ui";
import { AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ModalProps {
  children: ReactNode;
  content: ReactNode;
  defaultOpen?: boolean;
};

interface ModalAnimationWrapperProps {
  children: ReactNode;
}

const isMobile = window.innerWidth < 768;
  
const mobileAnimation = {
  initial: {
    x: "-50%",
    y: "100%" 
  },
  animate: { 
    x: "-50%",
    y: "0%",
    transition: { 
      duration: 0.25 
    } 
  },
  exit: { 
    x: "-50%",
    y: "100%",
    transition: { 
      duration: 0.25
    } 
  }
};

const desktopAnimation = {
  initial: { 
    opacity: 0, 
    scale: 0.9,
    x: "-50%",
    y: "-50%",
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    x: "-50%",
    y: "-50%",
    transition: { 
      duration: 0.15
    } 
  },
  exit: { 
    opacity: 0,
    x: "-50%",
    y: "-50%",
    transition: { 
      duration: 0.15
    } 
  }
};

function ModalAnimationWrapper({ children }: ModalAnimationWrapperProps) {
  const animation = isMobile ? mobileAnimation : desktopAnimation;

  return (
    <motion.div
      className={clsx(
        "fixed",
        isMobile ? "w-full bottom-0 left-1/2 -translate-x-1/2" : "w-min top-1/2 left-1/2" 
      )}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
    >
      {children}
    </motion.div>
  );
}

export function Modal({ content, children, defaultOpen = false, ...props }: ModalProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <Dialog.Root 
      open={isOpen} 
      onOpenChange={setIsOpen}
      {...props}
    >
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Backdrop/Overlay Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-[2px]"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </motion.div>
            
            {/* Wrapper que aplica as animações enquanto preserva o conteúdo original */}
            <ModalAnimationWrapper>
              {content}
            </ModalAnimationWrapper>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};