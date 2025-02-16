import React, { useEffect } from 'react';
import Header from './Header';
import PageContent from './PageContent';

export default function App() {
  useEffect(() => {
    console.log('Landing page loaded.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <Header />
      <PageContent />
    </div>
  );
}