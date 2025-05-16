'use client';
import React, { Suspense, lazy } from 'react';
import './page.css';

// Lazy load components
const PricingPlans = lazy(() => import('../../components/PricingPlans'));
const JoinUs = lazy(() => import('../../components/Joinus'));

function Pricing() {
  return (
    <PricingPlans />
  );
}

export default Pricing;