import React from 'react';
import styles from './teamprofile.module.css';

interface TeamProfileProps {
  name: string;
  position: string;
  qualification: string;
  university: string;
  image: string;
  linkedinLink?: string;
  facebookLink?: string;
  instagramLink?: string;
}

const TeamProfile: React.FC<TeamProfileProps> = ({
  name,
  position,
  qualification,
  university,
  image,
  linkedinLink,
  facebookLink,
  instagramLink,
}) => {
  return (
    <div className={styles['team-card']}>
      <img src={image} alt={name} className={styles['team-card-img']} />
      <div className={styles['team-card-info']}>
        <div className={styles['team-card-overlay']}>
          <div className={styles['team-card-main']}>
            <span className={styles['team-card-name']}>{name}</span>
            <span className={styles['team-card-position']}>{position}</span>
          </div>
          <span className={styles['team-card-qualification-hover']}>{qualification}</span>
          <span className={styles['team-card-university-hover']}>{university}</span>
          <div className={styles['team-card-socials-hover']}>
            {linkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/LinkedIn.svg" alt="LinkedIn" />
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