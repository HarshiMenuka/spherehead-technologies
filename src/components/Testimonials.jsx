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
    <div className="w-full bg-[#111] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-[#64B5F6] text-sm mb-2">Counties</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[60px]">
                What our Clients <br /> say about us
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
    
    
          
    
    
           
           
          </div>
        </div>
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
    </>
  );
} 