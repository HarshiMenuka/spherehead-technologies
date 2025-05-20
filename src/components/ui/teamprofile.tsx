import React from 'react';
import styles from './teamprofile.module.css';
import Image from 'next/image';

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
      <Image 
        src={image} 
        alt={name} 
        className={styles['team-card-img']} 
        width={300}
        height={300}
      />
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
                <Image src="/images/Linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
            )}
            {instagramLink && (
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <Image src="/images/Instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
            )}
            {facebookLink && (
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <Image src="/images/Facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;