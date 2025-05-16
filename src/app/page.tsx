"use client"
import { Suspense, lazy, useState, useEffect } from 'react';
import Loading from '../components/ui/loading';
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';
import Spline from '@splinetool/react-spline';

// Lazy load other components
const HomeGallery = lazy(() =>
  import('@/components/HomeGallery').then(module => ({
    default: module.HomeGallery
  }))
);
const TechStack = lazy(() => import('@/components/ui/tech-stack'));
const CountiesCart = lazy(() =>
  import('@/components/CountiesCart').then(module => ({
    default: module.CountiesCart
  }))
);
const Testimoinals = lazy(() => import('@/components/Testimonials'));
const JoinUsSection = lazy(() => import('@/components/Joinus'));

import './page.css';

export default function Home() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Shorter initial loading time
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // reduced from 1000ms to 500ms

    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="home-container">
        <div className="spline-wrapper">
          {/* <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" /> */}
        </div>
        <div className="text-section">
          <h1 className="heading">Whole Sphere of tech <br />satisfying all your needs</h1>
          <h2 className="subheading">
            Get the most reliable tech solutions, customized to your requirements built on trust without paying a hefty price tag
          </h2>
        </div>
      </div>

      {/* First component loaded immediately */}
      <AppleCardsCarouselDemo />

      {/* Other components lazy loaded */}
      {/* <Suspense fallback={<Loading />}> */}
        <>
          <TechStack />
          <HomeGallery />
          <CountiesCart />
          <Testimoinals />
          <JoinUsSection />
        </>
      {/* </Suspense> */}
    </>
  );
}
