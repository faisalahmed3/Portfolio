import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 text-center text-gray-300 text-sm bg-white/10 backdrop-blur-md shadow-inner">
      
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4 text-2xl text-[#ff7b72]">
        <a
          href="https://github.com/faisalahmed3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/faisal-ahmed4417/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:faisalahmed4417@gmail.com"
          className="hover:text-white transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/8801876141732"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright */}
      <p>
        &copy; {new Date().getFullYear()} <span className="text-[#ff7b72] font-medium">Faisal Ahmed</span>. All rights reserved.
      </p>
      
    </footer>
  );
};

export default Footer;
