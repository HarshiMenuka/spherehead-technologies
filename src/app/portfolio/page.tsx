'use client';
import React from 'react';
import Image from 'next/image';
import './page.css';
import SectionHeader from '../../components/sectionheader';
import Link from 'next/link';
import cardImage1 from '../../../public/images/img1.jpg';
import cardImage2 from '../../../public/images/img2.jpg';
import cardImage3 from '../../../public/images/img3.jpg';
import { projectsData } from '@/data/projects';

const Portfolio = () => {
  const projects = projectsData.slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* Header Section */}
      <section className="relative z-10 pt-[150px] text-left px-4">
        <SectionHeader
          overline=""
          title="We Create Solutions for Your Business"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </section>

      {/* Portfolio Cards */}
      <section className="py-20 px-4">
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={{ pathname: '/portfolio/singleportfolio', query: { id: project.id } }}
              className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={project.largeImage}
                alt={project.title}
                width={293}
                height={530}
                className="object-cover"
              />
            </Link>
          ))}
        </div>
      </section>


      {/* Our Work Text Block */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-4">Our work</h2>
          <p className="text-base leading-relaxed max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;