import { Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Auth/SignIn";
import "./Components/Styles/cmn-css.css";
import SignUp from "./Components/Auth/SignUp";
import ForgetPass from "./Components/Auth/ForgetPass";
import Otp from "./Components/Auth/OTP";
import ChangePass from "./Components/Auth/ChangePass";

function App() {
  return (
    <Routes>
      {/* Auth/Login Page */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/otp-verify" element={<Otp />} />
      <Route path="/change-pass" element={<ChangePass />} />

    </Routes>
  );
}

export default App;
