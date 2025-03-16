import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './animations.css';
import * as Sentry from '@sentry/browser';

// Initialize Sentry for error tracking
Sentry.init({
  dsn: import.meta.env.VITE_PUBLIC_SENTRY_DSN,
  environment: import.meta.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'frontend',
      projectId: import.meta.env.VITE_PUBLIC_APP_ID,
    },
  },
});

// Add PWA support via Progressier
window.progressierAppRuntimeSettings = {
  uid: import.meta.env.VITE_PUBLIC_APP_ID,
  icon512: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=512&height=512",
  name: 'ZAPT VC Pitch',
  shortName: 'ZAPT VC Pitch',
};

let progressierScript = document.createElement('script');
progressierScript.setAttribute('src', 'https://progressier.app/z8yY3IKmfpDIw3mSncPh/script.js');
progressierScript.setAttribute('defer', 'true');
document.querySelector('head').appendChild(progressierScript);

// Add Umami Analytics for production environments
if (import.meta.env.VITE_PUBLIC_APP_ENV !== 'development') {
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.setAttribute('data-website-id', import.meta.env.VITE_PUBLIC_UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
}

// Load custom fonts
const loadFonts = () => {
  const spaceGrotesk = document.createElement('link');
  spaceGrotesk.rel = 'stylesheet';
  spaceGrotesk.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
  document.head.appendChild(spaceGrotesk);

  const inter = document.createElement('link');
  inter.rel = 'stylesheet';
  inter.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(inter);
};

loadFonts();

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log app initialization
console.log('ZAPT VC Pitch deck initialized');