"use client";
import React from "react";
import { cn } from "@/lib/utils";
import styles from "../styles/stickyCards.module.css";
// Service data with colors, icons and descriptions
const services = [
  {
    id: 1,
    title: "Mobile Development",
    description:
      "We craft user-friendly and high-performance mobile apps that bring your business directly to your customers, delivering smooth and consistent experiences across all devices.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
    color: "bg-blue-500",
    icon: "📱",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "We build smart, reliable software solutions that streamline your operations and enhance user experiences designed to work seamlessly across platforms and scale with your business.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    color: "bg-amber-500",
    icon: "💻",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "We create fast, responsive, and visually engaging websites that bring your brand to life online—optimized for performance, usability, and seamless access across all devices.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60",
    color: "bg-indigo-500",
    icon: "🌐",
  },
  {
    id: 4,
    title: "IT Support and Maintenance",
    description:
      "We provide reliable IT support and proactive maintenance services to keep your systems running smoothly, minimize downtime, and ensure your technology works seamlessly around the clock.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    color: "bg-rose-500",
    icon: "🔧",
  },
  {
    id: 5,
    title: "Graphic Design",
    description:
      "We transform ideas into impactful visuals that capture attention and communicate your brand's message effectively, creating memorable designs that resonate with your target audience.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
    color: "bg-green-500",
    icon: "🎨",
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging user experiences that guide customers smoothly through your digital products, balancing aesthetic appeal with practical functionality.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
    color: "bg-purple-500",
    icon: "✨",
  },
];

const StickyServicesCards = () => {
  return (
    <section className="bg-[#111] py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2">
            Our Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of services designed to power your
            digital transformation
          </p>
        </div>

        <ul className={styles.cardsContainer}>
          {services.map((service, index) => (
            <li key={service.id} className={styles.card}>
              <div
                className={cn(
                  styles.cardBody,
                  "bg-[#1a1a1a] border border-neutral-800 overflow-hidden"
                )}
              >
                <div className="flex items-center gap-5 mb-5">
                  <div
                    className={cn(
                      "flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full text-2xl",
                      service.color
                    )}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-5">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                  <div className="md:col-span-1">
                    <div className="h-28 md:h-32 rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
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
