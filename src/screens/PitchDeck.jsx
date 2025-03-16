import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slides from '../data/slides';
import NavigationButtons from '../components/NavigationButtons';
import SlideContent from './SlideContent';

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning || currentSlide >= slides.length - 1) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentSlide(prev => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500); // Match animation duration
  };

  const goToPrevious = () => {
    if (isTransitioning || currentSlide <= 0) return;
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentSlide(prev => prev - 1);
    setTimeout(() => setIsTransitioning(false), 500); // Match animation duration
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && !isTransitioning && currentSlide < slides.length - 1) {
        goToNext();
      } else if (e.key === 'ArrowLeft' && !isTransitioning && currentSlide > 0) {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  return (
    <motion.div 
      className="flex-grow flex flex-col py-10 px-4 md:px-8 z-10 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Slide area */}
      <div className="flex-grow flex items-center justify-center py-4">
        <div className="w-full max-w-6xl">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.19, 1.0, 0.22, 1.0],
              }}
              className="perspective-1000 preserve-3d"
            >
              <motion.div 
                className="bg-glass rounded-3xl p-8 md:p-12 shadow-2xl backface-hidden transform-gpu relative 
                border border-white/5 overflow-hidden"
                whileHover={{ boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Slide title */}
                <motion.h2 
                  className="font-display text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 text-gradient-nebula text-shadow-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                {/* Slide content */}
                <SlideContent content={slides[currentSlide].content} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="pt-6 md:pt-10 max-w-4xl mx-auto w-full">
        <NavigationButtons
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          disablePrevious={currentSlide === 0 || isTransitioning}
          disableNext={currentSlide === slides.length - 1 || isTransitioning}
          currentSlide={currentSlide}
          totalSlides={slides.length}
        />
      </div>

      {/* Footer */}
      <footer className="py-6 text-center mt-8 border-t border-white/5">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-gray-400 hover:text-nebula-400 transition-colors cursor-pointer"
        >
          Revolutionizing app creation with ZAPT
        </a>
      </footer>
    </motion.div>
  );
}