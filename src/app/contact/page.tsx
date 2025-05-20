'use client';
import React, { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';
import Loading from '../../components/ui/loading';
import './page.css';

// Lazy load JoinUs component
const Joinus = lazy(() => import('../../components/Joinus'));

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

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
    } else {
      // If page has already reloaded, set loading to false
      setIsPageLoading(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Add your actual form submission logic here

      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isPageLoading) {
    return <Loading />;
  }

  return (
    <div className="full">
      <>
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-image-col">
              <img
                src="/images/wtc.jpg"
                alt="Contact"
                className="contact-image"
              />
            </div>
            <div className="contact-content-col">
              <div className="contact-content">
                <p className="contact-label">Contact Us</p>
                <h1 className="contact-title">
                  Let&apos;s Bring Your<br />Vision to Life
                </h1>
                <p className="contact-desc">
                  Take the first step towards your digital transformation journey with us. We offer a no-obligation consultation and feasibility analysis to help you get started confidently. Get in touch today and let&apos;s create something extraordinary together.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="contact-form-title">Let&apos;s Talk</h2>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                  <div className="contact-row">
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="Contact Number"
                      required
                      disabled={isSubmitting}
                    />
                    <input
                      className="contact-input"
                      type="email"
                      placeholder="Email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <textarea
                    className="contact-input contact-textarea"
                    placeholder="Let's talk about your ideas"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    className="contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
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
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<Loading />}>
     
        </Suspense>
      </>

    </div>
  );
}

export default ContactSection;