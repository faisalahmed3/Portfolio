import React from "react";
import { motion } from "framer-motion";
import skills from "../../data/skills";
import {
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiMongodb, SiFirebase, SiExpress, SiPostman,
} from "react-icons/si";

const iconMap = {
  FaReact: <FaReact className="text-cyan-400 text-4xl" />,
  SiTailwindcss: <SiTailwindcss className="text-cyan-400 text-4xl" />,
  SiJavascript: <SiJavascript className="text-yellow-400 text-4xl" />,
  FaNodeJs: <FaNodeJs className="text-green-500 text-4xl" />,
  SiExpress: <SiExpress className="text-gray-300 text-4xl" />,
  SiMongodb: <SiMongodb className="text-green-400 text-4xl" />,
  SiFirebase: <SiFirebase className="text-yellow-500 text-4xl" />,
  FaGithub: <FaGithub className="text-white text-4xl" />,
  FaFigma: <FaFigma className="text-pink-400 text-4xl" />,
  FaHtml5: <FaHtml5 className="text-orange-500 text-4xl" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-500 text-4xl" />,
  SiPostman: <SiPostman className="text-orange-300 text-4xl" />,
};

const Skills = () => {
  return (
    <motion.section
      className="flex flex-col justify-center items-center px-6 md:px-16 xl:px-64"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#ff7b72] mb-8 text-center">
        Skills & Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-red-400/40 transition duration-300 flex flex-col items-center gap-2 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {iconMap[skill.icon]}
            <p className="text-sm text-gray-200 mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
