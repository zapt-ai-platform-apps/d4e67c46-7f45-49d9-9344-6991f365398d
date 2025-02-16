import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cosmic-900 to-nebula-600 px-6 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <img
          src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=96&height=96"
          alt="ZAPT Logo"
          className="w-16 h-16 floating-element"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
        />
        <div className="flex flex-col">
          <h1 className="font-display text-3xl bg-gradient-to-r from-cosmic-100 to-white bg-clip-text text-transparent">
            ZAPT
          </h1>
          <p className="font-body text-sm text-cosmic-100 opacity-80">
            The Future of App Creation
          </p>
        </div>
      </div>
    </header>
  );
}