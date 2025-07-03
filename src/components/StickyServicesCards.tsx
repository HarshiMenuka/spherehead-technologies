"use client";
import React from "react";
import { cn } from "@/lib/utils";
import styles from "../styles/stickyCards.module.css";

const services = [
  // {
  //   id: 2,
  //   title: "Software Development",
  //   description:
  //     "From responsive websites and e-commerce platforms to mobile apps and custom portals we offer curated development services delivering solutions across multiple platforms. ",
  //   image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540569/software-dev_xup26m.png",

  //   color: "bg-amber-500",
  //   icon: "💻",
  //   keyfeatures: [
  //     "E-commerce Development.",
  //     "Web Portal Development",
  //     "CMS-Based Website Development",
  //     "Native Mobile App Development",
  //     "Native Mobile App Development",
  //   ],
  // },
  {
    id: 1,
    title: "Web Development",
    description:
      "From static pages to dynamic websites, our web development services provide scalable, secure, and visually engaging solutions tailored to meet your business objectives.",

    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540565/Web-dev_lz2lua.png",

    color: "bg-indigo-500",
    icon: "🌐",
    keyfeatures: [
      "Custom Website Development",
      "Responsive Design and Optimization",
      "E-commerce Website Development",
    ],
  },
  {
    id: 2,
    title: "Software Maintenance & Support",
    description:
      "Improving the application’s reliability and relevance by fixing bugs, helping users, enhancing features, adapting to changes, improving performance, updating documentation, and proactively monitoring for issues.",
    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540559/It-support_wfxbni.png",
    color: "bg-rose-500",
    icon: "🔧",
    keyfeatures: [
      "Bug fixing and performance improvements",
      "Version upgrades and feature enhancements",
      "Ongoing monitoring and optimization",
      "Client-requested changes and real-time updates",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "From wireframes to final visuals, our UI/UX Design services focus on creating clean, intuitive, and engaging user experiences. ",

    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540556/uiux_wxpdgj.png",
    color: "bg-purple-500",
    icon: "✨",
    keyfeatures: [
      "User research and analytics",
      "Wireframing and prototyping",
      "Modern user interface design",
      "Usability testing and user feedback analysis",
    ],
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "We transform ideas into impactful visuals that capture attention and communicate your brand's message effectively, creating memorable designs that resonate with your target audience.",
    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540567/Graphics_kb3nr8.png",
    color: "bg-green-500",
    icon: "🎨",
    keyfeatures: [
      "Branding & Identity ",
      "Marketing & Advertising",
      "Digital Design ",
      "Custom Visual Content ",
    ],
  },
  {
    id: 5,
    title: "Mobile Development",
    description:
      "Delivering feature-rich, user-friendly mobile applications across platforms, designed to boost engagement, ensure seamless usability, and provide exceptional performance for a diverse range of business needs.",

    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540551/mobile_app_dev_nodahp.png",

    color: "bg-blue-500",
    icon: "📱",
    keyfeatures: [
      "Native Mobile App Development (iOS & Android)",
      "Cross-Platform App Development (React Native, Flutter, etc.)",
      "Mobile App Maintenance & Support",
    ],
  },
  {
    id: 6,
    title: "Quality Assurance & Testing",
    description:
      "Experts work closely with the development teams to drive efficient risk-based testing, targeting innovation challenges. We specialize in testing methods implemented on cutting-edge technologies and advanced architectures. ",
    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751534993/QA_gqmege.png",
    color: "bg-purple-500",
    icon: "✨",
    keyfeatures: [
      "Manual and automated testing",
      "Security, performance, and stress testing",
      "End-user testing before launch",
    ],
  },
  {
    id: 7,
    title: "AI, ML & Data Services",
    description:
      "Creating and using of technologies that allow machines to learn from data, make predictions or decisions, and manage and analyze data to extract insights",
    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540554/Ai_fun1aq.png",
    color: "bg-purple-500",
    icon: "✨",
    keyfeatures: [
      "Predictive analytics and machine learning models",
      "AI-powered chatbots and automation",
      "Business intelligence dashboards and data visualization",
      "Data integration and management solutions",
    ],
  },
  {
    id: 8,
    title: " IT Consulting",
    description:
      "IT consulting and advisory services offering strategic guidance, tailored insights, and recommendations to optimize infrastructure, streamline operations, and boost business growth.",
    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540550/It-consulting_duhchv.png",
    color: "bg-purple-500",
    icon: "✨",
    keyfeatures: [
      "Technology stack advisory",
      "Software feasibility assessments",
      "MVP development strategy for startups",
      "Digital transformation planning",
    ],
  },
  {
    id: 9,
    title: "Research & Innovation (R&D)",
    description:
      "Developing prototypes, exploring cutting-edge technologies while creating in-house tools to drive progressive, futuristic product innovation.",
    image: "https://res.cloudinary.com/dwpwd2cbo/image/upload/v1751540561/Research_dfybwi.png",
    color: "bg-purple-500",
    icon: "✨",
    keyfeatures: [
      "Prototype and Proof-of-Concept (POC) development",
      "Exploring emerging tech (IoT, AR/VR)",
      "Building in-house tools and internal product innovation",
    ],
  },
];

const StickyServicesCards = () => {
  return (
    <section className={cn("bg-[#111] py-16 relative", styles.stickyCardsRoot)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2">
            Our Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ground Breaking Technology Services <br></br>To Make Your Life
            Easier
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From strategy and design to development and support, we provide
            end-to-end solutions tailored to your unique needs, helping you stay
            ahead in a fast-paced digital landscape.
          </p>
        </div>

        <ul className={styles.cardsContainer}>
          {services.map((service) => (
            <li key={service.id} className={styles.card}>
              <div
                className={cn(
                  styles.cardBody,

                  "bg-[#1a1a1a] border border-neutral-800 overflow-hidden "
                )}
              >
                <div className="flex items-center gap-5 mb-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-8">
                  <div className="md:col-span-1">
                    <div className="h-[250px] md:h-[200px] rounded-lg overflow-hidden">
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
                      {/* {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span className="text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </span>
                        </li>
                      ))} */}
                      <ul className="space-y-5">
                        {service.keyfeatures.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
