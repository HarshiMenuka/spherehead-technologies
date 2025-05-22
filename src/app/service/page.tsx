"use client";
import React, { Suspense } from "react";
import Loading from "../../components/ui/loading";
import Whyservices from "../../components/why";
import SectionHeader from "../../components/sectionheader";
import StickyServicesCards from "../../components/StickyServicesCards";
import JoinUsSection from "../../components/Joinus";
import Spline from "@splinetool/react-spline";
import Articles from "../../components/Article";

import "../page.css";

export default function ServicePage() {
  return (
    <main className="text-white bg-[#161616]">
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
            title={
              <span className="text-[3rem] font-normal">
                Solutions Designed to Move Your Business Forward
              </span>
            }
            description="From strategy to execution, we offer a full range of digital and IT services designed to help your business grow, adapt, and thrive. Whether you need a custom-built solution or expert support, we’re here to deliver with precision and care."
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

      {/* Section: Join Us */}
      <Suspense fallback={<Loading />}>
        <section className="mt-30 bg-[#161616]">
          <JoinUsSection />
        </section>
      </Suspense>

      
    </main>
  );
}
