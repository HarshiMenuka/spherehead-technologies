"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      // Always show navbar at the top of the page
      if (currentScrollY === 0) {
        setIsVisible(true);
        setIsScrolling(false);
        return;
      }
      
      // Hide navbar when scrolling in any direction
      setIsVisible(false);
      setIsScrolling(true);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);

      // Clear previous timer
      clearTimeout(scrollTimer);
      
      // Set a new timer
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleMouseMove = (e) => {
      // Show navbar when mouse is in top 100px of the page and not actively scrolling
      // But don't override visibility if we're at the top of the page
      if (e.clientY <= 100 && !isScrolling && window.scrollY > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(scrollTimer);
    };
  }, [isScrolling]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Keep navbar visible when menu is open
    if (!isMenuOpen) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }

        .nav-container {
          position: fixed;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 20px);
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 0.8rem;
          z-index: 1000;
          background: transparent;
          transition: all 0.3s ease;
          border-radius: 99px;
          opacity: 1;
          visibility: visible;
        }

        .nav-container.hidden {
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-100%);
          transition: all 0.3s ease;
        }

        .nav-container.scrolled {
          background: rgba(39, 39, 42, 0.8);
          top: 15;
          backdrop-filter: blur(15px);
          padding: 0.8rem 0.8rem;
          width: calc(100% - 20px);
          max-width: 1050px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 99px;
          background: #27272a99;
          border: 0.6px solid #e5e5e5;
          transition: all 0.6s ease;
        }

        .logo-container {
          width: 160px;
          transition: width 0.3s ease;
          margin-right: 0.5rem;
        }

        .scrolled .logo-container {
          width: 140px;
        }

        .logo {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-center {
          flex-grow: 1;
        }

        .nav-links {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          padding: 0;
          margin: 0;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          padding: 0.25rem 0.5rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #d1d5db;
        }

        .contact-btn {
          background: linear-gradient(to right, #96bdd9, #629dc7);
          border-radius: 12px;
          color: black;
          padding: 0.4rem 1rem;
          transition: background 0.3s ease, transform 0.3s ease;
          text-decoration: none;
          display: inline-block;
          font-size: 0.95rem;
          cursor: pointer;
        }

        .contact-btn:hover {
          background: linear-gradient(to right, #88b2d1, #4d8bb8);
          transform: translateY(-2px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 40px;
          height: 31px;
          cursor: pointer;
          z-index: 1001;
        }

        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background-color: white;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(39, 39, 42, 0.95);
          backdrop-filter: blur(15px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 999;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
            width: 40px;
            height: 31px;
          }

          .nav-container {
            justify-content: space-between;
            padding: 0.8rem 1.2rem;
          }

          .logo-container {
            width: 160px;
          }

          .scrolled .logo-container {
            width: 140px;
          }

          .nav-center {
            display: none;
          }

          .nav-right {
            gap: 0;
          }

          .contact-btn {
            display: none;
          }

          .nav-container.mobile-menu-open {
            background: rgba(39, 39, 42, 0.95);
            backdrop-filter: blur(15px);
          }

          .mobile-menu {
            display: flex;
          }

          .mobile-menu.open {
            transform: translateX(0);
          }

          .mobile-menu .nav-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .mobile-menu .nav-link {
            font-size: 1.2rem;
          }

          .mobile-menu .contact-btn {
            display: inline-block;
            margin-top: 1rem;
          }
        }
      `}</style>

      <nav className={`nav-container ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "mobile-menu-open" : ""} ${!isVisible ? "hidden" : ""}`}>
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <Image
              src="/images/spherehead.svg"
              alt="Logo"
              width={200}
              height={60}
              priority
            />
          </Link>
        </div>

        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <Link href="/" className="contact-btn">
            Contact Us
          </Link>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              Blogs
            </Link>
          </li>
        </ul>
        <Link href="/" className="contact-btn" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Nav;
