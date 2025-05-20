import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { useImageLazyLoad } from '@/hooks/useImageLazyLoad';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  containerClassName?: string;
  withBlur?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  containerClassName,
  withBlur = true,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isIntersecting } = useImageLazyLoad();
  const [shouldLoad, setShouldLoad] = useState(priority);
  
  useEffect(() => {
    if (isIntersecting && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isIntersecting, shouldLoad]);

  return (
    <div 
      ref={ref} 
      className={cn(
        'overflow-hidden relative', 
        containerClassName
      )}
    >
      {shouldLoad && (
        <>
          <Image
            src={src}
            alt={alt}
            className={cn(
              'transition-opacity duration-500',
              withBlur && !isLoaded ? 'opacity-0' : 'opacity-100',
              className
            )}
            sizes={sizes}
            priority={priority}
            quality={90}
            onLoad={() => setIsLoaded(true)}
            {...props}
          />
          {withBlur && !isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </>
      )}
    </div>
  );
} 