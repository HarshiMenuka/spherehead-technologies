import React from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Mobile Development",
    description: "We specialize in crafting innovative and scalable software solutions tailored to your business needs. From web and mobile applications to enterprise systems, we ensure seamless functionality, security, and performance. Our expertise spans UI/UX design, backend development, and cloud integration, delivering high-quality, efficient, and future-ready software solutions.",
    imagePosition: "right",
  },
  {
    title: "Software Development",
    description: "We specialize in crafting innovative and scalable software solutions tailored to your business needs. From web and mobile applications to enterprise systems, we ensure seamless functionality, security, and performance. Our expertise spans UI/UX design, backend development, and cloud integration, delivering high-quality, efficient, and future-ready software solutions.",
    imagePosition: "left",
  },
  {
    title: "Web Development",
    description: "We specialize in crafting innovative and scalable software solutions tailored to your business needs. From web and mobile applications to enterprise systems, we ensure seamless functionality, security, and performance. Our expertise spans UI/UX design, backend development, and cloud integration, delivering high-quality, efficient, and future-ready software solutions.",
    imagePosition: "right",
  },
  {
    title: "IT Support and Maintenance",
    description: "We specialize in crafting innovative and scalable software solutions tailored to your business needs. From web and mobile applications to enterprise systems, we ensure seamless functionality, security, and performance. Our expertise spans UI/UX design, backend development, and cloud integration, delivering high-quality, efficient, and future-ready software solutions.",
    imagePosition: "left",
  },
  {
    title: "Graphic Design",
    description: "We specialize in crafting innovative and scalable software solutions tailored to your business needs. From web and mobile applications to enterprise systems, we ensure seamless functionality, security, and performance. Our expertise spans UI/UX design, backend development, and cloud integration, delivering high-quality, efficient, and future-ready software solutions.",
    imagePosition: "right",
  },
  {
    title: "UI/UX",
    description: "We specialize in crafting innovative and scalable software solutions tailored to your business needs. From web and mobile applications to enterprise systems, we ensure seamless functionality, security, and performance. Our expertise spans UI/UX design, backend development, and cloud integration, delivering high-quality, efficient, and future-ready software solutions.",
    imagePosition: "left",
  },
];

const defaultListItems = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
];

export default function ServicesList() {
  return (
    <section className="bg-[#111] py-[72px]">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-10">
{services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          listItems={defaultListItems}
          imagePosition={service.imagePosition}
        />
      ))}
         </div>
      
    </section>
  );
}
