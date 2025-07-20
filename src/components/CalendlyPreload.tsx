"use client";
import { useEffect } from "react";
import { loadCalendlyScript } from "@/lib/calendly";

export function CalendlyPreload() {
  useEffect(() => {
    loadCalendlyScript();
  }, []);
  return null;
} 