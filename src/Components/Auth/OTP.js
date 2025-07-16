import React, { useRef, useState } from "react";
import "../Styles/auth.css";
import { Link } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);

    if (index < 3 && otpRefs.current[index + 1]) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0 && !otp[index]) {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="signin-page roboto-font">
      <div className="page-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
          <div className="signin-overlay">
            <div className="signin-form">
              <h2 className="jost-font leading-[40px]">Forgot Password</h2>
              <p>To recover your account, please enter the OTP below.</p>
              <div className="mb-[22px]">
                <div className="flex gap-2 justify-center items-center">
                  {otp.map((digit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        ref={(el) => (otpRefs.current[i] = el)}
                        value={digit}
                        onChange={(e) => handleOtpChange(e, i)}
                        onKeyDown={(e) => handleOtpKeyDown(e, i)}
                        className="h-[50px] w-[46px] text-center text-xl border border-black/80 rounded bg-transparent text-black"
                      />
                      {i < 3 && <span className="text-black">-</span>}
                    </div>
                  ))}
                </div>
              </div>
              <button className="main-btn w-full">
                <Link to={"/change-pass"}>Verify OTP</Link>
              </button>
              <p className="register-text mt-3 text-sm text-black text-center">
                Didn't receive the code?{" "}
                <span
                  onClick={() => alert("Code resent again!")}
                  className="underline cursor-pointer"
                >
                  Resend
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
