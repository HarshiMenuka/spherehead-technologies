"use client";
import React, { Suspense } from "react";
import Loading from '../../components/ui/loading';
import Whyservices from '../../components/why';
import SectionHeader from '../../components/sectionheader';
import ServicesList from '../../components/ServicesList';
import JoinUsSection from '../../components/Joinus';
import Spline from '@splinetool/react-spline';

import '../page.css';

export default function ServicePage() {
  return (
    <main className="text-white">
      {/* Section: Header Spacer */}
      <div className="relative w-full h-[100vh]">
        {/* Spline background */}
        {/* <Suspense fallback={<Loading size="large" fullScreen={false} />}>
          <div className="absolute inset-0 z-0">
            <Spline scene="https://prod.spline.design/2BYPhGAm9V-fx62e/scene.splinecode" />
          </div>
        </Suspense> */}

        {/* SectionHeader overlayed on top */}
        <section className="relative z-10 pt-[150px] text-center bg-transparent">
          <SectionHeader
            overline=""
            title="We Create Solution for Your Business"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </section>
      </div>

      {/* Section: Why Services */}
      <Suspense fallback={<Loading size="large" fullScreen={false} />}>
        <section>
          <Whyservices />
        </section>
      </Suspense>

      {/* Section: Services List Header */}
      <section className="bg-[#111]">
        <SectionHeader
          overline="Our Services"
          title="Comprehensive Solutions for Your Business Needs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </section>

      {/* Section: Services List Cards */}
      <Suspense fallback={<Loading size="large" fullScreen={false} />}>
        <section>
          <ServicesList />
        </section>
      </Suspense>

      <Suspense fallback={<Loading size="large" fullScreen={false} />}>
        <section>
          <JoinUsSection />
        </section>
      </Suspense>
    </main>
  );
}
