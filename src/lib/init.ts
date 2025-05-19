import { memoryCache } from '@/lib/cache';

/**
 * Initialize application-wide optimizations
 */
export function initializeApp() {
  if (typeof window !== 'undefined') {
    // Start memory cache cleanup
    const cleanupFunction = memoryCache.startCleanupInterval(300);
    
    // Remove cleanup when browser window is about to unload
    window.addEventListener('beforeunload', cleanupFunction);
    
    // Optimize animation frames for smoother animations
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Preload critical assets during idle time
        const linksToPreload = [
          '/images/spherehead.svg',
          // Add other critical assets here
        ];
        
        linksToPreload.forEach(link => {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'preload';
          preloadLink.as = link.endsWith('.svg') ? 'image' : 'fetch';
          preloadLink.href = link;
          document.head.appendChild(preloadLink);
        });
      });
    }
    
    // Add other app-wide optimizations here
  }
  
  return () => {
    // Cleanup function for server-side rendering
  };
} 