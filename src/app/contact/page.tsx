'use client';
import React, { useEffect } from 'react';
import Joinus from '../../components/Joinus';
import './page.css';

function ContactSection() {
  useEffect(() => {
    // Check if we've already reloaded in this session
    const hasReloaded = sessionStorage.getItem('contactPageReloaded');
    
    if (!hasReloaded) {
      // Set the flag before reloading
      sessionStorage.setItem('contactPageReloaded', 'true');
      // Small delay to ensure the flag is set
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }, []);

  return (
    <div className="full">
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-image-col">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
              alt="Contact"
              className="contact-image"
            />
          </div>
          <div className="contact-content-col">
            <div className="contact-content">
              <p className="contact-label">Contact Us</p>
              <h1 className="contact-title">
                Let's Bring Your<br />Vision to Life
              </h1>
              <p className="contact-desc">
                Take the first step towards your digital transformation journey with us. We offer a no-obligation consultation and feasibility analysis to help you get started confidently. Get in touch today and let's create something extraordinary together.
              </p>
              <form className="contact-form">
                <h2 className="contact-form-title">Let's Talk</h2>
                <input className="contact-input" type="text" placeholder="Your Name" />
                <div className="contact-row">
                  <input className="contact-input" type="text" placeholder="Contact Number" />
                  <input className="contact-input" type="email" placeholder="Email" />
                </div>
                <textarea
                  className="contact-input contact-textarea"
                  placeholder="Let's talk about your ideas"
                />
                <button className="contact-submit" type="submit">Contact us</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Joinus />
    </>
   
    </div>
  );
}

export default ContactSection;