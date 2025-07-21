"use client";

import { useState, useCallback } from 'react';

const CALENDLY_URL = "https://calendly.com/hesham-badr-neuronovate/30min";

// A singleton pattern to ensure the script is only loaded once.
let calendlyScriptState: 'idle' | 'loading' | 'ready' | 'error' = 'idle';
let pendingSubscribers: ((status: 'ready' | 'error') => void)[] = [];

const loadCalendlyScript = () => {
  if (calendlyScriptState === 'loading' || calendlyScriptState === 'ready') {
    return;
  }

  calendlyScriptState = 'loading';

  // Load CSS non-render-blocking
  const cssHref = "https://assets.calendly.com/assets/external/widget.css";
  if (!document.querySelector(`link[href="${cssHref}"]`)) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = cssHref;
    link.as = 'style';
    link.onload = () => { link.rel = 'stylesheet'; };
    document.head.appendChild(link);
  }

  // Load Script
  const script = document.createElement('script');
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;

  script.onload = () => {
    calendlyScriptState = 'ready';
    pendingSubscribers.forEach(cb => cb('ready'));
    pendingSubscribers = [];
  };

  script.onerror = () => {
    calendlyScriptState = 'error';
    pendingSubscribers.forEach(cb => cb('error'));
    pendingSubscribers = [];
  };

  document.head.appendChild(script);
};

/**
 * A high-performance hook for lazily loading the Calendly pop-up widget.
 * The script is only loaded on the first click of a Calendly button, ensuring
 * zero impact on initial page load performance.
 */
export const useCalendly = () => {
  const [isLoading, setIsLoading] = useState(false);

  const openPopup = useCallback(() => {
    if (calendlyScriptState === 'ready' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }

    if (calendlyScriptState === 'error') {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
      return;
    }

    setIsLoading(true);

    const subscriber = (status: 'ready' | 'error') => {
      setIsLoading(false);
      if (status === 'ready' && window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
      }
    };

    pendingSubscribers.push(subscriber);

    // Start loading only if it's the first time.
    if (calendlyScriptState === 'idle') {
      loadCalendlyScript();
    }

  }, []);

  return { openPopup, isLoading };
};

// Define the window.Calendly type for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}