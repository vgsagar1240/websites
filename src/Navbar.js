import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    const currentY = window.scrollY;

    if (window.innerWidth >= 768) {
      setScrolled(currentY > 50);
      setHidden(currentY > lastScrollY && currentY > 100);
    } else {
      setScrolled(false);
      setHidden(false);
    }

    setLastScrollY(currentY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${hidden ? "navbar--hidden" : ""} ${
        scrolled ? "navbar--scrolled" : "navbar--transparent"
      }`}
    >
      <div
        className={`navbar-logo ${
          scrolled ? "navbar-logo--left" : "navbar-logo--center"
        }`}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src="/Aasritha_logo.png" alt="Logo" />
        <span className="logo-text">AASRITHA INFRA</span>
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              PROJECT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="navbar-phone">
          <PhoneIcon fontSize="small" />
        </div>
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <MenuIcon style={{ color: "black" }} />
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                PROJECT
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
