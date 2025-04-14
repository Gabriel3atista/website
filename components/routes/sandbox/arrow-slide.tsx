"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { NextIcon } from "@/components/atoms/next-icon";

export function ArrowSlide() {
  const [sliderItems] = useState(["arrow-1", "arrow-2"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleMouseEvent = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderItems.length);
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <div 
        className="flex items-center justify-center w-48 h-48 bg-white border border-dashed border-gray-400 rounded-xl"
        onMouseEnter={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
      >
        <div 
          className="relative w-10 h-10 bg-black flex items-center justify-center rounded-full overflow-hidden"
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
                duration: 1,
              }}
            >
              <NextIcon name="iconamoon:arrow-top-right-1" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}