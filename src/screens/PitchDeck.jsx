import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slides from '../data/slides';
import NavigationButtons from '../components/NavigationButtons';
import SlideContent from './SlideContent';

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToNext = () => {
    setDirection(1);
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const goToPrevious = () => {
    setDirection(-1);
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  return (
    <div className="flex-grow flex flex-col bg-gradient-to-br from-cosmic-900 via-gray-900 to-nebula-900">
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="perspective-1000 preserve-3d"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl backface-hidden transform-gpu">
                <h2 className="font-display text-4xl mb-8 bg-gradient-to-r from-nebula-500 to-cosmic-100 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </h2>
                <SlideContent content={slides[currentSlide].content} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="pb-12 px-8">
        <NavigationButtons
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          disablePrevious={currentSlide === 0}
          disableNext={currentSlide === slides.length - 1}
          currentSlide={currentSlide}
          totalSlides={slides.length}
        />
      </div>

      <footer className="py-6 text-center border-t border-gray-800">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-gray-400 hover:text-nebula-300 transition-colors"
        >
          Crafted with innovation on ZAPT
        </a>
      </footer>
    </div>
  );
}