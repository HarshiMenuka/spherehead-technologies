import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="about-hero-image relative w-full max-w-6xl mx-auto h-[300px] mt-5">
        <Image
          src="/about/aboutHero.png"
          alt="About Spherehead Technologies"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Description Section */}
      <div className="about-hero-description max-w-[90rem] mx-auto px-6 py-8">
        <p className="text-lg  leading-relaxed text-white">
          At Spherehead Technologies, we are more than just a software company
          — we are your digital growth partner. We specialize in crafting
          tailored solutions through Website Design & Development, Mobile
          Application Development, Software Solutions, UI/UX Design, and
          beyond. Our passionate team blends creativity, technology, and
          strategy to help businesses of all sizes thrive in the digital world.
          Whether you&apos;re a startup or an established brand, we&apos;re here to
          elevate your online presence and turn your ideas into reality.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
