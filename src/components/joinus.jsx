import React from "react";

const JoinUsSection = () => {
  return (
    <>
      <div className="joinus-container"> 
        <div className="joinus-section">
          <h2 className="joinus-heading">Let's Bring Your<br />Vision to Life</h2>
          <p className="joinus-description">
            Apply and join a team committed to making a difference with technology
          </p>
          <a href="/join-us" className="joinus-button">
            Join Us
            <span className="joinus-button-arrow">→</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default JoinUsSection;