import React, { useState } from "react";
import "../Styles/auth.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="signin-page roboto-font">
      <div className="page-bg">
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
          <div className="signin-overlay">
            <div className="signin-form">
              <h2 className="jost-font leading-[40px]">Create Your Account</h2>
              <p>Hello! let's join with us</p>
              <form>
                <div className="flex-wrap sm:flex-nowrap flex justify-between align-center sm:gap-6">
                  <div className="form-group w-full sm:w-1/2">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      placeholder="enter first name"
                    />
                  </div>
                  <div className="form-group w-full sm:w-1/2">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      placeholder="enter last name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="enter your e-mail"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="enter your password"
                  />
                </div>

                <button type="submit" className="main-btn">
                  <Link>Sign Up</Link>
                </button>

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
                  Already have an account? <Link to={"/"}>SignIn</Link>
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
