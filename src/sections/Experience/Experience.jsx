import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Sales Team Lead",
    company: "Elite Mart",
    duration: "Nov 2022 – Jan 2024",
    highlights: [
      "Started as Sales Executive and promoted within 5 months.",
      "Increased online sales by 90% through leadership and strategy.",
      "Led a high-performing sales team and exceeded sales targets.",
    ],
  },
  {
    role: "SEO Consultant",
    company: "Fiverr",
    duration: "July 2023 – Dec 2024",
    highlights: [
      "Worked with brands like The Tea Story.co, Children’s Place, and Beardilizer.",
      "Boosted organic traffic by 80–90% using data-driven SEO.",
      "Improved visibility and keyword ranking through optimization strategies.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      className="flex flex-col justify-center items-center px-6 md:px-16 xl:px-64"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#ff7b72] mb-10 text-center">
        Experience
      </h2>

      <div className="relative border-l border-[#ff7b72] w-full space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="ml-4 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-red-400/40 transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 top-6 w-3 h-3 bg-[#ff7b72] rounded-full shadow-md"></div>

            {/* Role & Company */}
            <h3 className="text-xl font-semibold text-[#ff7b72] mb-1">
              {exp.role}{" "}
              <span className="text-gray-300 font-normal">@ {exp.company}</span>
            </h3>

            {/* Duration */}
            <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

            {/* Highlights */}
            <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
