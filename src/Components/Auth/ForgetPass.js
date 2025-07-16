import React, { useState } from "react";
import "../Styles/auth.css";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <div className="signin-page roboto-font">
      <div className="page-bg">
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-center sm:justify-center items-center min-h-screen">
          <div className="signin-overlay">
            <div className="signin-form">
              <h2 className="jost-font leading-[40px]">Forgot Passsword</h2>
              <p>Please enter your details.</p>
              <form>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="enter your e-mail"
                  />
                </div>
                <button type="submit" className="main-btn">
                  <Link to={"/otp-verify"}>Reset Password</Link>
                </button>
                <p className="register-text">
                  Remember your password? <Link to={"/"}> Back to Sign In</Link>
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
