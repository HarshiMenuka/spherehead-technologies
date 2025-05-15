"use client"
import React from "react";
import Whyservices from '../../components/why';
import SectionHeader from '../../components/sectionheader';

export default function ServicePage() {
 return (
    <main>
      {/* You can add a Services Header or Banner here */}
      <Whyservices />


      <>
      <SectionHeader
        overline="Our Services"
        title="Comprehensive Solutions for Your Business Needs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </>
      {/* Add other components or sections for your services page here */}
    </main>
  );
}