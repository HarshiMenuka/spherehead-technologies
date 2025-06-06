'use client';
import React from 'react';
import TeamProfile from '../../components/ui/teamprofile';
import './page.css';
import Image from 'next/image';
// import founderImage from '@images/AboutPage/founder.png';

import SectionHeader from "@/components/sectionheader";
import AboutHero from "@/components/ui/about-hero";
import { AboutCount } from "@/components/ui/aboout-counts";
import AboutFlip from '@/components/ui/aboutflip';
import JoinUsSection from '@/components/Joinus';

const teamMembers = [
  {
    name: "John Smith",
    position: "CTO",
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
          <h1 className="founder-title">Founder&apos;s<br />Message</h1>
          <Image
            src="/images/AboutPage/founder.png"
            alt="Founder"
            className="w-[90%] h-[350px] rounded-[24px] mt-6 object-cover"
            width={500}
            height={200}
          />
        </div>
        <div className="founder-right">
          <div className="founder-quote-mark">&quot;</div>
          <div className="founder-message">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="founder-quote-mark founder-quote-mark-bottom">&quot;</div>
        </div>
      </div>
    </section>
  );
}

export function ValueDriven() {
  return (
    <section className="value-section-custom">
      <div className="value-content-custom">

        <div className="value-text-custom">
          <span className="value-overline">Why</span>
          <h1 className="value-title">We are value driven</h1>
          <p className="value-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </p>
          <div className="value-points-list">
            <div className="value-point">
              <Image src="/images/compass.svg" alt="Personalized Service" className="value-point-icon" />
              <div>
                <div className="value-point-title">Personalized Service</div>
                <div className="value-point-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
            <div className="value-point">
              <Image src="/images/compass.svg" alt="Innovative Solutions" className="value-point-icon" />
              <div>
                <div className="value-point-title">Innovative Solutions</div>
                <div className="value-point-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
            <div className="value-point">
              <Image src="/images/compass.svg" alt="Proven Track Record" className="value-point-icon" />
              <div>
                <div className="value-point-title">Proven Track Record</div>
                <div className="value-point-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="value-flipcards-grid">
          <div className="value-top">
            <AboutFlip
              image="/images/user2.jpg"
              description="Our team’s daily fuel is coffee, but we suspect it’s 90% caffeine and 10% magic."
              width="200px"
              height="300px"
            />
            <AboutFlip
              image="/images/user3.jpg"
              description="Our team chat is a mix of work related discussions and memes we have our priorities straight."
              width="320px"
              height="320px"
            />
          </div>
          <div className="value-bottom">
            <AboutFlip
              image="/images/user1.jpg"
              description="Our team motto is “work hard, laugh harder”, it’s been proven to increase productivity!"
              width="200px"
              height="300px"
            />
            <AboutFlip
              image="/images/user4.jpg"
              description="We once had a heated debate about which fictional character would win in a fight."
              width="320px"
              height="320px"
            />

          </div>
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
          title={<span className="text-[3rem] font-normal">We Create Solution for Your Business</span>}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-7xl mx-auto">
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
      <ValueDriven />


      <JoinUsSection />
    </div>
  );
}
