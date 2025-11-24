import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-xl shadow-md overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-dark-400 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    className=" flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 text-center px-4 py-2 border border-purple  rounded-lg font-medium hover:bg-purple/20 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
        <div className='text-center mt-12'>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-purple  rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            <span>View More Projects</span>
            <FaArrowRight className='ml-2'/>
          </a>

        </div>
      </div>
    </motion.div>
  )
}

export default Project
