// src/app/pricing/page.tsx
'use client';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import './page.css';
import dynamic from 'next/dynamic';
import Spline from "@splinetool/react-spline";
import Loading from '@/components/ui/loading';

// Lazy load components with proper fallbacks
const PricingPlans = lazy(() => import('../../components/PricingPlans'));
const FAQ = lazy(() => import('../../components/FAQ'));

// // Use Next.js dynamic import for Spline component
// const SplineComponent = dynamic(() => import('../../components/SplineWrapper'), {
//   loading: () => <div className="spline-fallback">Loading 3D model...</div>,
//   ssr: false
// });

function Pricing() {
  const [isMounted, setIsMounted] = useState(false);

  // Only render Spline on client-side after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="spline-wrapper">
          <Suspense fallback={<Loading />}>
            <div className="absolute inset-0 z-0">
              <Spline scene="/images/clarity_stream/scene.splinecode" />
            </div>
          </Suspense>
        </div>
        <div className="text-section">
          <h1 className="heading">Transparent Pricing for Powerful Web Solutions</h1>
          <h2 className="subheading">
            Get the most reliable tech solutions, customized to your requirements built on trust without paying a hefty price tag
          </h2>
        </div>
      </div>
      <PricingPlans />
      <Suspense fallback={<div>Loading FAQ...</div>}>
        <FAQ />
      </Suspense>
    </>
  );
}

export default Pricing;