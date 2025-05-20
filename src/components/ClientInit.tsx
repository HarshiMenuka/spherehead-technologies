
'use client';

import { useEffect } from 'react';
import { initializeApp } from '@/lib/init';

export default function ClientInit() {
  useEffect(() => {
    const cleanup = initializeApp();
    
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);
  
  // This component doesn't render anything
  return null;
} 