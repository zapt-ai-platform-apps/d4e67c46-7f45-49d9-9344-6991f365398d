import React, { useState } from 'react';
import slides from '../data/slides.jsx';
import NavigationButtons from '../components/NavigationButtons';

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1;
      console.log(`Navigating to slide ${nextSlide}`);
      setCurrentSlide(nextSlide);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      console.log(`Navigating to slide ${prevSlide}`);
      setCurrentSlide(prevSlide);
    }
  };

  return (
    <div className="flex-grow flex flex-col justify-between p-6 min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow h-full">
        <h2 className="text-5xl font-extrabold mb-8 text-center">
          {slides[currentSlide].title}
        </h2>
        <div
          key={currentSlide}
          className="transition-opacity duration-500 ease-in-out animate-fadeIn max-w-3xl bg-white p-8 rounded-lg shadow-lg mx-auto text-left"
        >
          {slides[currentSlide].content}
        </div>
      </div>
      <NavigationButtons
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        disablePrevious={currentSlide === 0}
        disableNext={currentSlide === slides.length - 1}
      />
      <footer className="mt-8 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold select-none cursor-pointer"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}