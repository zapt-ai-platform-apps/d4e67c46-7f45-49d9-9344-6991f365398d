import React, { useEffect } from 'react';
import Header from './components/Header';
import PitchDeck from './screens/PitchDeck';
import ZaptBadge from './components/ZaptBadge';

export default function App() {
  useEffect(() => {
    console.log('Pitch deck loaded.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-gray-100 bg-gradient-to-br from-cosmic-900 via-gray-900 to-nebula-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-nebula-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-cosmic-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[20%] w-80 h-80 bg-aurora-700/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      </div>

      <Header />
      <PitchDeck />
      <ZaptBadge />
    </div>
  );
}