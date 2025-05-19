export const measurePerformance = (name: string) => {
  if (typeof window === 'undefined' || !window.performance) return { end: () => {} };
  
  const start = performance.now();
  
  return {
    end: () => {
      const end = performance.now();
      const duration = end - start;
      
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`⚡️ ${name}: ${duration.toFixed(2)}ms`);
      }
      
      // Send to analytics in production if duration is concerning
      if (process.env.NODE_ENV === 'production' && duration > 100) {
        // Could send to monitoring service
        // sendToAnalytics({ name, duration });
      }
      
      return duration;
    }
  };
}; 