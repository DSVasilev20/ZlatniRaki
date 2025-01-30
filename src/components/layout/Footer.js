import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-zlatniraki">
          <h2>Zlatni Raki</h2>
        </div>
        <p>Have questions? Feel free to reach out to us!</p>
        <ul className="footer-links">
          <li>
            <Link to="/about-the-artist">About The Artist</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
