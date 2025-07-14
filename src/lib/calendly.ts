declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/hesham-badr-neuronovate/30min';

export const openCalendlyPopup = (): void => {
  // Check if Calendly is available
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL
    });
  } else {
    // Fallback: open in new tab if Calendly widget is not loaded
    if (typeof window !== 'undefined') {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  }
};

// Function to load Calendly script dynamically if not already loaded
export const loadCalendlyScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') {
      reject(new Error('Not in browser environment'));
      return;
    }

    // Check if Calendly is already loaded
    if (window.Calendly) {
      resolve();
      return;
    }

    // Check if script is already being loaded
    if (document.querySelector('script[src*="calendly.com"]')) {
      // Wait for it to load
      const checkCalendly = () => {
        if (window.Calendly) {
          resolve();
        } else {
          setTimeout(checkCalendly, 100);
        }
      };
      checkCalendly();
      return;
    }

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      // Wait a bit for Calendly to initialize
      const checkCalendly = () => {
        if (window.Calendly) {
          resolve();
        } else {
          setTimeout(checkCalendly, 100);
        }
      };
      checkCalendly();
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Calendly script'));
    };

    document.head.appendChild(script);

    // Also load CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });
};

// Enhanced function that ensures Calendly is loaded before opening popup
export const openCalendlyPopupSafe = async (): Promise<void> => {
  try {
    await loadCalendlyScript();
    openCalendlyPopup();
  } catch (error) {
    console.warn('Could not load Calendly, opening in new tab:', error);
    // Fallback to direct link
    if (typeof window !== 'undefined') {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  }
};