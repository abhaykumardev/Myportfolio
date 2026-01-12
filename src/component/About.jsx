import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          A quick overview of who I am, what I do, and how I approach building software.
        </p>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">

          {/* Identity Line */}
          <p className="text-purple text-sm font-medium mb-3">
            Full Stack Developer • React • Next.js • Backend • AI-curious
          </p>

          <h3 className="text-2xl font-semibold mb-6">
            My Journey as a Developer
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            I'm Abhay Kumar, a Full Stack Developer who enjoys building clean,
            scalable, and user-focused web applications. I like turning ideas
            into real products through thoughtful design and solid engineering.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I work across both front-end and back-end technologies, focusing on
            performance, maintainability, and good user experience. Alongside
            web development, I actively explore how modern AI tools can be
            integrated into applications to solve real-world problems.
          </p>

          <p className="text-gray-300 mb-10">
            I’m always learning, improving, and open to opportunities where I
            can grow while building meaningful products.
          </p>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-dark-300 p-6 rounded-xl shadow-md text-left"
              >
                <info.icon className="text-3xl text-purple mb-3" />
                <h4 className="text-lg font-semibold mb-2">
                  {info.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Optional Highlight Strip */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-dark-300 rounded-xl p-5">
              <h4 className="text-2xl font-bold text-purple mb-1">200+</h4>
              <p className="text-gray-400 text-sm">DSA Problems Solved</p>
            </div>
            <div className="bg-dark-300 rounded-xl p-5">
              <h4 className="text-2xl font-bold text-purple mb-1">10+</h4>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>
            <div className="bg-dark-300 rounded-xl p-5">
              <h4 className="text-2xl font-bold text-purple mb-1">Daily</h4>
              <p className="text-gray-400 text-sm">Learning & Improvement</p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;
