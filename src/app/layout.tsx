import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import { FloatingCallButton } from "@/components/portfolio/floating-call-icon";
import { CalendlyPreload } from "@/components/CalendlyPreload";
import { useEffect } from "react";
import { loadCalendlyScript } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "Hesham Badr | Certified AI Transformation Consultant & Strategy Partner",
  description:
    "AI transformation consultant trusted by leaders to turn strategy into execution. Specialising in agentic AI, AI automation, and AI leadership. Founder of Neuronovate.",
  keywords: [
    "Hesham Badr",
    "AI transformation consultant",
    "Certified AI consultant",
    "Agentic AI",
    "AI strategy execution",
    "AI agent enablement",
    "AI leadership coach",
    "AI partner",
    "Enterprise AI automation",
    "AI transformation",
    "AI automation",
    "AI Lean",
    "AI Six Sigma",
    "AI customer centric",
    "AI service design",
    "AI CX",
    "Neuronovate",
    "Neuronovate Consulting",
    "AI consultant",
    "Strategy consultant"
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
          `}
        </Script>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJZF93FB');
          `}
        </Script>
        <meta name="google-site-verification" content="B2jZGoMehuT2xfbKUL3J1qTxonbEcN43peLfP3CrN60" />
        <title>Hesham Badr | AI Strategy & Transformation Consultant</title>
        <meta name="description" content="Helping leaders cut through the AI noise and drive real outcomes. Strategy, automation, and transformation from boardroom to frontline." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hesham Badr | AI Strategy & Transformation Consultant" />
        <meta property="og:description" content="Helping leaders cut through the AI noise and drive real outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hesham.badr.neuronovate.consulting" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hesham Badr | AI Strategy & Transformation Consultant" />
        <meta name="twitter:description" content="Helping leaders cut through the AI noise and drive real outcomes." />
        <meta name="twitter:image" content="/og-image.png" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <meta name="author" content="Hesham Badr" />
        <meta
          name="keywords"
          content="AI transformation, digital transformation, strategy consulting, artificial intelligence, business transformation"
        />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap"
          as="style"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://hesham.badr.neuronovate.consulting#hesham",
                  "name": "Hesham Badr",
                  "jobTitle": "AI Transformation Consultant & Founder",
                  "description": "Trusted advisor and certified AI consultant helping businesses achieve AI-led transformation, strategy execution, and agentic AI enablement.",
                  "url": "https://hesham.badr.neuronovate.consulting",
                  "image": "https://clever-pika-899e4f.netlify.app/mypictransparent.png",
                  "sameAs": [
                    "https://www.linkedin.com/in/hesham-badr",
                    "https://www.neuronovate.consulting"
                  ],
                  "worksFor": {
                    "@id": "https://www.neuronovate.consulting#neuronovate"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.neuronovate.consulting#neuronovate",
                  "name": "Neuronovate Consulting",
                  "url": "https://www.neuronovate.consulting",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://clever-pika-899e4f.netlify.app/signaturetransparent1.png"
                  },
                  "founder": {
                    "@id": "https://hesham.badr.neuronovate.consulting#hesham"
                  },
                  "description": "Neuronovate Consulting helps companies unlock measurable value through AI automation, strategy, and intelligent transformation across service design and operations.",
                  "sameAs": [
                    "https://www.linkedin.com/company/neuronovate",
                    "https://www.hesham.badr.neuronovate.consulting"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJZF93FB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <CalendlyPreload />
        <div className="relative min-h-screen">{children}</div>
        <FloatingCallButton />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
