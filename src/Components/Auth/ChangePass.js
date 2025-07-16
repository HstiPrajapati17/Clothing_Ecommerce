import React, { useState } from "react";
import "../Styles/auth.css";
import { Link } from "react-router-dom";

const ChangePass = () => {
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
              <h2 className="jost-font leading-[40px]">Change Password</h2>
              <p>Enter a new Password below to change your password </p>
              <form>
                <div className="form-group">
                  <label htmlFor="password">Enter New Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="enter your password"
                    className="text-[26px]"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Re-Enter New Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="enter your password"
                    className="text-[26px]"
                  />
                </div>

                <button type="submit" className="main-btn">
                  <Link>Change Password</Link>
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

export default ChangePass;
