import { useEffect, useState } from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
  minDisplayTime?: number;
}

export default function Loading({ 
  size = 'medium', 
  fullScreen = true,
  minDisplayTime = 50000 
}: LoadingProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let isMounted = true; 
    const startTime = Date.now();

    const minTimePromise = new Promise(resolve => 
      setTimeout(resolve, minDisplayTime)
    );

    const pageLoadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') {
        console.log('Page already loaded');
        resolve(true);
      } else {
        console.log('Waiting for page load');
        window.addEventListener('load', () => {
          console.log('Page load event fired');
          resolve(true);
        }, { once: true });
      }
    });

    Promise.all([minTimePromise, pageLoadPromise])
      .then(() => {
        const elapsed = Date.now() - startTime;
        console.log(`Loader visible for ${elapsed}ms`);
        if (isMounted) {
          setShowLoader(false);
        }
      })
      .catch(error => {
        console.error('Error in loading promises:', error);
      });

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [minDisplayTime]);

  if (!showLoader) return null;

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-65 h-65',
    large: 'w-65 h-65'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-black'
    : 'flex items-center justify-center py-12 bg-black';

  return (
    <div className={containerClasses}>
      <img
        src="/images/Spherehead.svg"
        alt="Loading"
        className={`${sizeClasses[size]} animate-pulse`} 
      />
    </div>
  );
}