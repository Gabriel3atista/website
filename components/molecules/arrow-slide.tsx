"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useImperativeHandle, forwardRef } from "react";

import { NextIcon } from "@/components/atoms/next-icon";

export interface ArrowSlideProps {
  triggerAnimation: () => void;
}

export const ArrowSlide = forwardRef<ArrowSlideProps, unknown>((props, ref) => {
  const [sliderItems] = useState(["arrow-1", "arrow-2"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderItems.length);
    }
  };

  useImperativeHandle(ref, () => ({
    triggerAnimation,
  }));

  return (
    <div 
      className="relative w-8 h-8 bg-black flex items-center justify-center rounded-full overflow-hidden"
    >
      <AnimatePresence
        initial={false}
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={sliderItems[currentIndex]}
          className="absolute w-4 h-4 rounded flex items-center justify-center text-white text-xs"
          initial={{ x: -50, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ x: 50, y: -50, opacity: 0 }}
          transition={{ 
            duration: 0.3,
          }}
        >
          <NextIcon name="iconamoon:arrow-top-right-1" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

ArrowSlide.displayName = "ArrowSlide";