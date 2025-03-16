import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function NavigationButtons({ 
  goToPrevious, 
  goToNext, 
  disablePrevious, 
  disableNext, 
  currentSlide, 
  totalSlides 
}) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="relative mt-10 space-y-4">
      {/* Slide indicators */}
      <div className="flex justify-center mb-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-nebula-500 shadow-neon' 
                : 'w-3 bg-gray-700 hover:bg-gray-600'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
        <motion.div
          className="absolute h-full bg-gradient-to-r from-nebula-600 to-nebula-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between items-center gap-6 pt-2">
        <motion.button
          onClick={goToPrevious}
          disabled={disablePrevious}
          whileHover={{ scale: disablePrevious ? 1 : 1.03 }}
          whileTap={{ scale: disablePrevious ? 1 : 0.97 }}
          className="btn-secondary flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeftIcon className="w-5 h-5 text-nebula-300" />
          <span className="text-gradient-cosmic">
            Previous
          </span>
        </motion.button>

        <div className="text-center hidden md:block">
          <span className="text-sm text-gray-400">
            Slide {currentSlide + 1} of {totalSlides}
          </span>
        </div>

        <motion.button
          onClick={goToNext}
          disabled={disableNext}
          whileHover={{ scale: disableNext ? 1 : 1.03 }}
          whileTap={{ scale: disableNext ? 1 : 0.97 }}
          className="btn-primary flex items-center gap-2 cursor-pointer"
        >
          <span className="text-white">
            Next
          </span>
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </motion.button>
      </div>
    </div>
  );
}