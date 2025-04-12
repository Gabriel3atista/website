"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ArrowSlide() {
  const [sliderItems] = useState(["arrow-1", "arrow-2"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderItems.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [sliderItems.length]);
  
  return (
    <div className="flex flex-col gap-16">
      <div 
        className="flex items-center justify-center w-48 h-48 bg-white border border-dashed border-gray-400 rounded-xl"
      >
        <div 
          className="relative w-10 h-10 bg-red-300 flex items-center justify-center rounded-full overflow-hidden"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={sliderItems[currentIndex]}
              className="absolute w-4 h-4 bg-blue-500 rounded flex items-center justify-center text-white text-xs"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              exit={{ x: 50}}
              transition={{ 
                duration: 0.3,
              }}
            >
              {currentIndex + 1}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}