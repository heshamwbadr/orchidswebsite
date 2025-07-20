// Modern JavaScript utilities - no polyfills needed for ES2020+ browsers

// Modern array methods (ES2020+)
export const arrayUtils = {
  // Array.prototype.flatMap (ES2019)
  flatMap: <T, U>(arr: T[], fn: (item: T, index: number) => U | U[]): U[] => {
    return arr.flatMap(fn);
  },

  // Array.prototype.at (ES2022)
  at: <T>(arr: T[], index: number): T | undefined => {
    return arr.at(index);
  },

  // Array.prototype.findLast (ES2023)
  findLast: <T>(arr: T[], predicate: (item: T, index: number) => boolean): T | undefined => {
    return arr.findLast(predicate);
  },
};

// Modern object methods (ES2020+)
export const objectUtils = {
  // Object.fromEntries (ES2019)
  fromEntries: <T>(entries: Iterable<readonly [PropertyKey, T]>): Record<PropertyKey, T> => {
    return Object.fromEntries(entries);
  },

  // Optional chaining (ES2020)
  safeGet: <T>(obj: any, path: string): T | undefined => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  },

  // Nullish coalescing (ES2020)
  coalesce: <T>(value: T | null | undefined, fallback: T): T => {
    return value ?? fallback;
  },
};

// Modern string methods (ES2020+)
export const stringUtils = {
  // String.prototype.replaceAll (ES2021)
  replaceAll: (str: string, search: string, replace: string): string => {
    return str.replaceAll(search, replace);
  },

  // String.prototype.at (ES2022)
  at: (str: string, index: number): string | undefined => {
    return str.at(index);
  },
};

// Modern Promise methods (ES2020+)
export const promiseUtils = {
  // Promise.allSettled (ES2020)
  allSettled: <T>(promises: Promise<T>[]): Promise<PromiseSettledResult<T>[]> => {
    return Promise.allSettled(promises);
  },

  // Promise.any (ES2021)
  any: <T>(promises: Promise<T>[]): Promise<T> => {
    return Promise.any(promises);
  },

  // Promise.try (ES2024 proposal - use Promise.resolve as fallback)
  try: <T>(fn: () => T | Promise<T>): Promise<T> => {
    return Promise.resolve(fn());
  },
};

// Modern async/await patterns (ES2017+)
export const asyncUtils = {
  // Async iteration
  async *asyncMap<T, U>(
    items: T[],
    fn: (item: T, index: number) => Promise<U>
  ): AsyncGenerator<U, void, unknown> {
    for (let i = 0; i < items.length; i++) {
      yield await fn(items[i], i);
    }
  },

  // Async reduce
  async asyncReduce<T, U>(
    items: T[],
    fn: (acc: U, item: T, index: number) => Promise<U>,
    initial: U
  ): Promise<U> {
    let acc = initial;
    for (let i = 0; i < items.length; i++) {
      acc = await fn(acc, items[i], i);
    }
    return acc;
  },
};

// Modern Set/Map methods (ES2020+)
export const collectionUtils = {
  // Set.prototype.intersection (ES2024 proposal - use manual implementation)
  setIntersection: <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
    return new Set([...setA].filter(x => setB.has(x)));
  },

  // Map.prototype.groupBy (ES2024 proposal - use manual implementation)
  groupBy: <T, K extends PropertyKey>(
    items: T[],
    keyFn: (item: T) => K
  ): Record<K, T[]> => {
    return items.reduce((groups, item) => {
      const key = keyFn(item);
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
      return groups;
    }, {} as Record<K, T[]>);
  },
};

// Modern BigInt support (ES2020+)
export const bigIntUtils = {
  // Safe BigInt conversion
  safeBigInt: (value: string | number): bigint | null => {
    try {
      return BigInt(value);
    } catch {
      return null;
    }
  },

  // Format BigInt for display
  formatBigInt: (value: bigint, locale = 'en-US'): string => {
    return value.toLocaleString(locale);
  },
};

// Modern Intl features (ES2020+)
export const intlUtils = {
  // List formatting
  formatList: (items: string[], locale = 'en-US'): string => {
    return new Intl.ListFormat(locale).format(items);
  },

  // Relative time formatting
  formatRelativeTime: (
    value: number,
    unit: Intl.RelativeTimeFormatUnit,
    locale = 'en-US'
  ): string => {
    return new Intl.RelativeTimeFormat(locale).format(value, unit);
  },

  // Plural rules
  getPluralRule: (value: number, locale = 'en-US'): string => {
    return new Intl.PluralRules(locale).select(value);
  },
};

// Modern Web APIs (no polyfills needed for modern browsers)
export const webUtils = {
  // Intersection Observer (ES2017+)
  createIntersectionObserver: (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ): IntersectionObserver | null => {
    if (typeof window === 'undefined') return null;
    return new IntersectionObserver(callback, options);
  },

  // Resize Observer (ES2017+)
  createResizeObserver: (
    callback: ResizeObserverCallback
  ): ResizeObserver | null => {
    if (typeof window === 'undefined') return null;
    return new ResizeObserver(callback);
  },

  // Performance API (ES2015+)
  measurePerformance: (name: string, fn: () => void): void => {
    if (typeof performance === 'undefined') {
      fn();
      return;
    }
    
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  },
}; 