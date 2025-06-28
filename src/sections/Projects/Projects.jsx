import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <motion.section
      className="flex flex-col justify-center items-center px-6 md:px-16 xl:px-64"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#ff7b72] mb-10 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-red-400/40 transition duration-300 flex flex-col gap-4 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {/* Screenshot with Gradient Border */}
            <div className="p-1 rounded-xl bg-gradient-to-br from-[#ff7b72] via-[#4b0c27] to-[#1a0c10] shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg border-2 border-[#ff7b72] hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Details */}
            <h3 className="text-xl font-semibold text-[#ff7b72] mt-4">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm mb-2">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 text-xs text-[#ff7b72] mb-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-black/30 px-2 py-1 rounded-full text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 items-center text-white text-sm ">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <FaExternalLinkAlt className="mr-1" /> Live
              </a>
              <a
                href={project.client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <FaGithub className="mr-1" /> Client
              </a>
              {project.server && (
                <a
                  href={project.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  <FaGithub className="mr-1" /> Server
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
