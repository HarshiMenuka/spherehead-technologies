'use client';
import React from 'react';
import LargeCard from '../../../components/LargeCard';
import SmallCard from '../../../components/SmallCard';
import SectionHeader from '../../../components/sectionheader';
import Discript from '../../../components/portfoliodescription';

export default function Pricing() {
  return (
    // Top-level wrapper with true black background
    <main className="bg-black text-white min-h-screen">
      <section className="px-4 py-40 space-y-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          overline="Our Services"
          title="Comprehensive Solutions for Your Business Needs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        {/* Large Card */}
        <LargeCard
          image="/images/user1.jpg"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />

        {/* Row of Three Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SmallCard image="/images/user2.jpg" />
          <SmallCard image="/images/user3.jpg" />
          <SmallCard image="/images/user4.jpg" />
        </div>

        <Discript
          
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
 <Discript
          
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        
      </section>
    </main>
  );
}
