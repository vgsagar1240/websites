import React, { useEffect, useRef } from "react";
import "./home.css";
import firstImage from "../../assets/landing_1.png";
import WhatweDo from "./whatweDo";
import OngoProjects from "./projects/ongoProjects";
import Textfield from "./text_filed";
import WhyWeChoose from "../../sections/WhyWeChoose";

const Home = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      const handleMouseEnter = () => button.classList.add("hovered");
      const handleMouseLeave = () => button.classList.remove("hovered");

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      <div className="landing-container">
        <img src={firstImage} alt="Landing" className="landing-image" />
      </div>

      <div className="about-container">
        <h2 className="about_heading">ABOUT US</h2>
        <p className="about-description">
          AASRITHA INFRA PROJECTS IS A PREMIER PLAYER IN THE <br />
          <strong className="highlight">INFRASTRUCTURE DEVELOPMENT</strong>{" "}
          SECTOR, RENOWNED <br /> FOR DELIVERING HIGH-IMPACT, QUALITY-DRIVEN{" "}
          <br />
          PROJECTS ACROSS
          <strong className="highlight">
            {" "}
            RESIDENTIAL, COMMERCIAL,
          </strong> AND <strong className="highlight">INDUSTRIAL.</strong>
        </p>
        <button className="about-button" ref={buttonRef}>
          Know More
        </button>
      </div>

      <WhatweDo />
      <Textfield />
      <OngoProjects />
      <WhyWeChoose />
    </>
  );
};

export default Home;
