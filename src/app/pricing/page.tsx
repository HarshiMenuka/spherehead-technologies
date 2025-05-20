// src/app/pricing/page.tsx
'use client';
import React, { Suspense, lazy } from 'react';
import './page.css';
import Spline from '@splinetool/react-spline';

// Lazy load components
const PricingPlans = lazy(() => import('../../components/PricingPlans'));
const JoinUs = lazy(() => import('../../components/Joinus'));
const FAQ = lazy(() => import('../../components/FAQ'));

function Pricing() {
  return (
    <>
      <div className="home-container">
        <div className="spline-wrapper">
          <Spline scene="/images/clarity_stream/scene.splinecode" />
        </div>
        <div className="text-section">
          <h1 className="heading">Whole Sphere of tech <br />satisfying all your needs</h1>
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