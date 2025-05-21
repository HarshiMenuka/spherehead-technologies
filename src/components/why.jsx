"use client";

import React from "react";

const features = [
  {
    title: "Expertise in Latest Tech Stacks",
    description:
      "Harnessing the power of the latest technologies to create future-ready solutions that elevate your business.",
  },
  {
    title: "Agile and Rapid Development",
    description:
      "Delivering faster, adaptable solutions that evolve with your needs, ensuring quick turnarounds without sacrificing quality.",
  },
  {
    title: "Seamless Integration",
    description:
      "Ensuring smooth integration with your existing systems for efficient workflows and uninterrupted operations.",
  },
  {
    title: "Human-Centered Innovation",
    description:
      "Focusing on user experience to design solutions that are intuitive, impactful, and designed with real people in mind.",
  },
  {
    title: "Reliable & Secure Development",
    description:
      "Building dependable, secure solutions that safeguard your business and provide peace of mind.",
  },
  {
    title: "Code Quality and Version Control",
    description:
      "Maintaining exceptional code quality with robust version control to ensure scalability, reliability, and smooth collaboration.",
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
            Unlocking the true potential of your business through innovative solutions that drive growth and streamline operations. By combining creativity and technology, every solution is designed to tackle challenges and deliver real results, empowering your business to thrive in a dynamic world.
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
