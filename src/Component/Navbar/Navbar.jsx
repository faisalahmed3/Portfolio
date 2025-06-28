import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = ["home", "about", "skills", "projects", "experience", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#ff3c38]">Faisal Ahmed</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          {navItems.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative inline-block text-white hover:text-[#ff3c38] transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0
                  after:h-[2px] after:bg-[#ff3c38] hover:after:w-full after:transition-all after:duration-300"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Blurred Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-6 py-4 space-y-4 shadow-lg">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="block text-white hover:text-[#ff3c38] text-lg transition-colors duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
