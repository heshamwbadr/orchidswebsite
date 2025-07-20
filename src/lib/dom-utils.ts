// DOM utilities to prevent forced reflows

interface LayoutCache {
  [key: string]: {
    rect: DOMRect;
    timestamp: number;
    offsetTop: number;
    offsetLeft: number;
    offsetWidth: number;
    offsetHeight: number;
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;
  };
}

const layoutCache: LayoutCache = {};
const CACHE_DURATION = 16; // ~60fps

// Batch DOM reads to prevent forced reflows
export const batchDOMReads = (operations: (() => void)[]) => {
  // Use requestAnimationFrame to batch all reads in the next frame
  requestAnimationFrame(() => {
    operations.forEach(operation => operation());
  });
};

// Get cached layout measurements or read from DOM
export const getCachedLayout = (element: HTMLElement, key: string) => {
  const now = performance.now();
  const cached = layoutCache[key];
  
  // Return cached value if still valid
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached;
  }
  
  // Read all layout properties at once to minimize reflows
  const rect = element.getBoundingClientRect();
  const layout = {
    rect,
    timestamp: now,
    offsetTop: element.offsetTop,
    offsetLeft: element.offsetLeft,
    offsetWidth: element.offsetWidth,
    offsetHeight: element.offsetHeight,
    clientWidth: element.clientWidth,
    clientHeight: element.clientHeight,
    scrollWidth: element.scrollWidth,
    scrollHeight: element.scrollHeight,
  };
  
  // Cache the result
  layoutCache[key] = layout;
  return layout;
};

// Safe scroll to element with cached measurements
export const safeScrollToElement = (element: HTMLElement, offset = 0) => {
  const key = `scroll-${element.id || element.className}`;
  const layout = getCachedLayout(element, key);
  
  window.scrollTo({
    top: layout.offsetTop - offset,
    behavior: "smooth"
  });
};

// Safe getBoundingClientRect with caching
export const safeGetBoundingClientRect = (element: HTMLElement, key: string) => {
  const layout = getCachedLayout(element, key);
  return layout.rect;
};

// Batch multiple scroll operations
export const batchScrollOperations = (operations: Array<{ element: HTMLElement; offset?: number }>) => {
  batchDOMReads([() => {
    operations.forEach(({ element, offset = 0 }) => {
      safeScrollToElement(element, offset);
    });
  }]);
};

// Check scroll position without causing reflow
export const getScrollPosition = (element: HTMLElement, key: string) => {
  const layout = getCachedLayout(element, key);
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop,
    scrollWidth: layout.scrollWidth,
    scrollHeight: layout.scrollHeight,
    clientWidth: layout.clientWidth,
    clientHeight: layout.clientHeight,
  };
};

// Clear layout cache
export const clearLayoutCache = () => {
  Object.keys(layoutCache).forEach(key => {
    delete layoutCache[key];
  });
};

// Debounced scroll handler to prevent excessive reflows
export const createDebouncedScrollHandler = (callback: () => void, delay = 16) => {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

// Throttled scroll handler for performance
export const createThrottledScrollHandler = (callback: () => void, delay = 16) => {
  let lastCall = 0;
  
  return () => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback();
    }
  };
};

// Safe element positioning without reflows
export const safePositionElement = (
  element: HTMLElement,
  target: HTMLElement,
  options: {
    offsetX?: number;
    offsetY?: number;
    position?: 'top' | 'bottom' | 'left' | 'right';
  } = {}
) => {
  const elementKey = `element-${element.id || 'temp'}`;
  const targetKey = `target-${target.id || 'temp'}`;
  
  const elementLayout = getCachedLayout(element, elementKey);
  const targetLayout = getCachedLayout(target, targetKey);
  
  const { offsetX = 0, offsetY = 0, position = 'bottom' } = options;
  
  let top = 0;
  let left = 0;
  
  switch (position) {
    case 'top':
      top = targetLayout.rect.top - elementLayout.offsetHeight - offsetY;
      left = targetLayout.rect.left + offsetX;
      break;
    case 'bottom':
      top = targetLayout.rect.bottom + offsetY;
      left = targetLayout.rect.left + offsetX;
      break;
    case 'left':
      top = targetLayout.rect.top + offsetY;
      left = targetLayout.rect.left - elementLayout.offsetWidth - offsetX;
      break;
    case 'right':
      top = targetLayout.rect.top + offsetY;
      left = targetLayout.rect.right + offsetX;
      break;
  }
  
  // Apply position in a single operation
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
};

// Intersection Observer wrapper to avoid reflows
export const createSafeIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined') return null;
  
  return new IntersectionObserver((entries) => {
    // Batch all intersection checks
    batchDOMReads([() => {
      callback(entries, null as any);
    }]);
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  });
};

// Resize Observer wrapper to avoid reflows
export const createSafeResizeObserver = (callback: ResizeObserverCallback) => {
  if (typeof window === 'undefined') return null;
  
  return new ResizeObserver((entries) => {
    // Clear cache when elements resize
    entries.forEach(entry => {
      const key = `resize-${entry.target.id || 'temp'}`;
      delete layoutCache[key];
    });
    
    // Batch resize handling
    batchDOMReads([() => {
      callback(entries, null as any);
    }]);
  });
}; 