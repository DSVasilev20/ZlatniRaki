import { useEffect, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import googleImage from "../assets/google.png";
import appleImage from "../assets/apple.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeEmailList: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions!");
      return;
    }
    console.log("Signup Successful:", formData);
  };

  return (
    <div className="custom-signup-container">
      <div className="main-content">
        <div className="signup-page">
          <div className="signup-container">
            <h1 className="signup-header">Sign Up</h1>
            <p className="signup-subtext">Create an account to get started!</p>

            {/* Social Login Options */}
            <div className="login-option">
              <div className="option">
                <a href="/Signup">
                  <img src={googleImage} alt="Google" />
                  <span>Google</span>
                </a>
              </div>
              <div className="option">
                <a href="/Signup">
                  <img src={appleImage} alt="Apple" />
                  <span>Apple</span>
                </a>
              </div>
            </div>

            {/* Separator */}
            <p className="separator">
              <span>or</span>
            </p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="name-group">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="short-input"
                    placeholder="Enter your first name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="short-input"
                    placeholder="Enter your last name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="short-input"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="short-input"
                  placeholder="Enter your password"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="short-input"
                  placeholder="Confirm your password"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                  />
                  I agree to the terms and conditions
                </label>
              </div>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="subscribeEmailList"
                    checked={formData.subscribeEmailList}
                    onChange={handleChange}
                  />
                  Subscribe to our email list
                </label>
              </div>
              <button type="submit" className="submit-button">
                Sign Up
              </button>
              <p className="sign-up-text">
                Already have an account?{" "}
                <span onClick={() => navigate("/login")} className="login-link">
                  Log in
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
