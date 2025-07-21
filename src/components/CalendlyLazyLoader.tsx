"use client";
import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/hesham-badr-neuronovate/30min";

interface CalendlyLazyLoaderProps {
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const CalendlyLazyLoader: React.FC<CalendlyLazyLoaderProps> = ({ 
  onLoad, 
  onError 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadCalendly = useCallback(async () => {
    if (isLoaded || isLoading || hasError) return;

    setIsLoading(true);

    try {
      // Check if Calendly is already available
      if (typeof window !== "undefined" && window.Calendly) {
        setIsLoaded(true);
        onLoad?.();
        return;
      }

      // Preload CSS to avoid render-blocking
      const cssHref = "https://assets.calendly.com/assets/external/widget.css";
      if (!document.querySelector(`link[href="${cssHref}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = cssHref;
        link.as = "style";
        // Onload, switch rel to stylesheet to apply styles
        link.onload = () => {
          link.rel = "stylesheet";
        };
        document.head.appendChild(link);
      }

      // Load script with timeout
      const scriptLoadPromise = new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.defer = true;

        const timeout = setTimeout(() => {
          reject(new Error("Calendly script load timeout"));
        }, 10000); // 10 second timeout

        script.onload = () => {
          clearTimeout(timeout);
          // Wait for Calendly to initialize
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
          clearTimeout(timeout);
          reject(new Error("Failed to load Calendly script"));
        };

        document.head.appendChild(script);
      });

      await scriptLoadPromise;
      setIsLoaded(true);
      onLoad?.();
    } catch (error) {
      console.error("Failed to load Calendly:", error);
      setHasError(true);
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoaded, isLoading, hasError, onLoad, onError]);

  // Auto-load after user interaction or delay
  useEffect(() => {
    let loadTimeout: NodeJS.Timeout;

    const handleUserInteraction = () => {
      if (!isLoaded && !isLoading && !hasError) {
        loadCalendly();
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      clearTimeout(loadTimeout);
    };

    // Load after user interaction or 8 seconds
    document.addEventListener("click", handleUserInteraction, { passive: true });
    document.addEventListener("scroll", handleUserInteraction, { passive: true });
    
    loadTimeout = setTimeout(() => {
      if (!isLoaded && !isLoading && !hasError) {
        loadCalendly();
      }
    }, 8000);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      clearTimeout(loadTimeout);
    };
  }, [isLoaded, isLoading, hasError, loadCalendly]);

  return null; // This component doesn't render anything
};

// Hook for using Calendly with lazy loading
export const useCalendly = () => {
  const [isReady, setIsReady] = useState(false);

  const openPopup = useCallback(async () => {
    if (!isReady) {
      // If not ready, open in new tab as fallback
      if (typeof window !== "undefined") {
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      }
      return;
    }

    try {
      if (typeof window !== "undefined" && window.Calendly) {
        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
        });
      } else {
        // Fallback to new tab
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Failed to open Calendly popup:", error);
      // Fallback to new tab
      if (typeof window !== "undefined") {
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      }
    }
  }, [isReady]);

  return {
    isReady,
    openPopup,
    CalendlyLoader: () => (
      <CalendlyLazyLoader
        onLoad={() => setIsReady(true)}
        onError={() => setIsReady(false)}
      />
    ),
  };
}; 