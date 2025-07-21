// Performance utilities to reduce main-thread blocking and forced reflows

// Batch DOM reads to avoid layout thrashing
export const batchDOMReads = (readOperations: (() => void)[]) => {
  // Use requestAnimationFrame to batch all reads in the next frame
  requestAnimationFrame(() => {
    readOperations.forEach(operation => operation());
  });
};

// Batch DOM writes to avoid layout thrashing
export const batchDOMWrites = (writeOperations: (() => void)[]) => {
  // Use requestAnimationFrame to batch all writes in the next frame
  requestAnimationFrame(() => {
    writeOperations.forEach(operation => operation());
  });
};

// Debounce function to limit execution frequency
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function to limit execution frequency
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Use Intersection Observer for efficient scroll-based operations
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined') return null;
  
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  });
};

// Efficient scroll handler with passive listeners
export const createScrollHandler = (callback: () => void) => {
  return throttle(callback, 16); // ~60fps
};

// Efficient resize handler
export const createResizeHandler = (callback: () => void) => {
  return debounce(callback, 100);
};

// Batch state updates to reduce re-renders
export const batchStateUpdates = <T extends Record<string, any>>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  updates: Partial<T>[]
) => {
  setState(prevState => {
    return updates.reduce((acc, update) => ({ ...acc, ...update }), prevState) as T;
  });
};

// Prevent forced reflows by batching DOM measurements
export const measureElement = (element: HTMLElement) => {
  // Cache measurements to avoid repeated layout calculations
  const measurements = {
    width: element.offsetWidth,
    height: element.offsetHeight,
    top: element.offsetTop,
    left: element.offsetLeft,
    scrollTop: element.scrollTop,
    scrollLeft: element.scrollLeft,
  };
  return measurements;
};

// Throttled scroll handler specifically for mobile performance
export const createThrottledScrollHandler = (callback: () => void, delay: number = 16) => {
  let ticking = false;
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Optimize image loading with intersection observer
export const createLazyImageObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  if (typeof window === 'undefined') return null;
  
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, {
    root: null,
    rootMargin: '50px',
    threshold: 0.01,
  });
}; 