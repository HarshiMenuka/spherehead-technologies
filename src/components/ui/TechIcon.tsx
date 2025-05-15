import { useState } from 'react';

interface TechIconProps {
  src: string;
  alt: string;
  shadowColor: string;
}

export const TechIcon = ({ src, alt, shadowColor }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center bg-[#151515] bg-opacity-20 p-2 sm:p-2.5 md:p-3 rounded-md transition-shadow duration-300"
      style={{
        width: "75px",
        height: "75px",
        boxShadow: `0 0 8px ${isHovered ? shadowColor : 'rgba(0, 0, 0, 0)'}`,
        border: "1px solid rgba(135, 135, 135,0.1)",
        borderRadius: "0.5rem",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className="h-10 w-10" />
    </div>
  );
}; 