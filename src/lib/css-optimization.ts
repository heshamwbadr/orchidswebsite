// CSS optimization utilities for mobile performance

// Critical CSS that should be inlined to prevent render blocking
export const criticalCSS = `
  /* Critical above-the-fold styles */
  body {
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #0A0A0A;
    color: #FFFFFF;
    overflow-x: hidden;
  }
  
  /* Navigation critical styles */
  .navigation-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  /* Hero section critical styles */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Loading states to prevent layout shift */
  .loading-skeleton {
    background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  /* Prevent flash of unstyled content */
  .hydrating {
    visibility: hidden;
  }
  
  .hydrated {
    visibility: visible;
  }
`;

// Defer non-critical CSS loading
export const deferNonCriticalCSS = () => {
  if (typeof window === 'undefined') return;
  
  // Load non-critical CSS after page load
  const loadCSS = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  };
  
  // Load Tailwind CSS after critical rendering
  window.addEventListener('load', () => {
    // This would be handled by Next.js automatically, but we can optimize further
    requestIdleCallback(() => {
      // Load any additional non-critical stylesheets here
      console.log('Loading non-critical CSS after page load');
    });
  });
};

// Optimize font loading to prevent layout shift
export const optimizeFontLoading = () => {
  if (typeof window === 'undefined') return;
  
  // Preload critical fonts
  const preloadFont = (href: string, type: string = 'font/woff2') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'font';
    link.type = type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  };
  
  // Use font-display: swap for better performance
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
    }
  `;
  document.head.appendChild(style);
};

// Remove unused CSS classes (would be handled by build process)
export const removeUnusedCSS = () => {
  // This would typically be handled by PurgeCSS or similar tools
  // during the build process, but we can add runtime optimization
  if (typeof window === 'undefined') return;
  
  // Remove unused Tailwind classes after hydration
  requestIdleCallback(() => {
    const unusedClasses = [
      // Add classes that are definitely not used
      '.unused-class-example'
    ];
    
    unusedClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      elements.forEach(el => el.classList.remove(className.substring(1)));
    });
  });
};

// Optimize CSS delivery for mobile
export const optimizeMobileCSS = () => {
  if (typeof window === 'undefined') return;
  
  // Add critical CSS inline
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
  
  // Initialize other optimizations
  deferNonCriticalCSS();
  optimizeFontLoading();
  removeUnusedCSS();
};
