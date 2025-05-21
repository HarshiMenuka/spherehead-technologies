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
            We are a full-service IT solutions company specializing in website development, digital design, and custom technology services. Our mission is to help businesses grow by creating powerful online experiences and providing reliable IT support tailored to their needs.From crafting responsive websites to delivering end-to-end technical solutions, we combine creativity, technology, and strategy to bring your vision to life.
          </p>
          <button
            onClick={() => router.push('/service')}
            style={{ color: 'black' }}
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
    description: "From responsive websites and e-commerce platforms to mobile apps and custom portals we offer curated development services delivering solutions across multiple platforms.",
    image: "/images/HomeServices/software engineer.jpg"
  },
  {
    icon: <IconCode className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "From wireframes to final visuals our UI/UX Design services focus on creating clean, intuitive, and engaging user experiences.",
    image: "/images/HomeServices/UI UX Design.jpg"
  },
  {
    icon: <IconWorld className="w-8 h-8" />,
    title: "Quality Assurance & Testing",
    description: "Experts work closely with the development teams to drive efficient risk-based testing, targeting innovation challenges. We specialize in testing methods implemented on cutting-edge technologies and advanced architectures.",
    image: "/images/HomeServices/Quality Assurance & Testing in IT.jpg"
  },
  {
    icon: <IconCode className="w-8 h-8" />,
    title: "Software Maintenance & Support",
    description: "Improving application’s reliability and relevance by fixing bugs, helping users, enhancing features, adapting to changes, improving performance, updating documentation, and proactively monitoring for issues.",
    image: "/images/HomeServices/Software Maintenance & Support.jpg"
  },
  {
    icon: <IconWorld className="w-8 h-8" />,
    title: "AI, ML & Data Services",
    description: "Creating and using of technologies that allow machines to learn from data, make predictions or decisions, and manage and analyze data to extract insights",
    image: "/images/HomeServices/AI, ML & Data Services.jpg"
  },
  {
    icon: <IconServer className="w-8 h-8" />,
    title: "IT Consulting",
    description: "IT consulting and advisory services offering strategic guidance, tailored insights, and recommendations to optimize infrastructure, streamline operations, and boost business growth.",
    image: "/images/HomeServices/IT Consulting.jpg"
  },
  {
    icon: <IconWorld className="w-8 h-8" />,
    title: "Research & Innovation (R&D)",
    description: "Developing prototypes, exploring cutting-edge technologies while creating in-house tools to drive progressive, futuristic product innovation.",
    image: "/images/HomeServices/Research & Innovation (R&D).jpg"
  },
  {
    icon: <IconServer className="w-8 h-8" />,
    title: "Graphic Designing",
    description: "Designing cornerstone of transforming information into clear visuals, building brand identity, influencing audiences, and combining creativity with functionality.",
    image: "/images/HomeServices/Graphic Designing.jpg"
  }
];