import React, { useState } from "react";
import "../Styles/auth.css";
import { useNavigate } from "react-router-dom";

const ChangePass = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      setError("Both fields are required.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      console.log("Password successfully changed:", password);
      navigate("/");
    }
  };

  return (
    <div className="signin-page roboto-font">
      <div className="page-bg">
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-center sm:justify-center items-center min-h-screen">
          <div className="signin-overlay">
            <div className="signin-form">
              <h2 className="jost-font leading-[40px]">Change Password</h2>
              <p>Enter a new Password below to change your password</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="password">Enter New Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="enter new password"
                    className="text-[26px]"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Re-Enter New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="re-enter new password"
                    className="text-[26px]"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>

                {error && (
                  <p className="error-text text-red-600 text-sm mt-2">
                    {error}
                  </p>
                )}

                <button type="submit" className="main-btn">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
