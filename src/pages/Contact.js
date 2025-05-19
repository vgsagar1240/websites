import React from "react";
import projectImage from "../assets/project_landing.jpg";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="story_image">
        <img src={projectImage} className="story_landing" alt="projects" />
        <div className="image_text">
          <h1>GET IN TOUCH</h1>
          <p className="image_p1">HAVE QUESTIONS? WE'RE JUST A MESSAGE AWAY</p>
        </div>
      </div>

      <ContactForm />

      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.9322765450747!2d78.40509547520772!3d17.27051108359685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd61afcd7b85%3A0xb43294990d5cfb96!2sAero%20villas!5e0!3m2!1sen!2sin!4v1747631266265!5m2!1sen!2sin"
        width="800"
        height="600"
        allowfullscreen=""
        loading="lazy"
        className="w-100"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
