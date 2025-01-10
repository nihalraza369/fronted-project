// File: src/components/Navbar.jsx

import React from "react";

function Navbar({ onLoginClick }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-gray-800">Ayesha Designer</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#collection" className="text-gray-600 hover:text-gray-800">
            Collection
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact Us
          </a>
        </div>

        {/* Login Button */}
        <button
          onClick={onLoginClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;



// File: src/components/HeroSection.jsx

import React from "react";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in">
          Redefining Elegance for Every Bride
        </h1>
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default HeroSection;



// File: src/components/AcceptPopup.jsx

import React from "react";

function AcceptPopup({ onAccept }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-lg font-bold mb-4">Welcome to Ayesha Designer</h2>
        <p className="mb-6">We use cookies to enhance your experience.</p>
        <button
          onClick={onAccept}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default AcceptPopup;