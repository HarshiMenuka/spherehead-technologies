import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

const testimonials = [
  {
    text: "Spherehead is known for their professionalism, and commitment to satisfaction.",
    name: "Dinithi Fernando",
    role: "Business Owner",
    date: "08/07/2024",
    avatar: "/images/user1.jpg",
  },
  {
    text: "Spherehead delivered our project on time and Their team is always ready to help.",
    name: "Alex Kim",
    role: "Startup Founder",
    date: "07/15/2024",
    avatar: "/images/user2.jpg",
  },
  {
    text: "The support from Spherehead have been outstanding and recommend them for any IT needs.",
    name: "Priya Singh",
    role: "CTO, FinTech",
    date: "06/30/2024",
    avatar: "/images/user3.jpg",
  },
  {
    text: "Spherehead helped us scale our business. Their team is always responsive and professional.",
    name: "Michael Chen",
    role: "Product Manager",
    date: "05/22/2024",
    avatar: "/images/user4.jpg",
  },
  {
    text: "We appreciate Spherehead's attention to detail and commitment to quality. Highly recommended!",
    name: "Sara Lopez",
    role: "Marketing Lead",
    date: "04/10/2024",
    avatar: "/images/user5.jpg",
  },
  {
    text: "Spherehead is a reliable partner for all our IT needs. Their expertise is unmatched.",
    name: "John Smith",
    role: "Operations Director",
    date: "03/18/2024",
    avatar: "/images/user6.jpg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const isHovered = useRef(false);

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
      <div className="w-full bg-[#111] text-white py-8 sm:py-12 md:py-16 lg:py-[72px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-[#64B5F6] text-xs sm:text-sm mb-2">Testimonial</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-[1.2] lg:leading-[60px]">
              What our Clients <br className="hidden sm:block" /> say about us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
      </div>

      <div
        className="testimonials-scroll-wrapper overflow-hidden"
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="testimonials-row flex gap-6 py-4 sm:py-8">
          {testimonials.map((t, idx) => (
            <div
              className="testimonial-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-xl p-6 shadow-lg"
              key={idx}
            >
              <div className="quote-icon text-4xl text-[#64B5F6] font-serif mb-4">"</div>
              <div className="testimonial-text text-sm sm:text-base text-gray-700 mb-6">{t.text}</div>
              <div className="testimonial-footer flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="testimonial-avatar w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="testimonial-name text-sm sm:text-base">
                    <b>{t.name}</b>, <span className="testimonial-role text-gray-600">({t.role})</span>
                  </div>
                  <div className="testimonial-date text-xs text-gray-500">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="testimonials-scroll-wrapper overflow-hidden"
        ref={scrollRefRight}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
      >
        <div className="testimonials-row flex gap-6 py-4 sm:py-8">
          {testimonials.map((t, idx) => (
            <div
              className="testimonial-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-xl p-6 shadow-lg"
              key={"right-" + idx}
            >
              <div className="quote-icon text-4xl text-[#64B5F6] font-serif mb-4">"</div>
              <div className="testimonial-text text-sm sm:text-base text-gray-700 mb-6">{t.text}</div>
              <div className="testimonial-footer flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="testimonial-avatar w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="testimonial-name text-sm sm:text-base">
                    <b>{t.name}</b>, <span className="testimonial-role text-gray-600">({t.role})</span>
                  </div>
                  <div className="testimonial-date text-xs text-gray-500">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
