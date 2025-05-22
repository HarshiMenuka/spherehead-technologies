'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import './page.css';

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_c0two2l',
        'template_m4ldwcd',
        e.currentTarget,
        '6-3S6Le8STefRLBhv'
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="full">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-image-col">
            <Image
              src="/images/wtc.jpg"
              alt="Contact"
              className="contact-image"
              width={480}
              height={730}
              priority
              quality={90}
            />
          </div>
          <div className="contact-content-col">
            <div className="contact-content">
              <p className="contact-label">Contact Us</p>
              <h1 className="contact-title">
                Let&apos;s Bring Your<br />Vision to Life
              </h1>
              <p className="contact-desc">
                Take the first step towards your digital transformation journey with us...
              </p>

              {isSubmitted ? (
                <div className="flex contact-form successfulMessage flex-col items-center justify-center text-center p-6">
                  <h1 className="text-2xl md:text-3xl mb-4">
                    Thank you for reaching out!
                  </h1>
                  <p className="text-base md:text-lg">
                    We&apos;ve received your message and we&apos;ll be in touch soon — usually within a day. <br />
                    Looking forward to bringing your ideas to life!
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="contact-form-title">Let&apos;s Talk</h2>

<input
  name="user_name"
  className="contact-input"
  type="text"
  placeholder="Your Name"
  required
  disabled={isSubmitting}
  pattern="[A-Za-z\s]+"
  title="Only letters and spaces are allowed"
  onKeyDown={(e) => {
    if (!/^[a-zA-Z\s]$/.test(e.key) && e.key.length === 1) {
      e.preventDefault();
    }
  }}
/>

<div className="contact-row">
  <input
    name="user_contact"
    className="contact-input"
    type="text"
    placeholder="Contact Number"
    required
    disabled={isSubmitting}
    pattern="[0-9]+"
    title="Only numbers are allowed"
    onKeyDown={(e) => {
      if (!/[0-9]/.test(e.key) && e.key.length === 1 && e.key !== 'Backspace') {
        e.preventDefault();
      }
    }}
  />
  <input
    name="user_email"
    className="contact-input"
    type="email"
    placeholder="Email"
    required
    disabled={isSubmitting}
  />
</div>

                  <textarea
                    name="message"
                    className="contact-input contact-textarea"
                    placeholder="Let's talk about your ideas"
                    required
                    disabled={isSubmitting}
                  />
                  <button className="contact-submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      'Contact us'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;