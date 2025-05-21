import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="about-hero-image relative w-full max-w-6xl mx-auto h-[300px] mt-5">
        <Image
          src="/images/AboutPage/aboutHero.png"
          alt="About Spherehead Technologies"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Description Section */}
      <div className="about-hero-description max-w-[90rem] mx-auto px-6 py-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
          We’re a dynamic team of developers, designers, and digital strategists, driven by passion and innovation. 
          We specialize in crafting powerful websites and delivering intelligent IT solutions that help businesses of all sizes succeed in the digital world. 
          With a global perspective and an unwavering commitment to quality, we turn ideas into impactful digital experiences.
        </p>
      </div>

    </div>
  );
};

export default AboutHero;
