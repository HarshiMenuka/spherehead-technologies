'use client';
import React from 'react';
import TeamProfile from '../../components/ui/teamprofile';
import './page.css';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111] py-20">


   

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
      </div>


 
  );
}
