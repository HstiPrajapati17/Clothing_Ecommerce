import React, { useState } from "react";
import "../Styles/auth.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <div className="signin-page roboto-font">
      <div className="page-bg">
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-center sm:justify-center items-center min-h-screen">
          <div className="signin-overlay">
            <div className="signin-form">
              <h2 className="jost-font leading-[40px]">Welcome Back</h2>
              <p>Hey! Good to see you again</p>
              <form>
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
					className="text-[26px]"
                  />
                </div>
                <div className="form-options">
                  <label
                    className={`custom-checkbox ${checked ? "checked" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={toggleCheckbox}
                    />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <Link to={"/forgetpass"}>Forgot your password?</Link>
                </div>
                <button type="submit" className="main-btn">
                  <Link>Sign In</Link>
                </button>
                <p className="register-text">
                  Don’t have an account? <Link to={"/signup"}> SignUp</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
