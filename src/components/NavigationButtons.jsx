import React from 'react';

export default function NavigationButtons({ goToPrevious, goToNext, disablePrevious, disableNext }) {
  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={goToPrevious}
        disabled={disablePrevious}
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={goToNext}
        disabled={disableNext}
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}