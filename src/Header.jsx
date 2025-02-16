import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img
          src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64"
          alt="ZAPT Logo"
          className="w-12 h-12"
        />
        <h1 className="text-2xl font-bold">ZAPT</h1>
      </div>
      <button
        onClick={() => console.log('Login clicked')}
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Login
      </button>
    </header>
  );
}