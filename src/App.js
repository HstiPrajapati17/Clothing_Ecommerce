import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages & Components
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import ForgetPass from "./Components/Auth/ForgetPass";
import Otp from "./Components/Auth/OTP";
import ChangePass from "./Components/Auth/ChangePass";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/Shop/Shop";
import AboutUs from "./Components/Pages/components/AboutUs";
import Contacts from "./Components/Pages/components/Contacts";
import PrivacyPolicy from "./Components/Pages/components/PrivacyPolicy";
import TermsAndCondition from "./Components/Pages/components/TermsAndCondition";
import Faqs from "./Components/Pages/components/Faqs";
import Error404 from "./Components/Pages/components/Error404";

// Styles
import "./Components/Styles/cmn-css.css";

function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/shop" element={<ShopPage />} />

      {/* Other Informational Pages */}
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsAndCondition />} />
      <Route path="/faqs" element={<Faqs />} />

      {/* Auth Pages */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/otp-verify" element={<Otp />} />
      <Route path="/change-pass" element={<ChangePass />} />

      {/* 404 Page */}
      <Route path="/404" element={<Error404 />} />
    </Routes>
  );
}

export default App;
