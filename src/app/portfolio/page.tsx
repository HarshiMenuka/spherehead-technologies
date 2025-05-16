'use client';
import React, { Suspense, lazy } from 'react';
import Loading from '../../components/ui/loading';
import './page.css';

// Lazy load components
const HomeGallery = lazy(() => import('../../components/HomeGallery').then(module => ({ default: module.HomeGallery })));
const JoinUs = lazy(() => import('../../components/Joinus'));

function Portfolio() {
  return (
    <main className="bg-[#111] min-h-screen">
      <Suspense fallback={<Loading size="large" />}>
        <HomeGallery />
      </Suspense>
      
      <Suspense fallback={<Loading size="large" fullScreen={false} />}>
        <JoinUs />
      </Suspense>
    </main>
  );
}

export default Portfolio;