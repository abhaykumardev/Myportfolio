import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'
const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-slate-900"
    >

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here are some of the technologies and tools I work with:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8">

          {
            skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-md hover:translate-y-2 transition  duration-300 cursor-pointer">
                <div className="flex items-center mb-4">  
                  <skill.icon className="text-4xl text-purple-400 mr-6 w-12 h-12" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
                <p className="text-gray-300">{skill.description}</p>
                <div>
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-dark-400 text-white text-sm px-3 py-1 rounded-full mr-2 mt-4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
    </motion.div>
  )
}

export default Skill
