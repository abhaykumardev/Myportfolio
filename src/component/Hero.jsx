import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center pt-24 pb-16
                 bg-linear-to-r from-dark-100 via-dark-200 to-dark-100"
    >
      <div
        className="container mx-auto px-6 flex flex-col-reverse
                      md:flex-row items-center gap-12"
      >
        {/* LEFT: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-white mb-4"
          >
            Hi, I’m <span className="text-purple-400">Abhay Kumar</span>
          </h1>

          <h2
            className="text-xl sm:text-2xl lg:text-3xl
                         font-semibold mb-6"
          >
            A  <span className="text-blue-400"> Aspiring Full-Stack Developer</span> &{" "}
            <span className="text-green-400">AI Enthusiast</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            I build modern, performant, and user-friendly web applications with
            a strong focus on clean design and scalability.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row
                          gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 rounded-lg
                         font-medium hover:bg-purple-700 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-500
                         rounded-lg font-medium hover:bg-purple-500/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="relative
                          w-52 h-52
                          sm:w-64 sm:h-64
                          md:w-72 md:h-72
                          lg:w-80 lg:h-80"
          >
            {/* Blob */}
            <div
              className="absolute inset-0 rounded-full
                            bg-linear-to-r from-purple-400 to-purple-700
                            opacity-60 blur-2xl"
            />

            {/* Image */}

            <motion.img
              src={assets.profileImg}
              alt="Abhay Kumar"
              className="relative w-full h-full object-cover
             rounded-full border border-purple-400/40
             shadow-xl"
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
