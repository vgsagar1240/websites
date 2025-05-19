import React, { useState } from "react";
import "./ContactForm.css";
import CustomButton from "../components/CustomButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this with your CRM API endpoint
    const crmEndpoint = "https://your-crm-domain.com/api/leads";

    try {
      const response = await fetch(crmEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container bg-white">
      <h1 className="fs-1 mt-5">We'd Love To Hear From You</h1>
      <hr className="borderline" />
      <hr className="borderline2" />

      <div className="row">
        {/* Contact Info */}
        <div className="col-12 col-md-3 contact-info">
          <h1 className="fs-3">Find Us Here</h1>
          <hr className="borderline" />
          <hr className="borderline2" />
          <p className="fs-6">
            2nd Floor, Plot No. 265, Trendz Inspire, Kavuri Hills Road, CBI
            Colony, Madhapur, Hyderabad - 500033.
          </p>
          <div className="mt-5">
            <h1 className="fs-3 mt-5">Get In Touch</h1>
            <hr className="borderline" />
            <hr className="borderline2" />
            <p className="contact-detail">
              📧 <strong>Email:</strong>
              <a href="mailto:Sales@Aasritha.In"> Sales@Aasritha.In</a>
            </p>
            <p className="contact-detail">
              📞 <strong>Call:</strong>
              <a href="tel:+918889995255"> +91 888 999 5255</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-12 col-md-5 contact-form">
          <h1 className="fs-2 hed">
            Take The First Step, We Will Take Care Of The Rest
          </h1>
          <hr className="borderline" />
          <hr className="borderline2" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="*Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <hr className="inputLine" />
            <input
              type="text"
              name="lastName"
              placeholder="*Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <hr className="inputLine" />
            <input
              type="tel"
              name="phone"
              placeholder="*Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <hr className="inputLine" />
            <input
              type="email"
              name="email"
              placeholder="*Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <hr className="inputLine" />
            <label>*Leave a Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Only use CustomButton */}
            <CustomButton
              style={{ left: "100px", position: "relative" }}
              text="Submit"
              onClick={handleSubmit}
            />
          </form>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-4 d-flex align-items-center">
          <div className="contact-image-container w-100 rounded-4">
            <div className="contact-gradient"></div>
            <div className="contact-text-overlay">
              Our Experts Will <br /> Always Help You
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
