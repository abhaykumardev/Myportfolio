import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen flex items-center pt-24 pb-16
                 bg-linear-to-r from-dark-100 via-dark-200 to-dark-100"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse
                      md:flex-row items-center gap-12">

        {/* LEFT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h1
            variants={textVariant}
            className="text-3xl sm:text-4xl lg:text-5xl
                       font-bold text-white mb-4"
          >
            Hi, I’m <span className="text-purple-400">Abhay Kumar</span>
          </motion.h1>

          <motion.h2
            variants={textVariant}
            className="text-xl sm:text-2xl lg:text-3xl
                       font-semibold mb-6"
          >
            A{" "}
            <span className="text-blue-400">Full-Stack Developer (React)</span>{" "}
            & <span className="text-green-400">AI Enthusiast</span>
          </motion.h2>

          <motion.p
            variants={textVariant}
            className="text-base sm:text-lg text-gray-300 mb-8
                       max-w-xl mx-auto md:mx-0"
          >
            I build modern, performant, and user-friendly web applications
            using React, Tailwind, and modern JavaScript with a strong focus
            on clean UI and real-world problem solving.
          </motion.p>

          <motion.div
            variants={textVariant}
            className="flex flex-col sm:flex-row gap-4
                       justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 rounded-lg
                         font-medium transition transform
                         hover:-translate-y-1 hover:shadow-lg"
            >
              View Work
            </a>

            <a
              href="/my_resume.pdf"
              download
              className="px-6 py-3 bg-purple-600 rounded-lg
                         font-medium transition transform
                         hover:-translate-y-1 hover:shadow-lg"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-500
                         rounded-lg font-medium transition
                         hover:bg-purple-500/20"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64
                          md:w-72 md:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full
                            bg-linear-to-r from-purple-400
                            to-purple-700 opacity-60 blur-2xl" />

            <motion.img
              src={assets.profileImg}
              alt="Abhay Kumar"
              className="relative w-full h-full object-cover
                         rounded-full border border-purple-400/40
                         shadow-2xl"
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
