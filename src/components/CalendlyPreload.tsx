"use client";
import Script from "next/script";
import { useEffect } from "react";
import { loadCalendlyScript } from "@/lib/calendly";

export function CalendlyPreload() {
  useEffect(() => {
    // Load Calendly script after page load to avoid blocking critical requests
    const timer = setTimeout(() => {
      loadCalendlyScript();
    }, 2000); // Delay loading by 2 seconds

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {/* Preload Calendly script with low priority */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        id="calendly-script"
      />
    </>
  );
} 