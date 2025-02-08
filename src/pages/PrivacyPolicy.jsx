import { useEffect } from "react";
import "./PrivacyPolicy.css";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="main-content">
      <div className="privacy-policy-page">
        <div className="back-button-container">
          <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
        </div>
        <div className="privacy-policy-container">
          <h1 className="privacy-policy-header">Privacy Policy</h1>
          <p className="privacy-policy-intro">
            Your privacy is important to us. This Privacy Policy outlines how we
            collect, use, and protect your information.
          </p>
          <section className="privacy-section">
            <h2 className="section-header">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and any other details you provide directly
              to us. Additionally, we may collect information automatically
              through cookies and other tracking technologies.
            </p>
          </section>
          <section className="privacy-section">
            <h2 className="section-header">How We Use Your Information</h2>
            <p>
              Your information is used to provide and improve our services,
              communicate with you, and ensure a personalized experience. We may
              also use your data for analytical purposes to enhance our
              offerings.
            </p>
          </section>
          <section className="privacy-section">
            <h2 className="section-header">Sharing Your Information</h2>
            <p>
              We do not share your personal information with third parties
              except as necessary to provide our services, comply with legal
              obligations, or protect our rights.
            </p>
          </section>
          <section className="privacy-section">
            <h2 className="section-header">Your Choices</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. You can also manage your cookie preferences or opt
              out of certain communications at any time.
            </p>
          </section>
          <section className="privacy-section">
            <h2 className="section-header">Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>
          <section className="privacy-section">
            <h2 className="section-header">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </section>
          <p className="privacy-policy-footer">
            If you have any questions about this Privacy Policy, please contact
            us at <a href="mailto:info@zlatniraki.com">info@zlatniraki.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
