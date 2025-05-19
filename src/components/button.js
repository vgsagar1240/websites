import React, { useState } from "react";
import "./Button.css";

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    config: "",
    purchaseTime: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.config) newErrors.config = "Configuration required";
    if (!formData.purchaseTime) newErrors.purchaseTime = "Select a timeframe";
    if (!formData.budget) newErrors.budget = "Select a budget";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      ...formData,
      phone: `${formData.countryCode} ${formData.phone}`,
      submittedAt: new Date().toISOString(),
    };

    try {
      // 🔁 Replace this URL with your CRM endpoint
      const res = await fetch("https://your-crm-api.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      alert("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        config: "",
        purchaseTime: "",
        budget: "",
      });
      toggleForm();
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <>
      <button className="styled-button" onClick={toggleForm}>
        ENQUIRE NOW
      </button>

      <div className={`form-container ${isOpen ? "open" : ""}`}>
        <div className="form-wrapper">
          <button className="close-btn" onClick={toggleForm}>
            &times;
          </button>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <h2>Enquire Now</h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <div className="phone-row">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && <span className="error">{errors.phone}</span>}

            <div className="config-section">
              <label>Configuration (sq.yards)</label>
              <div className="radio-group">
                {[
                  "267 sq.yards",
                  "367 sq.yards",
                  "567 sq.yards",
                  "600 sq.yards",
                ].map((size, index) => (
                  <label key={index} className="radio-btn">
                    <input
                      type="radio"
                      name="config"
                      value={size}
                      checked={formData.config === size}
                      onChange={handleChange}
                    />
                    {size}
                  </label>
                ))}
              </div>
              {errors.config && <span className="error">{errors.config}</span>}
            </div>

            <select
              name="purchaseTime"
              value={formData.purchaseTime}
              onChange={handleChange}
            >
              <option value="" disabled>
                When are you planning to purchase?
              </option>
              <option>Immediately</option>
              <option>1-3 Months</option>
              <option>3-6 Months</option>
              <option>6+ Months</option>
            </select>
            {errors.purchaseTime && (
              <span className="error">{errors.purchaseTime}</span>
            )}

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="" disabled>
                Budget
              </option>
              <option>Below ₹50 Lakhs</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹2Cr</option>
              <option>Above ₹2Cr</option>
            </select>
            {errors.budget && <span className="error">{errors.budget}</span>}

            <p className="possession-text">Possession from 2025</p>

            <button type="submit" className="btn btn-outline-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
