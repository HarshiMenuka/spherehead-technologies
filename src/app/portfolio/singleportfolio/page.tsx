'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import SectionHeader from '../../../components/sectionheader';
import LargeCard from '../../../components/LargeCard';
import SmallCard from '../../../components/SmallCard';
import Discript from '../../../components/portfoliodescription';
import JoinUsSection from '../../../components/Joinus';
import '../../page.css';
const PROJECT_DATA = [
  {
    id: 1,
    largeImage: '/images/img1.jpg',
    title: 'Project One',
    description: 'Detailed write-up for Project One.',
    smallImages: ['/images/user1.jpg', '/images/user2.jpg', '/images/user3.jpg'],
    texts: [
      'First paragraph about Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Second paragraph with more details. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ]
  },
  {
    id: 2,
    largeImage: '/images/img2.jpg',
    title: 'Project Two',
    description: 'Detailed write-up for Project Two.',
    smallImages: ['/images/user4.jpg', '/images/user5.jpg', '/images/user6.jpg'],
    texts: [
      'First paragraph about Project Two. Ut enim ad minim veniam, quis nostrud exercitation.',
      'Second paragraph with more details. Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ]
  },
  {
    id: 3,
    largeImage: '/images/img3.jpg',
    title: 'Project Three',
    description: 'Detailed write-up for Project Three.',
    smallImages: ['/images/user7.jpg', '/images/user8.jpg', '/images/user9.jpg'],
    texts: [
      'First paragraph about Project Three. Duis aute irure dolor in reprehenderit.',
      'Second paragraph with more details. In voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ]
  }
];

export default function SinglePortfolioPage() {
  const params = useParams();

  // Ensure params.id is a string, fallback to '1'
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id ?? '1';
  const id = parseInt(rawId, 10);
  const project = PROJECT_DATA.find(p => p.id === id) || PROJECT_DATA[0];

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
