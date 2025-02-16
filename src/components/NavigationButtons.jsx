import React from 'react';
import { motion } from 'framer-motion';

export default function NavigationButtons({ goToPrevious, goToNext, disablePrevious, disableNext, currentSlide, totalSlides }) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="relative mt-12 space-y-6">
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute h-full bg-nebula-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
      
      <div className="flex justify-between items-center gap-6">
        <motion.button
          onClick={goToPrevious}
          disabled={disablePrevious}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gray-800 rounded-xl font-display text-lg flex items-center gap-2 disabled:opacity-50"
        >
          <span className="text-2xl">←</span>
          <span className="bg-gradient-to-r from-cosmic-100 to-white bg-clip-text text-transparent">
            Previous
          </span>
        </motion.button>

        <motion.button
          onClick={goToNext}
          disabled={disableNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-nebula-500 rounded-xl font-display text-lg flex items-center gap-2 disabled:opacity-50"
        >
          <span className="bg-gradient-to-br from-white to-cosmic-100 bg-clip-text text-transparent">
            Next
          </span>
          <span className="text-2xl">→</span>
        </motion.button>
      </div>
    </div>
  );
}