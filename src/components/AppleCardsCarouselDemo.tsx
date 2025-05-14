"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { IconDeviceMobile, IconCode, IconWorld, IconServer } from "@tabler/icons-react";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return (
    <div className="w-full h-full py-20 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[#64B5F6] text-sm mb-2">Services</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What we do?</h2>
        <div className="relative flex items-start justify-between gap-8 mb-16">
          <div className="max-w-2xl relative">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex items-end h-[72px]">
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-md hover:bg-[#5AA3E8] transition-colors whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Carousel items={cards} />
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <p className="text-center text-gray-400">Tech Stack</p>
      </div>
    </div>
  );
}

const data = [
  {
    icon: <IconDeviceMobile className="w-8 h-8" />,
    title: "Mobile Development",
    description: "We craft user-friendly and high-performance mobile apps that bring your business directly to your customers, delivering smooth and consistent experiences across all devices."
  },
  {
    icon: <IconCode className="w-8 h-8" />,
    title: "Software Development",
    description: "We build smart, reliable software solutions that streamline your operations and enhance user experiences designed to work seamlessly across platforms and scale with your business."
  },
  {
    icon: <IconWorld className="w-8 h-8" />,
    title: "Web Development",
    description: "We create fast, responsive, and visually engaging websites that bring your brand to life online—optimized for performance, usability, and seamless access across all devices."
  },
  {
    icon: <IconServer className="w-8 h-8" />,
    title: "IT Support and Maintenance",
    description: "We provide reliable IT support and proactive maintenance services to keep your systems running smoothly, minimize downtime, and ensure your technology works seamlessly around the clock."
  },
  {
    icon: <IconCode className="w-8 h-8" />,
    title: "Software Development",
    description: "We build smart, reliable software solutions that streamline your operations and enhance user experiences designed to work seamlessly across platforms and scale with your business."
  },
  {
    icon: <IconWorld className="w-8 h-8" />,
    title: "Web Development",
    description: "We create fast, responsive, and visually engaging websites that bring your brand to life online—optimized for performance, usability, and seamless access across all devices."
  },
  {
    icon: <IconServer className="w-8 h-8" />,
    title: "IT Support and Maintenance",
    description: "We provide reliable IT support and proactive maintenance services to keep your systems running smoothly, minimize downtime, and ensure your technology works seamlessly around the clock."
  }
];