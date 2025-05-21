'use client';
import React from 'react';
import Image from 'next/image';
import './page.css';
import SectionHeader from '../../components/sectionheader';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

const Portfolio = () => {
  const projects = projectsData.slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* Header Section */}
      <section className="relative z-10 pt-[150px] text-left px-4">
        <SectionHeader
          overline=""
          title={<span className="text-[3rem] font-normal">Our Work Speaks for Itself</span>}
          description="Explore our portfolio of custom-designed websites, applications, and digital solutions—each built to solve unique business challenges and deliver solutions."
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


    
    </div>
  );
};

export default Portfolio;