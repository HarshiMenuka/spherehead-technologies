"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { IconDeviceMobile, IconCode, IconWorld, IconServer } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import '../styles/homeComponents.css';

export function AppleCardsCarouselDemo() {
  const router = useRouter();
  const cards = data.map((card, index) => (
    <Card 
      key={index} 
      card={{
        src: card.image,
        title: card.title,
        category: "",
        description: card.description,
        content: (
          <div className="flex flex-col gap-4">
            <div className="text-black dark:text-white">{card.icon}</div>
            <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
          </div>
        )
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-8 md:py-16 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-[#64B5F6] text-sm font-medium mb-2 text-center md:text-left">Services</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center md:text-left">What we do?</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-8 items-center md:items-start">
          <p className="text-gray-300 text-sm md:text-base max-w-2xl text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button 
            onClick={() => router.push('/service')} 
            style={{color:'black'}}
            className="contact-btn px-6 py-2 text-sm md:text-base whitespace-nowrap self-center md:self-start mt-0"
          >
            Learn More
          </button>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
const data = [
  {
    icon: <IconDeviceMobile className="w-8 h-8" />,
    title: "Software Development",
    description: "We craft user-friendly and high-performance mobile apps that bring your business directly to your customers, delivering smooth and consistent experiences across all devices.",
    image: "/images/software engineer.jpg"
  },
  {
    icon: <IconCode className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "We build smart, reliable software solutions that streamline your operations and enhance user experiences designed to work seamlessly across platforms and scale with your business.",
    image: "/images/UI UX Design.jpg"
  },
  {
    icon: <IconWorld className="w-8 h-8" />,
    title: "Quality Assurance & Testing",
    description: "We create fast, responsive, and visually engaging websites that bring your brand to life online—optimized for performance, usability, and seamless access across all devices.",
    image: "/images/Quality Assurance & Testing in IT.jpg"
  },
  {
    icon: <IconCode className="w-8 h-8" />,
    title: "Software Maintenance & Support",
    description: "We build smart, reliable software solutions that streamline your operations and enhance user experiences designed to work seamlessly across platforms and scale with your business.",
    image: "/images/Software Maintenance & Support.jpg"
  },
  {
    icon: <IconWorld className="w-8 h-8" />,
    title: "AI, ML & Data Services",
    description: "We create fast, responsive, and visually engaging websites that bring your brand to life online—optimized for performance, usability, and seamless access across all devices.",
    image: "/images/AI, ML & Data Services.jpg"
  },
  {
    icon: <IconServer className="w-8 h-8" />,
    title: "IT Consulting",
    description: "We provide reliable IT support and proactive maintenance services to keep your systems running smoothly, minimize downtime, and ensure your technology works seamlessly around the clock.",
    image: "/images/IT Consulting.jpg"
  },
    {
    icon: <IconWorld className="w-8 h-8" />,
    title: "Research & Innovation (R&D)",
    description: "We create fast, responsive, and visually engaging websites that bring your brand to life online—optimized for performance, usability, and seamless access across all devices.",
    image: "/images/Research & Innovation (R&D).jpg"
  },
  {
    icon: <IconServer className="w-8 h-8" />,
    title: "Graphic Designing",
    description: "We provide reliable IT support and proactive maintenance services to keep your systems running smoothly, minimize downtime, and ensure your technology works seamlessly around the clock.",
    image: "/images/Graphic Designing.jpg"
  }
];