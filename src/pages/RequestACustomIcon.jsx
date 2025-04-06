import { useState } from "react";
import "./RequestACustomIcon.css";

const SIZE_OPTIONS = {
  "20x15 cm": 250,
  "30x20 cm": 350,
  "40x30 cm": 450,
};

const RequestACustomIcon = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    referenceImage: null,
    size: "20x15 cm",
    numberOfFaces: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, referenceImage: e.target.files[0] }));
  };

  const calculatePrice = () => {
    const basePrice = SIZE_OPTIONS[formData.size] || 0;
    const faces = parseInt(formData.numberOfFaces) || 1;
    const additionalFaceFee = (faces - 1) * 50;
    return basePrice + additionalFaceFee;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculatePrice();
    const prepayment = total * 0.3;
    console.log("Request submitted:", formData);
    console.log("Total price:", total);
    console.log("Prepayment (30%):", prepayment);
    // Hook into backend or email logic here
  };

  return (
    <div className="custom-icon-page">
      <div className="custom-icon-container">
        <h1 className="custom-icon-header">Request a Custom Icon</h1>
        <p className="custom-icon-subtext">
          Please provide the details below to commission a custom icon.
        </p>

        <p className="custom-icon-subtext" style={{ textAlign: "left" }}>
          <strong>What to include:</strong>
          <ul style={{ textAlign: "left", paddingLeft: "1.2rem", marginTop: "10px" }}>
            <li>
              A detailed description of what you want — include saints, items, or scenery if needed.
            </li>
            <li>
              Upload a <strong>reference image</strong>. This can be any photo or artwork — it doesn’t have to be a woodcarving.
            </li>
            <li>
              Choose a <strong>size</strong> and specify how many <strong>faces (people)</strong> will appear in the icon.
            </li>
            <li>
              A <strong>30% prepayment</strong> is required before we begin.
            </li>
            <li>
              For large or complex icons, please email us or call <a href="tel:+359887715160" style={{ color: "#e6b450" }}>+359 88 771 5160</a>.
            </li>
          </ul>
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
              placeholder="Describe your custom icon vision"
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="referenceImage">Reference Image</label>
            <input
              type="file"
              id="referenceImage"
              name="referenceImage"
              className="custom-file"
              required
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="size">Select Size</label>
            <select
              id="size"
              name="size"
              className="custom-select"
              onChange={handleChange}
              value={formData.size}
            >
              {Object.entries(SIZE_OPTIONS).map(([size, price]) => (
                <option key={size} value={size}>
                  {size} — €{price}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="numberOfFaces">Number of Faces (People)</label>
            <select
              id="numberOfFaces"
              name="numberOfFaces"
              className="custom-select"
              onChange={handleChange}
              value={formData.numberOfFaces}
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "face" : "faces"}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <div className="custom-subtext">
              <p><strong>Total Price:</strong> €{calculatePrice()}</p>
              <p><strong>Prepayment (30%):</strong> €{(calculatePrice() * 0.3).toFixed(2)}</p>
            </div>
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
