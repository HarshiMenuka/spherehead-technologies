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

  // Only add scroll effect for "scrolled" style (e.g. background blur, etc.)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const navClasses = useMemo(() => {
    return `nav-container ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "mobile-menu-open" : ""}`;
  }, [isScrolled, isMenuOpen]);

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
              src="/images/Spherehead.svg"
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
          <div className="desktop-contact-btn">
            <Link href="/contact" className="contact-btn">Contact Us</Link>
          </div>
          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>

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
