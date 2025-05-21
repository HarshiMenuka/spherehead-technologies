"use client";
import React from "react";
import { cn } from "@/lib/utils";
import styles from "../styles/stickyCards.module.css";

const services = [
  {
    id: 1,
    title: "Mobile Development",
    description:
      "We craft user-friendly and high-performance mobile apps that bring your business directly to your customers, delivering smooth and consistent experiences across all devices.",
    image: "/images/mobile app dev.png",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "We build smart, reliable software solutions that streamline your operations and enhance user experiences designed to work seamlessly across platforms and scale with your business.",
    image: "/images/software-dev.png",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "We create fast, responsive, and visually engaging websites that bring your brand to life online—optimized for performance, usability, and seamless access across all devices.",
    image: "/images/Web-dev.png",
  },
  {
    id: 4,
    title: "IT Support and Maintenance",
    description:
      "We provide reliable IT support and proactive maintenance services to keep your systems running smoothly, minimize downtime, and ensure your technology works seamlessly around the clock.",
    image: "/images/It-support.png",
  },
  {
    id: 5,
    title: "Graphic Design",
    description:
      "We transform ideas into impactful visuals that capture attention and communicate your brand's message effectively, creating memorable designs that resonate with your target audience.",
    image: "/images/Graphics.png",
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging user experiences that guide customers smoothly through your digital products, balancing aesthetic appeal with practical functionality.",
    image: "/images/uiux.png",
  },
];

const StickyServicesCards = () => {
  return (
    <section className={cn("bg-[#111] py-16 relative", styles.stickyCardsRoot)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2">Our Offerings</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of services designed to power your digital transformation
          </p>
        </div>

        <ul className={styles.cardsContainer}>
          {services.map((service) => (
            <li key={service.id} className={styles.card}>
              <div
                className={cn(
                  styles.cardBody,
                  "border border-neutral-800 overflow-hidden p-6"
                )}
              >
                <div className="flex items-center gap-5 mb-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-5">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                  <div className="md:col-span-1">
                    <div className="h-40 md:h-48 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-5">
                    <h4 className="text-lg font-semibold text-white">
                      Key Features
                    </h4>
                    <ul className="space-y-5">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span className="text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StickyServicesCards;
