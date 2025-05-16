import React from 'react';
import './aboutflip.css';

interface FlipCardProps {
  image: string;
  description: string;
  width?: string;
  height?: string;
}

const AboutFlip: React.FC<FlipCardProps> = ({ 
  image, 
  description, 
  width = '300px', 
  height = '300px' 
}) => {
  return (
    <div className="flip-card" style={{ width, height }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Card front" />
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFlip;
