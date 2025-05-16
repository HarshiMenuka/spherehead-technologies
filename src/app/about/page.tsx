'use client';
import React from 'react';
import TeamProfile from '../../components/ui/teamprofile';
import './page.css';

import SectionHeader from "@/components/sectionheader";
import AboutHero from "@/components/ui/about-hero";
import { AboutCount } from "@/components/ui/aboout-counts";
import AboutFlip from '@/components/ui/aboutflip';
import JoinUsSection from '@/components/Joinus';

const teamMembers = [
  {
    name: "John Smith",
    position: "Chief Technology Officer",
    qualification: "MSc in Computer Science",
    image: "/images/user1.jpg",
    linkedinLink: "https://linkedin.com/in/johnsmith",
    facebookLink: "https://facebook.com/johnsmith",
    instagramLink: "https://instagram.com/johnsmith"
  },
];

export function FoundersMessage() {
  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="founder-left">
          <span className="founder-label">Founder</span>
          <h1 className="founder-title">Founder’s<br />Message</h1>
          <div className="founder-image-placeholder" />
        </div>
        <div className="founder-right">
          <div className="founder-quote-mark">“</div>
          <div className="founder-message">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="founder-quote-mark founder-quote-mark-bottom">”</div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111] py-20">
    

      {/* About Hero Section */}
      <div className="about-hero-container mt-20">
        <SectionHeader
          overline=""
          title="We Create Solution for Your Business"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="mt-10">
          <AboutHero />
        </div>

        {/* Global Success Section */}
        <SectionHeader
          overline=""
          title="Our Global Success"
          description=""
        />

        <div className="mt-10">
          <AboutCount />
        </div>

        {/* Meet the Team Header */}
        <SectionHeader
          overline=""
          title="Meet Our Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
         {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-16">
        {teamMembers.map((member, index) => (
          <TeamProfile
            key={index}
            name={member.name}
            position={member.position}
            qualification={member.qualification}
            image={member.image}
            linkedinLink={member.linkedinLink}
            facebookLink={member.facebookLink}
            instagramLink={member.instagramLink}
          />
        ))}
      </div>

        {/* Founder Section */}
      <FoundersMessage />

   <AboutFlip 
  image="/images/user2.jpg"
  description="Your description text here"
  width="200px"
  height="300px"
/>
<JoinUsSection />
    </div>
  );
}
