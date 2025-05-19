import React, { useState, useEffect, useRef } from "react";
import "./OurStory.css";
import Navbar from "../Navbar";
import homeImage from "../assets/our_story.jpg";
import vision from "../assets/Our_Vision.jpg";
import mission from "../assets/OurMission.jpg";
import journey from "../assets/journey.jpg";

const OurStory = () => {
  const sectionRef = useRef(null);
  const sectionsRef = useRef([]);
  const [visible, setVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setVisible(true);
        }
      }

      const newVisibleSections = [];
      sectionsRef.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            newVisibleSections.push(index);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="story_image">
        <img src={homeImage} alt="Our Story" className="story_landing" />
        <div className="image_text">
          <h1>OUR STORY</h1>
          <p className="imape_p1">Transforming Land into Legacy.</p>
          <p className="image_p2">
            We don’t just build — we craft communities with purpose, trust, and
            timeless design.
          </p>
        </div>
      </div>

      <div className="our_container">
        <p
          className={`our_p1 slide-up ${
            visibleSections.includes(0) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <span className="our_gradient">OUR</span>{" "}
          <span className="journey_outline">JOURNEY</span>
        </p>
        <p className="our_p2">A Foundation Built on Vision</p>
        <p className="our_p3">Built on Vision. Strengthened by Trust</p>
        <p className="our_description">
          <span>Aasritha Infra Projects</span> was established with a single
          ambition — to reshape the real estate landscape with integrity and
          innovation. From our humble beginnings to large-scale developments,
          our journey is marked by a commitment to delivering projects that
          enhance lifestyles and contribute meaningfully to the growth of cities
          and communities.
        </p>
        <p className="our_p4">
          We are not just developers. We are dream builders.
        </p>
      </div>

      <div className="ourMission">
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className={`mission_heading slide-up ${
            visibleSections.includes(1) ? "show" : ""
          }`}
        >
          <p className="mission_outlined">OUR MISSION & VISION</p>
        </div>
        <div
          className={`mission_subtext section right ${
            visibleSections.includes(2) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <p
            className={`our_purpose section ${
              visibleSections.includes(3) ? "show" : ""
            }`}
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            DRIVEN BY PURPOSE. FOCUSED ON THE FUTURE
          </p>
        </div>
      </div>

      <div className="our_mission_container">
        <div
          className={`mission_image_container section right ${
            visibleSections.includes(4) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <img src={mission} alt="Our Mission" />
        </div>
        <div
          className={`mission_text_container section ${
            visibleSections.includes(5) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>MISSION:</h2>
          <p>
            To Enrich Lives By Creating Spaces That Combine Functionality,
            Sustainability, And Timeless Value.
          </p>
        </div>
      </div>

      <div className="our_vision1">
        <div
          className={`vission_image section right ${
            visibleSections.includes(6) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <img src={vision} alt="Our Vision" />
        </div>
        <div
          className={`vision_content mission_text_container section ${
            visibleSections.includes(7) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>VISION:</h2>
          <p>
            To Be Recognized As A Benchmark In Real Estate Development Across
            South India - Known For Trust, Customer-Centricity, And Excellence
            In Every Project We Undertake.
          </p>
        </div>
      </div>

      <div className="below_container">
        <p
          className={`our_p1 slide-up ${
            visibleSections.includes(8) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <span className="our_gradient">LEADERSHIP</span>{" "}
          <span className="journey_outline">THAT INSPIRES</span>
        </p>

        <div className="lead">
          <p>LEAD BY VISION. BUILT ON VALUES</p>
        </div>
        <div className="lead_content">
          <p>
            Our Growth And Reputation Are Deeply Rooted In The Leadership Of Our
            Managing Director,
            <span> Dr. AVR Murthy</span>. With{" "}
            <span>Over 20 Years In Real Estate And Infrastructure</span>, His
            Hands-On Approach And Passion For Delivering Lasting Value Have
            Guided The Company With Clarity And Strength.
          </p>
        </div>
        <div className="for_us">
          <p>
            "For Us, Every Home is A Promise -<br />
            And Every Project Is A Responsibility." <br />
            <span>- DR. AVR MURTHY</span>, Managing Director.
          </p>
        </div>
      </div>

      <div className="join_cont">
        <p
          className={`our_p1 slide-up ${
            visibleSections.includes(9) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <span className="our_gradient">JOIN</span>{" "}
          <span className="journey_outline">OUR JOURNEY</span>
        </p>
        <div className="lets_build">
          <p>LET'S BUILD THE FUTURE, TOGETHER</p>
        </div>
      </div>

      <div className="our_mission_container">
        <div
          className={`mission_image_container vission_image section right ${
            visibleSections.includes(10) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          <img src={journey} alt="Our Journey" />
        </div>
        <div
          className={`journey_text_container vision_content mission_text_container section ${
            visibleSections.includes(11) ? "show" : ""
          }`}
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          <p>
            Whether You're Seeking Your Dream Home, A Strategic Investment Or A
            Collaboration Opportunity – Aasritha Infra Projects Welcomes You.
            Let's Create Landmark Spaces and Lasting Impact, Side By Side.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStory;
