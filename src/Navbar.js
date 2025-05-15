import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import LOGO from "./assets/logo.png";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showScrolledNavbar, setShowScrolledNavbar] = useState(false);

  const lastScrollYRef = useRef(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const goingDown = currentScrollY > lastScrollYRef.current;

      // Set scrolled navbar visibility
      setScrolled(currentScrollY > 50);

      if (!isMobile) {
        if (goingDown && currentScrollY > 1000) {
          setShowScrolledNavbar(false);
        } else if (!goingDown) {
          setShowScrolledNavbar(true);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {(!scrolled || isMobile) && (
        <nav className="navbar main-navbar">
          <div className="navbar-logo">
            <img src="/assets/logo.png" alt="logo" className="logo-img1" />{" "}
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            &#9776;
          </div>
        </nav>
      )}

      {/* Scrolled Navbar for Desktop */}
      {!isMobile && scrolled && showScrolledNavbar && (
        <nav className="navbar scrolled-navbar">
          <div className="navbar-logo">
            <img src={LOGO} alt="logo" className="logo-img" />
          </div>
          <div className="nav-links-inline">
            {/* //{({isActive}) => isActive ? 'nav-links-inline': 'nav-link1'} */}
            <span>HOME</span>
            <span>ABOUT US</span>
            <span>PROJECT</span>
            <span>CONTACT</span>
            <span className="contact_icon">
              {" "}
              <FiPhone />{" "}
            </span>
          </div>
        </nav>
      )}

      {/* Popup Menu for Mobile and  desktop*/}
      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-content">
            <div className="left-section">
              <div className="popup-logo">
                <img src={LOGO} alt="logo" className="logo-img1" />
              </div>
            </div>
            <div className="divider" />
            <div className="right-section">
              <ul className="nav-links">
                <li onClick={closeMenu}>Home</li>
                <li onClick={closeMenu}>About</li>
                <li onClick={closeMenu}>Services</li>
                <li onClick={closeMenu}>Contact</li>
              </ul>
            </div>
            <div className="close-icon" onClick={closeMenu}>
              &times;
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
