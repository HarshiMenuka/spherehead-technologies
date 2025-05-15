"use client";

import React from "react";

const features = [
  {
    title: "Expertise in Latest Tech Stacks",
    description:
      "Our team builds efficient solutions using modern and trending tech stacks.",
  },
  {
    title: "Agile and Rapid Development",
    description:
      "We ensure fast, flexible delivery through agile methodologies and sprints.",
  },
  {
    title: "Seamless Integration",
    description:
      "We create solutions that integrate effortlessly with your existing systems.",
  },
  {
    title: "Human Centered Innovation",
    description:
      "We blend technology with intuitive design for seamless user experiences.",
  },
  {
    title: "Reliable & Secure Development",
    description:
      "Our robust coding standards ensure high performance and security.",
  },
  {
    title: "Code Quality and Version Control",
    description:
      "We maintain clean, efficient code with proper version control and reviews.",
  },
];

export default function whyservices() {
  return (
    <section className="bg-[#111] text-white py-[72px] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto py-[72px]">
        {/* Header */}
        <div className="mb-12 ">
          <p className="text-sm text-blue-300 uppercase mb-2">Why</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Empowering Your Business
            <br />
            With Innovative Solutions
          </h2>
          <p className="text-gray-300 text-base max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-20">
          {/* Image or Placeholder */}
          <div className="bg-gray-800 rounded-xl aspect-[4/5] w-full" />

          {/* Features List */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
