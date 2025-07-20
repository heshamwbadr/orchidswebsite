"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = "GTM-TJZF93FB";

export function GTMLoader() {
  const [shouldLoadGTM, setShouldLoadGTM] = useState(false);

  useEffect(() => {
    // Only load GTM after user interaction or after a delay
    const loadGTM = () => {
      setShouldLoadGTM(true);
    };

    // Load GTM after user scrolls or after 5 seconds
    const handleScroll = () => {
      loadGTM();
      window.removeEventListener("scroll", handleScroll);
    };

    const handleClick = () => {
      loadGTM();
      window.removeEventListener("click", handleClick);
    };

    // Add event listeners for user interaction
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    // Fallback: load after 5 seconds if no interaction
    const timer = setTimeout(loadGTM, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
      clearTimeout(timer);
    };
  }, []);

  if (!shouldLoadGTM) {
    return null;
  }

  return (
    <>
      {/* Initialize dataLayer */}
      <Script id="gtm-datalayer" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
        `}
      </Script>
      
      {/* Load GTM script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  );
}

// Function to manually trigger GTM loading (for important events)
export const triggerGTM = () => {
  if (typeof window !== "undefined") {
    // Force load GTM immediately
    const script = document.createElement("script");
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(script);
  }
}; 