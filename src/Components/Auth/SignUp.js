import React, { useState } from "react";
import "../Styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fname.trim()) {
      formErrors.fname = "First name is required";
    }
    if (!formData.lname.trim()) {
      formErrors.lname = "Last name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      navigate("/"); // Redirect to sign-in or home
    }
  };

  return (
    <div className="signin-page auth-page">
      <div className="page-bg">
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
          <div className="signin-overlay">
            <div className="signin-form">
              <h2 className="jost-font leading-[40px]">Create Your Account</h2>
              <p>Hello! let's join with us</p>
              <form onSubmit={handleSubmit}>
                <div className="flex-wrap sm:flex-nowrap flex justify-between align-center sm:gap-6">
                  <div className="form-group w-full sm:w-1/2">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      placeholder="enter first name"
                    />
                    {errors.fname && (
                      <span className="error-text">{errors.fname}</span>
                    )}
                  </div>
                  <div className="form-group w-full sm:w-1/2">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      value={formData.lname}
                      onChange={handleChange}
                      placeholder="enter last name"
                    />
                    {errors.lname && (
                      <span className="error-text">{errors.lname}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="enter your e-mail"
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="enter your password"
                  />
                  {errors.password && (
                    <span className="error-text">{errors.password}</span>
                  )}
                </div>

                <button type="submit" className="main-btn">Sign Up</button>

                {/* OR Separator */}
                <div className="separator">
                  <span>or</span>
                </div>

                {/* Google Signup Button */}
                <button type="button" className="google-btn">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google"
                    className="google-icon"
                  />
                  Sign up with Google
                </button>

                <p className="register-text">
                  Already have an account? <Link to="/">SignIn</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
