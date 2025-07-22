import React from "react";

const AboutUs = () => {
  return (
    <div className="about-page text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://i.pinimg.com/736x/df/99/04/df99047497ff9022bef6790167ea9d77.jpg"
          alt="Western Fashion Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-10">
        {/* Section: Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Our journey began with a vision to redefine Western wear in a way that blends modern trends with timeless style. We started with a handful of ideas and a passion for fashion, and today we bring those ideas to life through collections that inspire confidence and individuality.
          </p>
        </section>

        {/* Section: Mission */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To create stylish, comfortable, and versatile Western outfits that fit effortlessly into your everyday wardrobe. We’re committed to quality, innovation, and authenticity in every stitch.
          </p>
        </section>

        {/* Section: What We Offer */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Trendy women’s and men’s Western wear</li>
            <li>Casual and chic co-ord sets</li>
            <li>Statement tops, jeans, and jackets</li>
            <li>Premium fabrics with affordable prices</li>
          </ul>
        </section>

        {/* Section: Vision */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to become a go-to fashion destination for all things Western — combining simplicity, sophistication, and street-style. With every piece, we bring you closer to feeling confident in your own skin.
          </p>
        </section>

        {/* Section: Contact Info */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let’s Stay Connected</h2>
          <p className="text-gray-700 mb-1">Email: hello@yourbrand.com</p>
          <p className="text-gray-700 mb-1">Phone: +91 98765 43210</p>
          <p className="text-gray-700">Follow us on Instagram, Pinterest & YouTube</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
