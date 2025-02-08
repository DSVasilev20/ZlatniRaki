import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import googleImage from "../assets/google.png";
import appleImage from "../assets/apple.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Successful:", formData);
  };

  return (
    <div className="custom-login-container">
      <div className="main-content">
        <div className="login-page">
          <div className="login-container">
            <h1 className="login-header">Log In</h1>
            <p className="login-subtext">Access your account below</p>

            {/* Social Login Options */}
            <div className="login-option">
              <div className="option">
                <a href="/Login">
                  <img src={googleImage} alt="Google" />
                  <span>Google</span>
                </a>
              </div>
              <div className="option">
                <a href="/Login">
                  <img src={appleImage} alt="Apple" />
                  <span>Apple</span>
                </a>
              </div>
            </div>

            {/* Separator */}
            <p className="separator">
              <span>or</span>
            </p>

            <form className="login-form" onSubmit={handleSubmit}>
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
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
              <button type="submit" className="submit-button">
                Log In
              </button>
              <p className="login-text">
                Don&apos;t have an account?{" "}
                <a
                  onClick={() => navigate("/Signup")}
                  style={{
                    cursor: "pointer",
                    color: "#e6b450",
                    textDecoration: "underline",
                  }}
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
