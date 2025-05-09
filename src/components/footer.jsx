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
      padding: 3rem 2rem 1rem;
      font-family: 'Poppins', sans-serif;
      width: 100%;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
     
    }

    .footer-logo {
      margin-bottom: 1rem;
      max-width: 220px;
    }

    .footer-description {
      font-size: 14px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1.5rem;
    }

    .social-icons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
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

    @media (max-width: 992px) {
      .footer-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 576px) {
      .footer-container {
        grid-template-columns: 1fr;
      }
    }

    .footer-links-section {
    text-align: left;
    margin-left: 120px;
    }

    .footer-contact-section {
    text-align: left;
    }

    .footer-legal-section {
    text-align: left;
    margin-left: 40px;
    }

    .footer-logo-section {
    text-align: left;
   
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
                <img src="/images/Facebook.svg" alt="Facebook" />
              </a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <img src="/images/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                <img src="/images/X.svg" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <img src="/images/Linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Links section */}
          <div className="footer-links-section">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/blogs">Blogs</a></li>
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
