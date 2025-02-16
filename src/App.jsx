import React, { useEffect } from 'react';
import Header from './Header';
import PitchDeck from './screens/PitchDeck';

export default function App() {
  useEffect(() => {
    console.log('Pitch deck loaded.');
  }, []);

  return (
    <div className="h-screen flex flex-col text-gray-900">
      <Header />
      <PitchDeck />
    </div>
  );
}