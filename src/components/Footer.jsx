import React from "react";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

        .footer {
          background-color: #1E1E1E;
          color: #ffffff;
          padding: 5rem 4rem 3rem;
          font-family: 'Poppins', sans-serif;
          width: 100%;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          padding: 0 2rem;
        }

        .footer-logo-section {
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          grid-column: 1;
        }

        .footer-logo {
          margin-bottom: 1.5rem;
          max-width: 220px;
          width: 100%;
          height: auto;
        }

        .logo-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-start;
        }

        .footer-description {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          text-align: left;
          max-width: 400px;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
          justify-content: flex-start;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        .social-icon:hover {
          opacity: 0.8;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .contact-info {
          list-style: none;
          padding: 0;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .contact-icon {
          width: 18px;
          height: 18px;
          margin-right: 10px;
          margin-top: 2px;
          flex-shrink: 0;
          color: #ffffff;
        }

        .footer-copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #475569;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-links-section {
          text-align: left;
          grid-column: 2 / 3;
          padding-left: 4rem;
        }

        .footer-legal-section {
          text-align: left;
          grid-column: 3;
        }

        .footer-contact-section {
          text-align: left;
          grid-column: 4;
        }

        @media (max-width: 1024px) {
          .footer {
            padding: 4rem 3rem 2.5rem;
          }

          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            padding: 0 2rem;
          }

          .footer-logo-section {
            grid-column: 1 / -1;
            text-align: center;
            align-items: center;
            padding-left: 0;
          }

          .footer-logo {
            margin: 0 auto 1.5rem;
          }

          .logo-wrapper {
            justify-content: center;
          }

          .footer-description {
            text-align: center;
            max-width: 500px;
            margin: 0 auto 1.5rem;
          }

          .social-icons {
            justify-content: center;
          }

          .footer-links-section {
            grid-column: 1;
            text-align: left;
            padding-left: 0;
          }

          .footer-legal-section {
            grid-column: 2;
            text-align: left;
          }

          .footer-contact-section {
            grid-column: 1 / -1;
            text-align: left;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3.5rem 2.5rem 2rem;
          }

          .footer-container {
            gap: 3rem;
            padding: 0 1.5rem;
          }

          .footer-heading {
            font-size: 16px;
            margin-bottom: 1rem;
          }

          .footer-links li {
            margin-bottom: 0.6rem;
          }

          .contact-item {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 3rem 2rem 1.5rem;
          }

          .footer-container {
            gap: 2.5rem;
            padding: 0 1rem;
          }

          .footer-logo-section {
            text-align: center;
          }

          .footer-links-section,
          .footer-legal-section,
          .footer-contact-section {
            text-align: left;
          }

          .footer-links {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-item {
            justify-content: flex-start;
          }

          .footer-copyright {
            font-size: 12px;
            padding-top: 1.5rem;
            margin-top: 1.5rem;
          }
        }
      `}
      </style>

      <footer className="footer">
        <div className="footer-container">
          {/* Logo and description section */}
          <div className="footer-logo-section">
            <div className="logo-wrapper">
              <img src="/images/Spherehead.svg" alt="Spherehead Technologies" className="footer-logo" />
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                <img src="images/Facebook.svg" alt="Facebook" />
              </a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <img src="images/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                <img src="images/X.svg" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <img src="images/Linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Links section */}
          <div className="footer-links-section">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/service">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/pricing">Pricing</a></li>
              {/* <li><a href="/blogs">Blogs</a></li> */}
            </ul>
          </div>

          {/* Legal section */}
          <div className="footer-legal-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><a href="/legal-policies">Legal Policies</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/privacy-policies">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="footer-contact-section">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="contact-info">
              <li className="contact-item">
                <Phone className="contact-icon" />
                <span>+94 76 666 6688</span>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" />
                <span>contact@Spherehead.com</span>
              </li>
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span>
                  Level 05, East Lower Block,<br />
                  Echelon Square,<br />
                  World Trade Centre,<br />
                  Colombo 01
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 All Rights Reserved. Designed and Developed by Spherehead</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
