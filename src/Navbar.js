import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LOGO from "./assets/logo.png";
import { useLocation } from "react-router-dom";

// import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showScrolledNavbar, setShowScrolledNavbar] = useState(false);
  const location = useLocation();

  const lastScrollYRef = useRef(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const goingDown = currentScrollY > lastScrollYRef.current;

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
        <nav className="navbar1 main-navbar">
          <div className="navbar1-logo">
            <Link to="/">
              <img src={LOGO} alt="logo" className="logo-img1 img-fluid" />
            </Link>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            &#9776;
          </div>
        </nav>
      )}

      {!isMobile && scrolled && (
        <nav
          className={`navbar1 scrolled-navbar1 ${
            showScrolledNavbar ? "show" : ""
          }`}
        >
          <div className="navbar1-logo">
            <Link to="/">
              <img src={LOGO} alt="logo" className="logo-img" />
            </Link>
          </div>
          <div className="nav-links-inline">
            <Link
              to="/"
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              ABOUT US
            </Link>
            <Link
              to="/projects"
              className={`nav-item ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              PROJECT
            </Link>
            <Link
              to="/contact"
              className={`nav-item ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              CONTACT
            </Link>
          </div>
        </nav>
      )}

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
                <li onClick={closeMenu}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/services">Services</Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/contact">Contact</Link>
                </li>
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
