import React from 'react';

export default function HeroSection() {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-blue-200">
      <h2 className="text-5xl font-extrabold mb-4">Welcome to ZAPT</h2>
      <p className="text-2xl mb-6">
        Empowering a new era of innovation: From ancient limitations to limitless possibilities.
      </p>
      <button
        onClick={() => console.log('Learn More clicked')}
        className="cursor-pointer px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition"
      >
        Learn More
      </button>
    </section>
  );
}