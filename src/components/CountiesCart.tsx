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
                start: { lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                end: { lat: 56.1304, lng: -106.3468, label: "Canada" },

              },
              {
                start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                end: { lat: 30.0902, lng: -95.7129, label: "USA" },

              },
              {
                 start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                end: { lat: -6.5380, lng: -85.7821, label: "Panama" },

              },
              {
                start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                end: { lat: 50.2639, lng: 9.5018, label: "Denmark" },


              },
              {
                   start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                  end: { lat: 30.8719, lng: 12.5674, label: "Italy" },


              },
              {
                start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                end: { lat: 25.0742, lng: 21.8243, label: "Greece" },


              },
              {
                 start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                 end: { lat: 61.5240, lng: 90.3188, label: "Russia" },

              },
              {
                start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                end: { lat: 56.8796, lng: 24.6032, label: "Latvia" },


              },
              {
                 start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                 end: { lat: -15.2105, lng: 101.9758, label: "Malaysia" },


              },
              {
                start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                end: { lat: 56.8796, lng: 30.6032, label: "Latvia" },


              },
               {
                  start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                  end: { lat: -15.2744, lng: 133.7751, label: "Australia" },


              },
               {
                  start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                  end: { lat: -15.7893, lng: 113.9213, label: "Indonesia" },



              },
               {
                  start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                  end: { lat: -5.0583, lng: 108.2772, label: "Vietnam" },



              },
               {
                   start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                  end: { lat: -5.8700, lng: 100.9925, label: "Thailand" },



              },
              {
                  start: {  lat:-8.8731, lng: 80.7718, label: "Sri Lanka" },
                  end: { lat: 26.2048, lng: 140.2529, label: "Japan" },



              },
            ]}
            lineColor="#64B5F6"
          />
        </div>
      </div>
    </div>
  );
}