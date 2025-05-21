import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What web development services do you offer?",
      answer: "We offer a wide range of web development services tailored to meet your needs. Whether you need a custom-designed website, an e-commerce platform, a content management system like WordPress or Webflow, or help with performance optimization and UI/UX design, we've got you covered. Our services also include responsive design for mobile users, third-party API integration, landing pages, and ongoing maintenance."
    },
    {
      question: "Can you help me redesign my existing website?",
      answer: "if you already have a website but want a fresh new look or better functionality, we can help with that too. We specialize in website redesigns, focusing on improving both the visual design and the user experience. Whether it’s updating your brand, optimizing for mobile, or migrating to a new platform, we'll work with you to create a site that meets your current goals."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The duration of a project depends on the features and content involved. A basic website can usually be completed in 2 to 3 weeks, while a more complex websites typically take 4 to 8 weeks. This includes planning, design, development, testing, and revisions."
    },
    {
      question: "Do you provide support after the website is launched?",
      answer: "Yes, we do provide support after your website goes live. We offer maintenance and support packages that cover everything from bug fixes and security updates to performance monitoring and content updates. To help you get started with confidence, we include the first month of support completely free. "
    },
    {
      question: "Can I update my website on my own after it's built?",
      answer: "You'll have full control over your website once it's built. We provide admin access, training sessions, and optional user guides to help you feel confident managing your site."
    },
    {
      question: "How much do your web development services cost?",
      answer: "Our pricing is flexible and depends on the complexity and scale of the project. After a discovery call, we'll provide a detailed estimate tailored to your specific needs."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <div className="faq-header">
          <span className="founder-label">FAQ</span>
          <h1 className="founder-title">Frequently asked <br />questions</h1>
          <div className='description'>
            At Spherehead, we strive to provide clear and helpful answers to common inquiries about our web development services. Below, you'll find responses to frequently asked questions regarding our pricing, development process, timelines, and post-launch support. If you don't find what you're looking for, feel free to contact us directly!
          </div>
        </div>

        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
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
    </div>
  );
};

export default FAQ;