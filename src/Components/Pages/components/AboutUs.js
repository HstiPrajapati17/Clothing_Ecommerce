import React from 'react';
import "../../Styles/pages.css";
import Footer from "../../HomePage/components/Footer";
import Header from "../../HomePage/components/Header";
import { Cmn_btn } from '../../Assets/cmn_components/Cmn_comp';
import Bls_Shipping from '../../HomePage/components/Bls_Shipping';

const AboutUsPage = () => {
  return (
    <div className="bg-white text-gray-800 about-us">
      <Header />

      {/* Hero Section */}
      <section
        className="h-[200px] sm:h-[300px] bg-cover bg-center flex items-center justify-center text-white text-center title-hero-bg"
      >
        <div className="bg-black/20 w-full h-full flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-semibold drop-shadow-lg">About Us</h1>
        </div>
      </section>

      {/* Explore Section */}
      <section className="grid md:grid-cols-2 gap-10 py-16 px-4 sm:px-6 md:px-20 bg-[#F8F0E5] max-w-screen-xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <img
            src="https://i.pinimg.com/736x/a9/7d/d5/a97dd56a850fec937bb67a3f1a1d76b7.jpg"
            alt="Explore"
            className="w-full max-h-[500px] sm:h-[500px] object-cover rounded-lg"
          />
          <div className="bg-[#F0EBE4] p-6 sm:p-8 rounded-lg text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Wear Trendy Tops</h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Browse our stylish selection of western tops crafted for modern fashion lovers. Embrace comfort without compromising trend and individuality.
            </p>
            <Cmn_btn className={"main-btn main-btn2"} btn_name={"Shop Now"} link="/shop" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#F0EBE4] p-6 sm:p-8 rounded-lg text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Explore Modern Styles</h3>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Discover the latest trends and timeless essentials designed for every occasion. From casual chic to elegant evening wear, find pieces that define your unique style.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2 text-sm">
                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#8C7E6C]">Versatile wardrobe essentials</li>
                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#8C7E6C]">Effortless blending of comfort and style</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#8C7E6C]">Curated collections for every season</li>
                <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#8C7E6C]">Sustainable and ethical fashion choices</li>
              </ul>
            </div>
            <Cmn_btn className="main-btn main-btn2" btn_name="Shop Now" link="/shop" />
          </div>
          <img
            src="https://i.pinimg.com/1200x/8a/bd/8c/8abd8cf608edf0a5628b39d615092873.jpg"
            alt="Explore"
            className="w-full max-h-[500px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stat-section grid md:grid-cols-3 gap-8 py-16 px-4 sm:px-6 md:px-20 bg-[#e4e6ea] max-w-screen-xl mx-auto items-center">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Exquisite Collections</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Handpicked modern outfits crafted for expression, elegance, and comfort — made for trendsetters.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "80+", label: "Exclusive Designs" },
            { number: "2M", label: "Happy Customers" },
            { number: "4.50", label: "Customer Rating" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow stat-box">
              <h4 className="text-3xl sm:text-4xl font-bold text-[#1A3249] block mb-1">{item.number}</h4>
              <span className="uppercase text-xs sm:text-sm tracking-wider text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Personalize Section */}
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-[#F8F0E5] max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text Box */}
          <div className="order-2 md:order-1 bg-[#F0EBE4] p-6 sm:p-10 rounded-lg text-center md:text-left">
            <img
              src="https://www.pngall.com/wp-content/uploads/14/Heart-Shape-PNG.png"
              alt="Heart Icon"
              className="w-9 mx-auto md:mx-0 mb-2"
            />
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Personalize Your Style</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              Choose outfits that reflect your personality and mood. With our custom picks, styling becomes a true expression of who you are.
            </p>
            <Cmn_btn className={"main-btn main-btn2"} btn_name={"Learn More"} link="/shop" />
          </div>
          {/* Image Box */}
          <div className="order-1 md:order-2">
            <img
              src="https://i.pinimg.com/736x/87/6f/9e/876f9edea4aaa8b41bb58393ae43b384.jpg"
              alt="Women walking"
              className="rounded-lg shadow-xl w-full object-cover max-h-[500px]"
            />
          </div>
        </div>
      </section>
          <Bls_Shipping />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
