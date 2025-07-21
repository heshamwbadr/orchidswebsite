"use client";

import { useCalendly } from "@/components/CalendlyLazyLoader";

/**
 * This component initializes the Calendly loader for the entire application.
 * It uses the useCalendly hook and renders the CalendlyLoader component,
 * which makes the Calendly API available globally so that other components
 * can use the useCalendly hook to open the pop-up widget.
 */
export const GlobalCalendlyProvider = () => {
  const { CalendlyLoader } = useCalendly();
  return <CalendlyLoader />;
};
