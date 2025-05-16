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
          <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" />
        </div>
        <div className="text-section">
          <h1 className="heading">Pick your type of Project</h1>
          <h2 className="subheading">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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