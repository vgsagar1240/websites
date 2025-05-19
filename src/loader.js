import React, { useEffect, useState } from "react";
import { FaCity, FaHome, FaBuilding, FaHotel } from "react-icons/fa";
import "./loader.css";
import LOGO from "./assets/logo.png";

const icons = [
  <FaBuilding key="building" />,
  <FaHome key="home" />,
  <FaCity key="city" />,

  <FaHotel key="hotel" />,
];

const Loader = () => {
  const [index, setIndex] = useState(0);
  const [flipState, setFlipState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipState(true); // Start flip

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % icons.length); // Change icon during flip
      }, 500); // Change icon halfway through flip (0.5s)

      setTimeout(() => {
        setFlipState(false); // Reset flip after complete (1s)
      }, 500); // Complete flip after 1s
    }, 1000); // Flip every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className={`flip-box ${flipState ? "flipping" : ""}`}>
        <div className="flip-content">{icons[index]}</div>
      </div>
      <img src={LOGO} alt="Logo" className="logo" />
    </div>
  );
};

export default Loader;
