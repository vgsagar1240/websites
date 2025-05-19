import React from "react";
import "./WhyWeChoose.css";
import CustomButton from "../components/CustomButton";

const whyWeChooseItems = [
  {
    icon: "fas fa-award",
    image: "/images/Trusted Quality.jpg",
    alt: "Trusted & Quality",
    title: "Trusted Quality",
  },
  {
    icon: "fas fa-cogs",
    image: "/images/Transparent Process.jpg",
    alt: "Transparent Process",
    title: "Transparent Process",
  },
  {
    icon: "fas fa-key",
    image: "/images/Timely Delivery.jpg",
    alt: "Timely Delivery",
    title: "Timely Delivery",
  },
  {
    icon: "fas fa-building",
    image: "/images/Modren Architecture.jpg",
    alt: "Modern Architecture",
    title: "Modern Architecture",
  },
  {
    icon: "fas fa-rocket",
    image: "/images/Future-Ready Design.jpg",
    alt: "Future-Ready Design",
    title: "Future-Ready Design",
  },
  {
    icon: "fas fa-home",
    image: "/images/Personalized Assistance.jpg",
    alt: "Personalized Assistance",
    title: "Personalized Assistance",
  },
];

const WhyWeChoose = () => {
  return (
    <section className="why-we-choose container">
      <h2 className="section-title display-4">
        <span className="text-secondary">WHY CHOOSE</span>{" "}
        <span>AASRITHA INFRA?</span>
      </h2>
      <div className="card-grid">
        {whyWeChooseItems.map((item, idx) => (
          <div className="choose-card" key={idx}>
            <img src={item.image} alt={item.alt} className="card-bg" />
            <div className="image-overlay"></div>
            <div className="overlay">
              <i className={item.icon}></i>
              <p className="card-title fs-3">
                {item.title.split(" ").map((word, index) => (
                  <span key={index} className="word">
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-bottom">
        <h3 className="display-4">CREATING TOMORROW’S LANDMARKS</h3>
        <p className="display-5">WITH TODAY’S VISION AND PRECISION.</p>
        <div className="flex justify-center" style={{ marginRight: "17%" }}>
          <CustomButton text="Enquiry" onClick={() => console.log("Clicked")} />
        </div>
      </div>
    </section>
  );
};

export default WhyWeChoose;
