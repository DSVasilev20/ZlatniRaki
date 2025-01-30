import React, { useState } from "react";
import "./RequestACustomIcon.css";

const RequestACustomIcon = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    referenceImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, referenceImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom Icon Request Submitted:", formData);
    // Add backend API integration here
  };

  return (
    <div className="custom-icon-page">
      <div className="custom-icon-container">
        <h1 className="custom-icon-header">Request a Custom Icon</h1>
        <p className="custom-icon-subtext">
          Fill in the details below to request a custom icon.
        </p>
        <form className="custom-icon-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="custom-input"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="custom-input"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Icon Description</label>
            <textarea
              id="description"
              name="description"
              className="custom-textarea"
              placeholder="Describe your icon request"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="referenceImage">
              Upload Reference Image (Optional)
            </label>
            <input
              type="file"
              id="referenceImage"
              name="referenceImage"
              className="custom-file"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestACustomIcon;
