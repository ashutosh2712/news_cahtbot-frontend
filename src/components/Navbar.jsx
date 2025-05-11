import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-semibold">My AI Chatbot</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/chat"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Chat
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-indigo-600 p-4 space-y-4`}
      >
        <Link
          to="/"
          className="text-white text-lg hover:text-gray-300 transition duration-300 block"
        >
          Home
        </Link>
        <Link
          to="/chat"
          className="text-white text-lg hover:text-gray-300 transition duration-300 block"
        >
          Chat
        </Link>
        <Link
          to="/about"
          className="text-white text-lg hover:text-gray-300 transition duration-300 block"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
