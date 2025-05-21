import React from 'react';
// import { Monitor, Smartphone, Palette, LayoutGrid, Share2, Globe } from 'lucide-react';

import {
  Code2,
  Palette,
  ShieldCheck,
  Wrench,
  BrainCircuit,
  Briefcase,
  FlaskConical,
  Image as ImageIcon,
} from 'lucide-react';

const services = [
  {
    title: 'Software Development',
    icon: Code2,
    price: 100000,
    description: 'End-to-end custom software solutions that solve real business problems and scale with your growth.',
    features: [
      'Custom application development',
      'API & third-party integrations',
      'Cloud-based solutions',
      'Agile development process',
    ],
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    price: 25000,
    description: 'We craft intuitive and visually engaging user interfaces to deliver a seamless digital experience.',
    features: [
      'User journey mapping',
      'Interactive wireframes',
      'Mobile-first responsive design',
      'High-fidelity UI mockups',
    ],
  },
  {
    title: 'Quality Assurance & Testing',
    icon: ShieldCheck,
    price: 25000,
    description: 'Ensure your product is bug-free and runs smoothly across all devices with our rigorous testing process.',
    features: [
      'Manual & automated testing',
      'Bug tracking and reporting',
      'Performance & load testing',
      'Cross-browser/device testing',
    ],
  },
  {
    title: 'Software Maintenance & Support',
    icon: Wrench,
    price: 20000,
    description: 'Keep your software running at its best with regular updates, bug fixes, and technical support.',
    features: [
      'Security updates',
      'Bug fixes & performance tuning',
      'Technical support',
      'Ongoing feature updates',
    ],
  },
  {
    title: 'AI, ML & Data Services',
    icon: BrainCircuit,
    price: 75000,
    description: 'Unlock the power of data with tailored AI and machine learning solutions for your business needs.',
    features: [
      'Custom AI model development',
      'Machine learning pipelines',
      'Data analytics & visualization',
      'Predictive analysis solutions',
    ],
  },
  {
    title: 'IT Consulting',
    icon: Briefcase,
    price: 10000,
    description: 'Get expert advice on optimizing your IT infrastructure, strategy, and technology choices.',
    features: [
      'Technology stack evaluation',
      'Digital transformation strategy',
      'System architecture planning',
      'Process automation insights',
    ],
  },
  {
    title: 'Research & Innovation (R&D)',
    icon: FlaskConical,
    price: 50000,
    description: 'Drive innovation through tailored R&D efforts to explore new technologies and market opportunities.',
    features: [
      'Prototype development',
      'Feasibility analysis',
      'Emerging tech exploration',
      'Innovation roadmap planning',
    ],
  },
  {
    title: 'Graphic Designing',
    icon: ImageIcon,
    price: 5000,
    description: 'Visually compelling designs that elevate your brand identity across print and digital platforms.',
    features: [
      'Brand identity design',
      'Marketing collateral',
      'Social media graphics',
      'Print & digital assets',
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="pt-0 mt-0 pb-20 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-medium text-white text-center lg:text-left mb-2 mt-0 pt-12">
          Pick your type of Project
        </h1>
        <h1 className="text-1xl md:text-1xl font-medium text-white text-center lg:text-left mb-10 max-w-2xl">
          Choose the type of digital solution that fits your business goals. Whether you're launching a new brand, upgrading your online store, or creating a platform to showcase your work, we have a solution for you.
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
                <h3 className="text-sm text-gray-400 ml-1 text-center">Starting from</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-2xl font-bold text-white">Rs{service.price}</span>
                  <span className="text-sm text-gray-400 ml-1">LKR</span>
                </div>

                <p className="text-sm text-gray-400 mb-6 text-center">
                  {service.description}
                </p>

                <div className="border-t border-[#2A2A2A] my-6"></div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <span className="mr-2 text-[#96BDD9]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="w-full bg-[#96BDD9] text-white py-2 rounded hover:bg-[#7BA7C5] transition-colors text-sm text-center block"
                >
                  Let&apos;s Talk
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
