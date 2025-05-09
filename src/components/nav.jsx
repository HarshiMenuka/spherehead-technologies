"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        body {
          padding-top: 80px;
          font-family: 'Poppins', sans-serif;
        }

        .nav-container {
          position: fixed;
          top: 3%;
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
          transition: all 0.6s ease;
          border-radius: 99px;
        }

        .nav-container.scrolled {
          background: rgba(39, 39, 42, 0.8);
          top: 3%;
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
          border-radius: 99px;
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
      `}</style>

      <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
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
              <Link href="/" className="nav-link">
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

        <div>
          <Link href="/" className="contact-btn">
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
