import React, { useState } from "react";
import "../Styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error while typing
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Invalid email format");
    } else {
      console.log("Proceed to OTP verification:", email);
      navigate("/otp-verify");
    }
  };

  return (
    <div className="signin-page auth-page">
      <div className="page-bg">
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
          <div className="signin-overlay">
            <div className="signin-form">
              <h2 className="jost-font leading-[40px]">Forgot Password</h2>
              <p>Please enter your details.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="enter your e-mail"
                  />
                  {error && <span className="error-text">{error}</span>}
                </div>
                <button type="submit" className="main-btn">
                  Reset Password
                </button>
                <p className="register-text">
                  Remember your password? <Link to="/">Back to Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
