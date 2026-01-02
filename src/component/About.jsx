import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        id="about"
        className="py-20 bg-dark-200"
      >
        <div className="container mx-0 px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            About <span className="text-purple">Me</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Get to know more about me and my journey as a developer.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Section - Image */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg  ">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full h-full object-cover"
                src={assets.profileImg7}
                alt="About Me"
              />
            </div>
            {/* Right Section - Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-1/2"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  My Journey as a Developer
                </h3>
                <p className="text-gray-300 mb-6">
                  I'm Abhay Kumar, a dedicated Full Stack Developer and AI
                  enthusiast with a passion for crafting modern and functional
                  web applications. My journey in tech has been fueled by
                  curiosity and a relentless drive to learn and innovate.
                </p>
                <p className="text-gray-300 mb-6">
                  With expertise in both front-end and back-end technologies, I
                  strive to create seamless user experiences while ensuring
                  robust functionality. When I'm not coding, you'll find me
                  exploring the latest advancements in AI and how they can be
                  integrated into web development.
                </p>
                <p className="text-gray-300 mb-6">
                  Let's connect and build something amazing together!
                </p>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-dark-300 p-6 rounded-2xl shadow-md transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer"
                    >
                      <div>
                        <info.icon className="text-4xl text-purple mb-4" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-purple">
                        {info.title}
                      </h4>
                      <p className="text-gray-400">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
