"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import '../styles/Nav.css';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
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
  }, []);

  const handleMouseMove = useCallback((e) => {
    // Show navbar when mouse is in top 100px of the page and not actively scrolling
    if (e.clientY <= 100 && !isScrolling && window.scrollY > 0) {
      setIsVisible(true);
    }
  }, [isScrolling]);

  useEffect(() => {
    let scrollTimer;
    
    const debouncedScroll = () => {
      clearTimeout(scrollTimer);
      handleScroll();
      
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(scrollTimer);
    };
  }, [handleScroll, handleMouseMove]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      if (!prev) setIsVisible(true);
      return !prev;
    });
  }, []);

  const navClasses = useMemo(() => {
    return `nav-container ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "mobile-menu-open" : ""} ${!isVisible ? "hidden" : ""}`;
  }, [isScrolled, isMenuOpen, isVisible]);

  return (
    <>
      <nav className={navClasses}>
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <Image
              src="/images/spherehead.svg"
              alt="Logo"
              width={200}
              height={60}
              loading="eager"
              quality={90}
            />
          </Link>
        </div>

        <div className="nav-center">
          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/" className="nav-link">About Us</Link></li>
            <li><Link href="/service" className="nav-link">Services</Link></li>
            <li><Link href="/" className="nav-link">Portfolio</Link></li>
            <li><Link href="/" className="nav-link">Pricing</Link></li>
            <li><Link href="/" className="nav-link">Blogs</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <Link href="/contact" className="contact-btn">Contact Us</Link>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link href="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/" className="nav-link" onClick={toggleMenu}>About Us</Link></li>
          <li><Link href="/" className="nav-link" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="/" className="nav-link" onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link href="/" className="nav-link" onClick={toggleMenu}>Pricing</Link></li>
          <li><Link href="/" className="nav-link" onClick={toggleMenu}>Blogs</Link></li>
        </ul>
        <Link href="/contact" className="contact-btn" onClick={toggleMenu}>Contact Us</Link>
      </div>
    </>
  );
}

export default Nav;
