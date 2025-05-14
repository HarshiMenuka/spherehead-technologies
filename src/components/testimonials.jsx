import React, { useRef, useEffect } from "react";
import Head from "next/head";

const testimonials = [
  {
    text: "I've worked with several IT service providers over the years, but Spherehead stands out for their professionalism, technical expertise, and commitment to client satisfaction.",
    name: "Dinithi Fernando",
    role: "Business Owner",
    date: "08/07/2024",
    avatar: "/images/avatar1.jpg",
  },
  {
    text: "Spherehead delivered our project on time and exceeded our expectations. Their team is knowledgeable and always ready to help.",
    name: "Alex Kim",
    role: "Startup Founder",
    date: "07/15/2024",
    avatar: "/images/avatar2.jpg",
  },
  {
    text: "The support and dedication from Spherehead have been outstanding. I highly recommend them for any IT needs.",
    name: "Priya Singh",
    role: "CTO, FinTech",
    date: "06/30/2024",
    avatar: "/images/avatar3.jpg",
  },
  {
    text: "Spherehead's creative solutions helped us scale our business. Their team is always responsive and professional.",
    name: "Michael Chen",
    role: "Product Manager",
    date: "05/22/2024",
    avatar: "/images/avatar4.jpg",
  },
  {
    text: "We appreciate Spherehead's attention to detail and commitment to quality. Highly recommended!",
    name: "Sara Lopez",
    role: "Marketing Lead",
    date: "04/10/2024",
    avatar: "/images/avatar5.jpg",
  },
  {
    text: "Spherehead is a reliable partner for all our IT needs. Their expertise is unmatched.",
    name: "John Smith",
    role: "Operations Director",
    date: "03/18/2024",
    avatar: "/images/avatar6.jpg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const isHovered = useRef(false);

  // For the second carousel (right scroll)
  const scrollRefRight = useRef(null);
  const scrollIntervalRight = useRef(null);
  const isHoveredRight = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    function startScroll() {
      if (scrollInterval.current) return;
      scrollInterval.current = setInterval(() => {
        if (!isHovered.current) {
          if (
            scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
            scrollContainer.scrollWidth - 1
          ) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        }
      }, 16);
    }

    function stopScroll() {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    }

    startScroll();
    return () => stopScroll();
  }, []);

  // Rightward auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRefRight.current;
    if (!scrollContainer) return;

    function startScrollRight() {
      if (scrollIntervalRight.current) return;
      scrollIntervalRight.current = setInterval(() => {
        if (!isHoveredRight.current) {
          if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth;
          } else {
            scrollContainer.scrollLeft -= 1;
          }
        }
      }, 16);
    }

    function stopScrollRight() {
      if (scrollIntervalRight.current) {
        clearInterval(scrollIntervalRight.current);
        scrollIntervalRight.current = null;
      }
    }

    startScrollRight();
    return () => stopScrollRight();
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };
  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  const handleMouseEnterRight = () => {
    isHoveredRight.current = true;
  };
  const handleMouseLeaveRight = () => {
    isHoveredRight.current = false;
  };

  return (
    <>
      <div
        className="testimonials-scroll-wrapper"
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <div className="testimonials-row">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="quote-icon">“</div>
              <div className="testimonial-text">{t.text}</div>
              <div className="testimonial-footer">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">
                    <b>{t.name}</b>, <span className="testimonial-role">({t.role})</span>
                  </div>
                  <div className="testimonial-date">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Second carousel, scrolls to the right */}
      <div
        className="testimonials-scroll-wrapper"
        ref={scrollRefRight}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
      >
        <div className="testimonials-row">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={"right-" + idx}>
              <div className="quote-icon">“</div>
              <div className="testimonial-text">{t.text}</div>
              <div className="testimonial-footer">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">
                    <b>{t.name}</b>, <span className="testimonial-role">({t.role})</span>
                  </div>
                  <div className="testimonial-date">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        .testimonials-scroll-wrapper {
          overflow-x: auto;
          padding: 2rem 0 0 0;
          background: rgb(0, 0, 0);
          scrollbar-width: none; /* Firefox */
        }
        .testimonials-scroll-wrapper::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .testimonials-row {
          display: flex;
          gap: 2rem;
          min-width: 100%;
        }
        .testimonial-card {
          background: #2E2E2E;
          color: #fff;
          border-radius: 18px;
          border: 1px solid #b2b2b2;
          min-width: 500px;
          max-width: 500px;
          padding: 16px 20px 16px 20px;
          box-shadow: 0 2px 16px 0 #0002;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          height: 260px;
        }
        .quote-icon {
          font-family: 'Playfair Display', serif;
          font-size: 150px;
          color: #fff;
          position: absolute;
          top: 10px;
          left: 18px;
          margin: 0;
          line-height: 1;
          padding: 0;
        }
        .testimonial-text {
          margin-top: 80px;
          font-size: 1.05rem;
          margin-bottom: 1.2rem;
          line-height: 1.5;
          color: #fff;
        }
        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
        }
        .testimonial-name {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .testimonial-role {
          font-weight: 400;
          color: #fff;
        }
        .testimonial-date {
          font-size: 0.9rem;
          color: #fff;
        }
        @media (max-width: 500px) {
          .testimonial-card {
            min-width: 90vw;
            max-width: 90vw;
            padding: 1.2rem 1rem 1rem 1rem;
          }
        }
      `}</style>
    </>
  );
} 