import React from "react";

const JoinUsSection = () => {
  return (
    <>
      <style>
        {`

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
          .joinus-section {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%,rgba(98, 157, 199, 0.77) 100%);

  color: #ffffff;
  text-align: center;
  padding: 4rem 1rem;
  border-radius: 12px;
  margin: 2rem 0;
  max-width: 1200px;
  width: 100%; 
  font-family: 'Poppins', sans-serif;
}


          .joinus-heading {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
          }

          .joinus-description {
            font-size: 1.25rem;
            max-width: 800px;
            margin: 0 auto 2.5rem;
            opacity: 0.9;
            line-height: 1.6;
          }

          .joinus-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to right, #96BDD9, #629DC7 );
            color: #ffffff;
            padding: 0.75rem 2rem;
            border-radius: 12px;
            text-decoration: none;
            font-size: 1.125rem;
            font-weight: 500;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }

          .joinus-button:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }

          .joinus-button-arrow {
            margin-left: 0.75rem;
          }

          @media (max-width: 768px) {
            .joinus-heading {
              font-size: 2.5rem;
            }

            .joinus-description {
              font-size: 1.125rem;
            }
          }
    .joinus-container {
  background-color: rgb(0, 0, 0);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

        `}
      </style>
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