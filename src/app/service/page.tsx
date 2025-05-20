"use client";
import React, { Suspense } from "react";
import Loading from "../../components/ui/loading";
import Whyservices from "../../components/why";
import SectionHeader from "../../components/sectionheader";
import StickyServicesCards from "../../components/StickyServicesCards";
import JoinUsSection from "../../components/Joinus";
import Spline from "@splinetool/react-spline";

import "../page.css";

export default function ServicePage() {
  return (
    <main className="text-white">
      {/* Section: Header Spacer */}
      <div className="relative w-full h-[100vh]">
        {/* Spline background */}
        <Suspense fallback={<Loading />}>
          <div className="absolute inset-0 z-0">
            <Spline scene="/images/abstract_nirvana/scene.splinecode" />
          </div>
        </Suspense>

        {/* SectionHeader overlayed on top */}
        <section className="relative z-10 pt-[150px] text-center bg-transparent">
          <SectionHeader
            overline=""
            title={<span className="text-[3rem] font-normal">We Create Solution for Your Business</span>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </section>
      </div>

      {/* Section: Why Services */}
      <Suspense fallback={<Loading />}>
        <section>
          <Whyservices />
        </section>
      </Suspense>

      {/* Section: Sticky Card Services Display */}
      <Suspense fallback={<Loading />}>
        <StickyServicesCards />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <section>
          <JoinUsSection />
        </section>
      </Suspense>
    </main>
  );
}
