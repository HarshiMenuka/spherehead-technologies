import React from 'react';

interface TeamProfileProps {
  name: string;
  position: string;
  qualification: string;
  image: string;
  linkedinLink?: string;
  facebookLink?: string;
  instagramLink?: string;
}

const TeamProfile: React.FC<TeamProfileProps> = ({
  name,
  position,
  qualification,
  image,
  linkedinLink,
  facebookLink,
  instagramLink,
}) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-card-img" />
      <div className="team-card-info">
        <div className="team-card-overlay">
          <div className="team-card-main">
            <span className="team-card-name">{name}</span>
            <span className="team-card-position">{position}</span>
          </div>
          <span className="team-card-qualification-hover">{qualification}</span>
          <div className="team-card-socials-hover">
            {linkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/Linkedin.svg" alt="LinkedIn" />
              </a>
            )}
            {instagramLink && (
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/Instagram.svg" alt="Instagram" />
              </a>
            )}
            {facebookLink && (
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/Facebook.svg" alt="Facebook" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;