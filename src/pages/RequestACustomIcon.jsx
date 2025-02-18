import { useState } from "react";
import "./RequestACustomIcon.css";

const SIZE_PRICES = {
  "Small (20x30 cm)": { price: 50, time: "1 week" },
  "Medium (30x40 cm)": { price: 80, time: "2 weeks" },
  "Large (40x60 cm)": { price: 120, time: "3 weeks" },
};

const SAINTS = [
  "Saint Nicholas",
  "Saint George",
  "Saint John the Baptist",
  "Saint Mary",
  "Saint Michael the Archangel",
  "Saint Peter",
];

const RequestACustomIcon = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    referenceImage: null,
    size: "Small (20x30 cm)",
    saint: "Saint Nicholas",
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
    console.log("Prepayment Required:", SIZE_PRICES[formData.size].price * 0.2);
    console.log("Estimated Completion Time:", SIZE_PRICES[formData.size].time);
    // Add backend API integration here
  };

  return (
    <div className="custom-icon-page">
      <div className="custom-icon-container">
        <h1 className="custom-icon-header">Request a Custom Icon</h1>
        <p className="custom-icon-subtext">Fill in the details below to request a custom icon.</p>
        <form className="custom-icon-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="custom-input" placeholder="Enter your name" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="custom-input" placeholder="Enter your email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Icon Description</label>
            <textarea id="description" name="description" className="custom-textarea" placeholder="Describe your icon request and we will make it into art :)" required onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="size">Icon Size</label>
            <select id="size" name="size" className="custom-select" onChange={handleChange}>
              {Object.keys(SIZE_PRICES).map((size) => (
                <option key={size} value={size}>{size} - ${SIZE_PRICES[size].price}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="saint">Saint</label>
            <select id="saint" name="saint" className="custom-select" onChange={handleChange}>
              {SAINTS.map((saint) => (
                <option key={saint} value={saint}>{saint}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="referenceImage">Upload Reference Image (Optional)</label>
            <input type="file" id="referenceImage" name="referenceImage" className="custom-file" onChange={handleFileChange} />
          </div>
          <div className="price-display">Estimated Price: ${SIZE_PRICES[formData.size].price}</div>
          <div className="prepayment-display">Prepayment (20%): ${SIZE_PRICES[formData.size].price * 0.2}</div>
          <div className="time-display">Estimated Completion Time: {SIZE_PRICES[formData.size].time}</div>
          <button type="submit" className="submit-button">Submit Request & Pay Prepayment</button>
        </form>
      </div>
    </div>
  );
};

export default RequestACustomIcon;