import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-6 md:px-16 xl:px-64 pt-28 text-white">
      
      {/* Left Side Content */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#ff7b72] mb-4">
          Hi, I'm Md. Faisal Ahmed
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          MERN Stack Developer passionate about building full-stack web apps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="bg-[#ff3c38] hover:bg-[#d72a2a] text-white px-6 py-3 rounded-xl transition duration-300 font-semibold shadow-md"
          >
            View Projects
          </a>

          <a
            href="/Resume-Md Faisal Ahmed.pdf"
            download
            className="border border-[#ff3c38] text-[#ff3c38] hover:bg-[#d72a2a] hover:text-white px-6 py-3 rounded-xl transition duration-300 font-semibold shadow-md"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Side – Image with Gradient Border */}
      <motion.div
        className="flex-1 w-full max-w-sm relative group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-2 rounded-3xl bg-gradient-to-br from-[#ff7b72] via-[#4b0c27] to-[#1a0c10] shadow-xl group-hover:rotate-1 transition duration-300">
          <img
            src="/Faisa2l.jpg"
            alt="Faisal Ahmed"
            className="rounded-2xl border-4 border-[#ff7b72] shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
