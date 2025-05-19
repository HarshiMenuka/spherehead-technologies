type CacheEntry<T> = {
  value: T;
  expiry: number;
}

class MemoryCache {
  private cache: Map<string, CacheEntry<any>> = new Map();
  
  set<T>(key: string, value: T, ttlSeconds: number = 60): void {
    const expiry = Date.now() + ttlSeconds * 1000;
    this.cache.set(key, { value, expiry });
  }
  
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) return null;
    
    // Return null if expired
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.value as T;
  }
  
  delete(key: string): void {
    this.cache.delete(key);
  }
  
  clear(): void {
    this.cache.clear();
  }
  
  // Automatically cleanup expired entries
  startCleanupInterval(intervalSeconds: number = 300): () => void {
    const interval = setInterval(() => {
      const now = Date.now();
      this.cache.forEach((entry, key) => {
        if (now > entry.expiry) {
          this.cache.delete(key);
        }
      });
    }, intervalSeconds * 1000);
    
    // Return cleanup function
    return () => clearInterval(interval);
  }
}

// Create singleton instance
export const memoryCache = new MemoryCache();

// Helper function for cached data fetching
export async function fetchWithCache<T>(
  url: string, 
  options?: RequestInit,
  ttlSeconds: number = 60
): Promise<T> {
  const cacheKey = `fetch:${url}:${JSON.stringify(options)}`;
  
  // Check cache first
  const cached = memoryCache.get<T>(cacheKey);
  if (cached) return cached;
  
  // Fetch data
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  
  // Cache the result
  memoryCache.set<T>(cacheKey, data, ttlSeconds);
  
  return data;
} 