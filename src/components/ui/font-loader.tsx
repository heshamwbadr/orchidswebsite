'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // This runs on the client side after hydration
    const handleFontLoad = () => {
      document.documentElement.classList.add('fonts-loaded');
    };

    // Check if fonts are already loaded (cached)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        handleFontLoad();
      });
    } else {
      // Fallback if document.fonts is not supported
      const timeout = setTimeout(handleFontLoad, 3000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return null;
}
