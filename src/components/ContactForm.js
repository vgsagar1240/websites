import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import CustomButton from "../components/CustomButton";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

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
        setErrors({});
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container bg-white mb-5" data-aos="fade-up">
      <h1 className="fs-1 mt-5">We'd Love To Hear From You</h1>
      <hr className="borderline" />
      <hr className="borderline2" />

      <div className="row">
        {/* Contact Info */}
        <div className="col-12 col-md-3 contact-info" data-aos="fade-right">
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
            <p className="contact-detail ">
              <i className="fas fa-envelope"></i> <strong>Email:</strong>
              <a href="mailto:Sales@Aasritha.In" className="text-black">
                {" "}
                Sales@Aasritha.In
              </a>
            </p>
            <p className="contact-detail">
              <i className="fas fa-phone"></i> <strong>Call:</strong>
              <a href="tel:+918889995255" className="text-black">
                {" "}
                +91 888 999 5255
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-12 col-md-5 contact-form" data-aos="fade-up">
          <h1 className="fs-2 hed">
            Take The First Step, We Will Take Care Of The Rest
          </h1>
          <hr className="borderline" />
          <hr className="borderline2" />
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="firstName"
              placeholder="*Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}
            <hr className="inputLine" />

            <input
              type="text"
              name="lastName"
              placeholder="*Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}
            <hr className="inputLine" />

            <input
              type="tel"
              name="phone"
              placeholder="*Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone}</small>
            )}
            <hr className="inputLine" />

            <input
              type="email"
              name="email"
              placeholder="*Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
            <hr className="inputLine" />

            <label>*Leave a Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && (
              <small className="text-danger">{errors.message}</small>
            )}

            <CustomButton
              style={{ left: "100px", position: "relative" }}
              text="Submit"
              onClick={handleSubmit}
            />
          </form>
        </div>

        {/* Image Section */}
        <div
          className="col-12 col-md-4 d-flex align-items-center"
          data-aos="fade-left"
        >
          <div className="contact-image-container w-100 rounded-4">
            <div className="contact-gradient rounded-4"></div>
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
