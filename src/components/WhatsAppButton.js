import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/918889995255"; // Customize this number

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/whatsapp.png"
        alt="Chat on WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
