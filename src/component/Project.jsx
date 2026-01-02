import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 sm:py-20 bg-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base text-center
                      max-w-xl mx-auto mb-12 sm:mb-16">
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div
          className="grid gap-6 sm:gap-8
                     grid-cols-1
                     sm:grid-cols-2
                     lg:grid-cols-3
                     max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-dark-300 rounded-xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover"
                loading="lazy"
              />

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-dark-400 text-xs sm:text-sm
                                 px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2
                               bg-purple-500 rounded-lg font-medium
                               hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2
                               border border-purple rounded-lg font-medium
                               hover:bg-purple/20 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2
                       px-6 py-3 border border-purple
                       rounded-lg font-medium
                       hover:bg-purple/20 transition"
          >
            View More Projects
            <FaArrowRight />
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default Project;
