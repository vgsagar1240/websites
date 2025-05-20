import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-left">
          <ul className="footer-links">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/projects">PROJECT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="footer-middle">
          <div className="footer-item">
            <i className="fas fa-building footer-icon"></i>
            <p>
              2nd Floor, Plot No. 265, Trendz Inspire,
              <br />
              Kavuri Hills Road, CBI Colony, Madhapur,
              <br />
              Hyderabad-500033.
            </p>
          </div>
          <div className="footer-item">
            <i className="fas fa-phone footer-icon"></i>
            <div>
              <strong>PHONE</strong>
              <br />
              +91 888 999 5255
            </div>
          </div>
        </div>
      </div>

      <div className="footer-last container">
        <div className="footer-bottom text-secondary">
          © {new Date().getFullYear()} Copyrights By Aasritha Infra Projects.
          All Rights Reserved
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <a
              href="https://www.youtube.com/@AasrithaInfraProjects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>{" "}
            <a
              href="https://www.facebook.com/aasrithainfra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
