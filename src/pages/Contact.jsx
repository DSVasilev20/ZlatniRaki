import React, { useEffect } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-content">
      <div className="contact-page">
        {/* Back Button */}
        <div className="back-button-container">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        </div>

        <div className="contact-container">
          <h1 className="contact-header">Contact Us</h1>
          <p className="contact-subtext">
            We&apos;d love to hear from you! Reach out with any questions or
            custom icon requests.
          </p>

          <div className="contact-content">
            {/* Contact Form */}
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>

            {/* Contact Details and Map */}
            <div className="contact-info">
              <div className="contact-details">
                <h2>Get in Touch</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:info@zlatniraki.com">info@zlatniraki.com</a>
                </p>
                <p>Phone: +1 (234) 567-890</p>
                <p>Address: 123 Icon Lane, Craftsville, Artistan</p>
              </div>
              <div className="map-placeholder">
                <p>Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
