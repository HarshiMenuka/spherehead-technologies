// src/components/FAQ.jsx
import React, { useState } from 'react';
import SectionHeader from "@/components/sectionheader";
import './FAQ.css'; // Ensure you have the updated styles

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "How long does shipping take?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Do you offer customer support?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "What is your return policy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "How long does shipping take?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Do you offer customer support?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container flex flex-col md:flex-row space-x-0 md:space-x-4">
      <div className="w-full md:w-1/2 p-4">
        <div className="founder-left">
          <span className="founder-label">FAQ</span>
          <h1 className="founder-title">Frequently asked <br />questions</h1>
          <div className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="faq-section w-full md:w-1/2 pt-0 md:pt-12"> {/* Adjusted padding */}
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item pb-2">
            <h3 onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">
                {activeIndex === index ? ' ▲' : ' ▼'}
              </span>
            </h3>
            <div className={`answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;