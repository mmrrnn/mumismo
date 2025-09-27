'use client';

import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// Create a global cache instance to ensure consistency
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ 
    key: 'mui-style', 
    insertionPoint,
    prepend: true,
    // Ensure consistent styling between server and client
    stylisPlugins: [],
    // Use a consistent nonce for SSR
    nonce: undefined,
    // Ensure consistent class name generation
    speedy: false,
    // Force consistent behavior between server and client
    container: isBrowser ? document.head : undefined,
  });
}
