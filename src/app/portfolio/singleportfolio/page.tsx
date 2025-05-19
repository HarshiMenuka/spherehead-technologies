'use client';
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SectionHeader from '../../../components/sectionheader';
import LargeCard from '../../../components/LargeCard';
import SmallCard from '../../../components/SmallCard';
import Discript from '../../../components/portfoliodescription';
import JoinUsSection from '../../../components/Joinus';
import '../../page.css';
import { projectsData } from '@/data/projects';

export default function SinglePortfolioPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = Number(searchParams.get('id')); 
  const project = projectsData.find(p => p.id === id);


  useEffect(() => {
    if (!project) {
      const timeout = setTimeout(() => {
        router.push('/'); // Redirect to homepage
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [project, router]);

  if (!project) {
    return <p className="h-screen flex justify-center items-center  bg-[#161616] text-lg m-0"style={{ color: 'white' }}> No project found. Redirecting to homepage...</p>;
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="px-4 py-40 space-y-10 max-w-7xl mx-auto">
        <SectionHeader
          overline="Our Work"
          title={project.title}
          description={project.description}
        />

        <LargeCard image={project.largeImage} description={project.description} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.smallImages.map((img, i) => (
            <SmallCard key={i} image={img} />
          ))}
        </div>

        {project.texts.map((txt, i) => (
          <Discript key={i} description={txt} />
        ))}

        <JoinUsSection />
      </section>
    </main>
  );
}
