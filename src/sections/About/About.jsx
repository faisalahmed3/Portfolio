import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className=" flex flex-col justify-center items-center px-6 md:px-16 xl:px-64"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#ff7b72] mb-6 text-center">
        About Me
      </h2>

      <p className="text-gray-100 text-lg md:text-xl leading-relaxed text-center mb-12">
        I'm a passionate MERN Stack Developer with a strong foundation in full-stack JavaScript.
        I love turning ideas into real-world web applications that are clean, scalable, and user-friendly.
        I enjoy working in collaborative environments and continuously learning new technologies.
      </p>

      {/* Education Cards */}
      <div className="grid gap-6 md:grid-cols-3 w-full">
        <div className="bg-white/10 rounded-xl p-6 shadow-xl hover:shadow-red-400/40 transition duration-300">
          <h3 className="text-xl font-semibold text-[#ff7b72] mb-2">East Delta University</h3>
          <p className="text-gray-200">BSc in Computer Science & Engineering</p>
          <p className="text-sm text-gray-400">2022 - Present </p>
        </div>

        <div className="bg-white/10 rounded-xl p-6 shadow-xl hover:shadow-red-400/40 transition duration-300">
          <h3 className="text-xl font-semibold text-[#ff7b72] mb-2">Omargani M.E.S College</h3>
          <p className="text-gray-200">Higher Secondary Certificate (HSC)</p>
          <p className="text-sm text-gray-400">2021 | GPA: 4.11</p>
        </div>

        <div className="bg-white/10 rounded-xl p-6 shadow-xl hover:shadow-red-400/40 transition duration-300">
          <h3 className="text-xl font-semibold text-[#ff7b72] mb-2">Chandgoan NMC Model High School</h3>
          <p className="text-gray-200">Secondary School Certificate (SSC)</p>
          <p className="text-sm text-gray-400">2019 | GPA: 4.17</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
