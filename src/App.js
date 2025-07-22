import { Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignIn from "./Components/Auth/SignIn";
import "./Components/Styles/cmn-css.css";
import SignUp from "./Components/Auth/SignUp";
import ForgetPass from "./Components/Auth/ForgetPass";
import Otp from "./Components/Auth/OTP";
import ChangePass from "./Components/Auth/ChangePass";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/Shop/Shop";
import AboutUs from "./Components/Pages/components/AboutUs";

function App() {
  return (
    <Routes>
      {/* Auth/Login Page */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/otp-verify" element={<Otp />} />
      <Route path="/change-pass" element={<ChangePass />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/shop" element={<ShopPage />} />

    </Routes>
  );
}

export default App;
