"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-[#37014F] to-gray-800 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image width={130} height={80} src="/logo.png" alt="logo"/>
          </div>

          {/* Navbar Links - Hidden on Mobile */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Features</a>
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Login & Get Started Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-1 border border-gray-300 rounded-none hover:bg-black hover:border-black transition cursor-pointer font-light ">
              Login
            </button>
            <button className="px-4 py-1 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition cursor-pointer font-light">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">Home</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">Features</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">Pricing</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">Contact</a>
            <button className="block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-700 transition">
              Login
            </button>
            <button className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
