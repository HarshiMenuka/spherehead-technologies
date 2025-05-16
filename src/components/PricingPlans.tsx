import React from 'react';
import SectionHeader from './sectionheader';
import { Computer } from 'lucide-react';

const PricingPlans = () => {
  return (
    <div className="py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 mt-10">Pick your type of Project</h1>
        <p className="text-gray-400 text-center mb-12 text-sm">&amp; view estimated Price ranges</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className="bg-[#2E2E2E] p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-[#3A3A3A] rounded-lg mb-4">
                <Computer className="w-6 h-6 text-[#96BDD9]" />
              </div>
              
              <h3 className="text-white text-lg font-medium mb-1">Web development</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold text-white">$1000</span>
                <span className="text-sm text-gray-400 ml-1">USD</span>
              </div>
              
              <p className="text-sm text-gray-400 mb-6">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="mr-2">✓</span>
                  Custom design & development
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="mr-2">✓</span>
                  CMS integration (e.g. WordPress)
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="mr-2">✓</span>
                  E-commerce functionality
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="mr-2">✓</span>
                  Basic SEO optimization
                </li>
              </ul>
              
              <button className="w-full bg-[#96BDD9] text-white py-2 rounded hover:bg-[#7BA7C5] transition-colors text-sm">
                Let's Talk
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans; 