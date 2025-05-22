'use client';
import React from 'react';
import TeamProfile from '../../components/ui/teamprofile';
import './page.css';

// import founderImage from '@images/AboutPage/founder.png';

import SectionHeader from "@/components/sectionheader";
import AboutHero from "@/components/ui/about-hero";
import { AboutCount } from "@/components/ui/aboout-counts";
import AboutFlip from '@/components/ui/aboutflip';
import JoinUsSection from '@/components/Joinus';

const teamMembers = [
  {
    name: "Harshi Menuka",
    position: "Fullstack Lead",
    qualification: "Bsc in ICT",
    university: "University of Colombo",
    image: "/images/team/harshi.jpg",
    linkedinLink: "https://linkedin.com/in/johnsmith",
    facebookLink: "https://facebook.com/johnsmith",
    instagramLink: "https://instagram.com/johnsmith"
  },
  {
    name: "Asith Nirmal",
    position: "UI/UX Lead",
    qualification: "BSc in CS",
    university: "University of Colombo",
    image: "/images/team/asith.jpg",
    linkedinLink: "https://linkedin.com/in/sarahjohnson",
    facebookLink: "https://facebook.com/sarahjohnson",
    instagramLink: "https://instagram.com/sarahjohnson"
  },
  {
    name: "Hasini Wijemanna",
    position: "Full Stack Developer",
    qualification: "Bsc in CS",
    university: "IIT",
    image: "/images/team/hasini.JPG",
    linkedinLink: "https://linkedin.com/in/michaelchen",
    facebookLink: "https://facebook.com/michaelchen",
    instagramLink: "https://instagram.com/michaelchen"
  },
  {
    name: "Yeshan Binara",
    position: "UI/UX Designer",
    qualification: "BICT",
    university: "University of Vauniya",
    image: "/images/team/yeshan.jpg",
    linkedinLink: "https://linkedin.com/in/emilydavis",
    facebookLink: "https://facebook.com/emilydavis",
    instagramLink: "https://instagram.com/emilydavis"
  },
  {
    name: "Harithe Bandara",
    position: "Full Stack Developer",
    qualification: "Bsc in Software Engineering",
    university: "SLIIT",
    image: "/images/team/harithe.jpg",
    linkedinLink: "https://linkedin.com/in/davidkim",
    facebookLink: "https://facebook.com/davidkim",
    instagramLink: "https://instagram.com/davidkim"
  },
  {
    name: "Disni Dinuwani",
    position: "Full Stack Developer",
    qualification: "Bsc in Software Engineering",
    university: "ICBT",
    image: "/images/team/disney.jpg",
    linkedinLink: "https://linkedin.com/in/lisawang",
    facebookLink: "https://facebook.com/lisawang",
    instagramLink: "https://instagram.com/lisawang"
  }
];

function FoundersMessage() {
  return (
    <section className="founder-section mt-12 bg-[#161616]">
      <div className="founder-container">
        <div className="founder-left">
          <span className="founder-label">Founder</span>
          <h1 className="founder-title">Founder&apos;s<br />Message</h1>
          <img
            src="/images/AboutPage/founder.png"
            alt="Founder"
            className="w-[90%] h-[350px] rounded-[24px] mt-6 object-cover"
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

function ValueDriven() {
  return (
    <section className="value-section-custom">
      <div className="value-content-custom">

        <div className="value-text-custom">
          <span className="value-overline">Why</span>
          <h1 className="value-title">We are value driven</h1>
          <p className="value-description">
            At the core of everything we do is a strong commitment to delivering real, measurable value. We don’t just focus on outcomes—we focus on the impact behind them.
            By combining purpose, integrity, and innovation, we build lasting partnerships and solutions that truly make a difference.</p>
          <div className="value-points-list">
            <div className="value-point">
              <img src="/images/compass.svg" alt="Personalized Service" className="value-point-icon" />
              <div>
                <div className="value-point-title">Personalized Service</div>
                <div className="value-point-desc">We tailor our approach to fit your unique needs, ensuring every solution feels like it was built just for you.</div>
              </div>
            </div>
            <div className="value-point">
              <img src="/images/compass.svg" alt="Innovative Solutions" className="value-point-icon" />
              <div>
                <div className="value-point-title">Innovative Solutions</div>
                <div className="value-point-desc">We bring fresh ideas and creative thinking to every challenge, turning complexity into clarity.</div>
              </div>
            </div>
            <div className="value-point">
              <img src="/images/compass.svg" alt="Proven Track Record" className="value-point-icon" />
              <div>
                <div className="value-point-title">Proven Track Record</div>
                <div className="value-point-desc">With a history of successful projects and happy clients, we deliver results you can trust—time and time again.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="value-flipcards-grid">
          <div className="value-top">
            <AboutFlip
              image="/images/coffee2.jpg"
              description="Our team's daily fuel is coffee, but we suspect it's 90% caffeine and 10% magic."
              width="300px"
              height="200px"
            />
            <AboutFlip
              image="/images/coffee3.jpg"
              description="Our team chat is a mix of work related discussions and memes we have our priorities straight."
              width="300px"
              height="200px"
            />
          </div>
          <div className="value-bottom">
            <AboutFlip
              image="/images/coffee1.jpg"
              description="Our team motto is 'work hard, laugh harder', it's been proven to increase productivity!"
              width="300px"
              height="200px"
            />
            <AboutFlip
              image="/images/coffee4.jpg"
              description="We once had a heated debate about which fictional character would win in a fight."
              width="300px"
              height="200px"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#161616] py-20">
      {/* About Hero Section */}
      <div className="about-hero-container mt-20">
        <SectionHeader
          overline=""
          title={<span className="text-[3rem] font-normal">Innovative Solutions Crafted for Your Business</span>}
          description="We blend strategy, design, and technology to create solutions that drive real business results.."
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
          description="We're a team of curious minds, creative thinkers, and tech enthusiasts who love what we do. From developers and designers to strategists and problem-solvers, we bring our unique skills together to make awesome things happen."
        />
      </div>

      {/* Team Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-7xl mx-auto">
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
