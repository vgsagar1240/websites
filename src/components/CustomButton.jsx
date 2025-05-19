// src/components/CustomButton.jsx
import React, { useEffect, useRef } from "react";
import "./CustomButton.css"; // Extract relevant CSS

const CustomButton = ({ text = "Click Me", onClick }) => {
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
    <button className="about-button mt-4" ref={buttonRef} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
