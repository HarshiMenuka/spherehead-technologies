"use client";

import React from 'react';
import { WorldMap } from '@/components/ui/world-map';

const stats = [
  {
    value: "7+",
    label: "Years of Experience"
  },
  {
    value: "100%",
    label: "Project Completion Rate"
  },
  {
    value: "15+",
    label: "Countries With Active Client Base"
  },
  {
    value: "200+",
    label: "Customer Rating"
  }
];

export function CountiesCart() {
  return (
    <div className="w-full bg-[#111] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#64B5F6] text-sm mb-2">Countries</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Global Reach
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>

        {/* Stats Grid */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 mb-[-50px] mx-12 md:mx-32">
  {stats.map((stat, index) => (
    <div 
      key={index} 
      className="bg-[#1E1E1E] p-3 md:p-3 rounded-lg text-center shadow-lg"
    >
      <div className="text-sm md:text-xl font-bold mb-1 ">{stat.value}</div>
  <div className="text-gray-400 text-sm  font-normal">{stat.label}</div>
    </div>
  ))}
</div>


        {/* World Map */}
        <div className="relative z-0 bg-[#161616] rounded-lg overflow-hidden">
          <WorldMap
            dots={[
              {
                start: { lat: 40.7128, lng: -74.0060 },
                end: { lat: 51.5074, lng: -0.1278 }
              },
              {
                start: { lat: 35.6762, lng: 139.6503 },
                end: { lat: 1.3521, lng: 103.8198 }
              },
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: 22.3193, lng: 114.1694 }
              }
            ]}
            lineColor="#64B5F6"
          />
        </div>
      </div>
    </div>
  );
}