import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#111111] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-[#E5E5E5] text-xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            Home
          </a>
          <a href="#projects" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            Projects
          </a>
          <a href="#about" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            About
          </a>
          <a href="#contact" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-[#E5E5E5] focus:outline-none text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#111111] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 mt-2 p-4">
          <a href="#home" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            Home
          </a>
          <a href="#projects" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            Projects
          </a>
          <a href="#about" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            About
          </a>
          <a href="#contact" className="text-[#E5E5E5] hover:bg-[#4E4E50] px-4 py-2 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
