import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-purple-400">Abhay Kumar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 typewriter">
            A <span className="text-blue-400">Full Stack Developer</span> &{" "}
            <span className="text-green-400">AI enthusiast</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            I'm a passionate developer specializing in creating beautiful,
            modern and functional web applications.
          </p>

          <div className="flex space-x-4">
            <a
              className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
              href=""
            >
              View Work
            </a>
            <a
              className="px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section – Image + Blobs */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Blob Behind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-700 opacity-70 blur-xl z-0"></div>

            {/* Floating Image */}
            <motion.img
              src={assets.profileImg}
              alt="Hero"
              className="relative w-full h-full md:h-80 md:w-80 object-cover rounded-full border-1 shadow-lg z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
