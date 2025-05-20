"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo, memo } from "react";
import '../styles/Nav.css';
import { measurePerformance } from "@/lib/performance";

const NavLink = memo(({ href, children, onClick, className }) => (
  <li>
    <Link href={href} className={className || "nav-link"} onClick={onClick}>
      {children}
    </Link>
  </li>
));
NavLink.displayName = 'NavLink';

const MobileMenuButton = memo(({ isOpen, onClick }) => (
  <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
));
MobileMenuButton.displayName = 'MobileMenuButton';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY <= 10 && isScrolled) {
      setIsScrolled(false);
    } else if (currentScrollY > 10 && !isScrolled) {
      setIsScrolled(true);
    }
    
    if (currentScrollY === 0) {
      setIsVisible(true);
      setIsScrolling(false);
      return;
    }
    
    if (Math.abs(currentScrollY - lastScrollY) > 5) {
      setIsVisible(false);
      setIsScrolling(true);
      setLastScrollY(currentScrollY);
    }
  }, [isScrolled, lastScrollY]);

  const handleMouseMove = useCallback((e) => {
    if (e.clientY <= 100 && !isScrolling && window.scrollY > 0) {
      setIsVisible(true);
    }
  }, [isScrolling]);

  useEffect(() => {
    let scrollTimer;
    let scrollHandler;
    
    const debouncedScroll = () => {
      if (!scrollHandler) {
        scrollHandler = requestAnimationFrame(() => {
          handleScroll();
          scrollHandler = null;
        });
      }
      
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    
    let mouseMoveTimer;
    const debouncedMouseMove = (e) => {
      clearTimeout(mouseMoveTimer);
      mouseMoveTimer = setTimeout(() => handleMouseMove(e), 50);
    };
    
    window.addEventListener("mousemove", debouncedMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("mousemove", debouncedMouseMove);
      cancelAnimationFrame(scrollHandler);
      clearTimeout(scrollTimer);
      clearTimeout(mouseMoveTimer);
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

  const navLinks = useMemo(() => [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/service", text: "Services" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/pricing", text: "Pricing" },
  ], []);

  useEffect(() => {
    const perfMark = measurePerformance('Nav-render');
    return () => perfMark.end();
  }, []);

  return (
    <>
      <nav className={navClasses}>
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <Image
              src="images/spherehead.svg"
              alt="Logo"
              width={200}
              height={60}
              priority
              quality={90}
            />
          </Link>
        </div>

        <div className="nav-center">
          <ul className="nav-links">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          {/* Only visible on desktop (hidden on mobile) */}
          <div className="desktop-contact-btn">
            <Link href="/contact" className="contact-btn">Contact Us</Link>
          </div>
          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu (includes Contact Us button) */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {navLinks.map(link => (
            <NavLink 
              key={`mobile-${link.href}`} 
              href={link.href} 
              onClick={toggleMenu}
            >
              {link.text}
            </NavLink>
          ))}
        </ul>
        <Link href="/contact" className="contact-btn" onClick={toggleMenu}>Contact Us</Link>
      </div>
    </>
  );
}

export default memo(Nav);