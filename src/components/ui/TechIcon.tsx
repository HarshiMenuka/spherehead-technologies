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
      className="flex items-center justify-center bg-[#151515] bg-opacity-20 
                 rounded-md transition-shadow duration-300 
                 w-20 h-20 sm:w-16 sm:h-16 md:w-13 md:h-13 lg:w-18 lg:h-18 p-2.5 sm:p-2 md:p-3 lg:p-4"
      style={{
        boxShadow: isHovered ? `0 0 8px ${shadowColor}` : 'none',
        border: "1px solid rgba(135, 135, 135,0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="h-10 w-10 sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16"
      />
    </div>
  );
};
