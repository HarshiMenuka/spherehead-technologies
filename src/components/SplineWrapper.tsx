'use client';
import React, { useState, useEffect } from 'react';

export default function SplineWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import Spline only on client-side
    import('@splinetool/react-spline').catch(console.error);
  }, []);

  // Loading style for placeholder
  const loadingStyle = {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(5px)',
    borderRadius: '8px'
  };

  // Show fallback until client-side rendering is ready
  if (!isClient) {
    return <div style={loadingStyle}>Loading 3D scene...</div>;
  }

  // Use a simpler approach - direct iframe to Spline scene
  return (
    <iframe 
      src="/images/clarity_stream/index.html"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        border: 'none',
        borderRadius: '8px',
      }}
      title="Spline 3D Scene"
    />
  );
} 