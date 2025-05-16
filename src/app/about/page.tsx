'use client';
import React from 'react';
import TeamProfile from '../../components/ui/teamprofile';
import './page.css';

import SectionHeader from "@/components/sectionheader";
import AboutHero from "@/components/ui/about-hero";
import { AboutCount } from "@/components/ui/aboout-counts";

const teamMembers = [
  {
    name: "John Smith",
    position: "Chief Technology Officer",
    qualification: "MSc in Computer Science",
    university: "University of Colombo",
    image: "/images/user1.jpg",
    linkedinLink: "https://linkedin.com/in/johnsmith",
    facebookLink: "https://facebook.com/johnsmith",
    instagramLink: "https://instagram.com/johnsmith"
  },
  {
    name: "Sarah Johnson",
    position: "Lead Developer",
    qualification: "BSc in Software Engineering",
    university: "MIT",
    image: "/images/user2.jpg",
    linkedinLink: "https://linkedin.com/in/sarahjohnson",
    facebookLink: "https://facebook.com/sarahjohnson",
    instagramLink: "https://instagram.com/sarahjohnson"
  },
  {
    name: "Michael Chen",
    position: "UI/UX Designer",
    qualification: "MA in Digital Design",
    university: "Stanford University",
    image: "/images/user3.jpg",
    linkedinLink: "https://linkedin.com/in/michaelchen",
    facebookLink: "https://facebook.com/michaelchen",
    instagramLink: "https://instagram.com/michaelchen"
  },
  {
    name: "Emily Davis",
    position: "Backend Engineer",
    qualification: "BSc in Computer Engineering",
    university: "Georgia Tech",
    image: "/images/user4.jpg",
    linkedinLink: "https://linkedin.com/in/emilydavis",
    facebookLink: "https://facebook.com/emilydavis",
    instagramLink: "https://instagram.com/emilydavis"
  },
  {
    name: "David Kim",
    position: "DevOps Engineer",
    qualification: "MSc in Cloud Computing",
    university: "UC Berkeley",
    image: "/images/user5.jpg",
    linkedinLink: "https://linkedin.com/in/davidkim",
    facebookLink: "https://facebook.com/davidkim",
    instagramLink: "https://instagram.com/davidkim"
  },
  {
    name: "Lisa Wang",
    position: "Product Manager",
    qualification: "MBA in Technology Management",
    university: "Harvard University",
    image: "/images/user6.jpg",
    linkedinLink: "https://linkedin.com/in/lisawang",
    facebookLink: "https://facebook.com/lisawang",
    instagramLink: "https://instagram.com/lisawang"
  }
];

export function FoundersMessage() {
  return (
    <section className="founder-section mt-12">
      <div className="founder-container">
        <div className="founder-left">
          <span className="founder-label">Founder</span>
          <h1 className="founder-title">Founder's<br />Message</h1>
          <div className="founder-image-placeholder" />
        </div>
        <div className="founder-right">
          <div className="founder-quote-mark">"</div>
          <div className="founder-message">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="founder-quote-mark founder-quote-mark-bottom">"</div>
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

        <div>
          <AboutHero />
        </div>

        {/* Global Success Section */}
        <SectionHeader
          overline="Status"
          title="Our Global Success"
          description=""
        />

        <div className="mt-10">
          <AboutCount />
        </div>

        {/* Meet the Team Header */}
        <SectionHeader
          overline="Team"
          title="Meet Our Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center mt-8 px-4 max-w-[900px] mx-auto">
        {teamMembers.map((member, index) => (
          <TeamProfile
            key={index}
            name={member.name}
            position={member.position}
            qualification={member.qualification}
            university={member.university}
            image={member.image}
            linkedinLink={member.linkedinLink}
            facebookLink={member.facebookLink}
            instagramLink={member.instagramLink}
          />
        ))}
      </div>

      {/* Founder Section */}
      <FoundersMessage />
    </div>
  );
}
