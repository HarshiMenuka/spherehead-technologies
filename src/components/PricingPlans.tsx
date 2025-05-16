import React from 'react';
import { Monitor, Smartphone, Palette, LayoutGrid, Share2, Globe } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: Monitor,
    price: 1000
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    price: 1000
  },
  {
    title: 'UI UX Design',
    icon: Palette,
    price: 1000
  },
  {
    title: 'Graphic Design',
    icon: LayoutGrid,
    price: 1000
  },
  {
    title: 'Social Media Marketing',
    icon: Share2,
    price: 1000
  },
  {
    title: 'Web development',
    icon: Globe,
    price: 1000
  }
];

const PricingPlans = () => {
  return (
    <div className="mt-0 lg:mt-35 py-20 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-medium text-white text-center lg:text-left mb-2 mt-10">
          Pick your type of Project
        </h1>
        <h1 className="text-1xl md:text-1xl font-medium text-white text-center lg:text-left mb-10 max-w-2xl">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
                <div className="flex items-center justify-center w-12 h-12 bg-[#2A2A2A] rounded-lg mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-[#96BDD9]" />
                </div>

                <h3 className="text-white text-lg font-medium mb-1 text-center">{service.title}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-2xl font-bold text-white">${service.price}</span>
                  <span className="text-sm text-gray-400 ml-1">USD</span>
                </div>

                <p className="text-sm text-gray-400 mb-6 text-center">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className="border-t border-[#2A2A2A] my-6"></div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-300">
                    <span className="mr-2 text-[#96BDD9]">✓</span>
                    Custom design & development
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <span className="mr-2 text-[#96BDD9]">✓</span>
                    CMS integration (e.g. WordPress)
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <span className="mr-2 text-[#96BDD9]">✓</span>
                    E-commerce functionality
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <span className="mr-2 text-[#96BDD9]">✓</span>
                    Basic SEO optimization
                  </li>
                </ul>
                
                <button className="w-full bg-[#96BDD9] text-white py-2 rounded hover:bg-[#7BA7C5] transition-colors text-sm">
                  Let's Talk
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans; 