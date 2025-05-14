"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { IconDeviceMobile, IconCode, IconWorld, IconServer } from "@tabler/icons-react";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return (
    <div className="w-full h-full py-10 md:py-20 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-[#64B5F6] text-sm mb-2">Services</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What we do?</h2>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8 mb-8">
          <div className="max-w-2xl mb-4 md:mb-0">
            <p className="text-gray-300 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex justify-center md:justify-end md:items-end md:h-[72px] w-full md:w-auto">
            <button className="bg-[#64B5F6] text-white px-4 md:px-6 py-2 rounded-md hover:bg-[#5AA3E8] transition-colors whitespace-nowrap text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Carousel items={cards} />
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