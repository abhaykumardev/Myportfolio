import React from "react";
import { motion } from "framer-motion";

const DSASection = () => {
  return (
    <motion.section
      id="dsa"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-[#111]"
    >
      <div className="container mx-auto px-6">
     
          {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Problem Solving &{" "} <span className="text-purple-400">Data Structures</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base text-center
                      max-w-xl mx-auto mb-12 sm:mb-16">
          I strengthen my core computer science fundamentals through consistent
          problem solving and optimized algorithmic thinking.
        </p>





        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="rounded-xl bg-dark-100 p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-500">200+</h3>
            <p className="text-gray-400 mt-2">DSA Problems Solved</p>
          </div>

          <div className="rounded-xl bg-dark-100 p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white">Core Topics</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Arrays, Strings, Trees, Graphs, DP
            </p>
          </div>

          <div className="rounded-xl bg-dark-100 p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white">Platforms</h3>
            <p className="text-gray-400 mt-2 text-sm">
              LeetCode, CodeStudio
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 text-center justify-center ">
          <a
            href="https://leetcode.com/Abhayk911"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-purple-500
                       font-medium text-white
                       hover:bg-purple-700 transition"
          >
            LeetCode Profile
          </a>

          <a
            href="https://www.naukri.com/code360/profile/a06f229d-9508-44a5-980d-a317945b8222"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-purple-500
                       text-white hover:bg-purple-500/20 transition"
          >
            CodeStudio Profile
          </a>
          <a
            href="https://leetcode.com/Abhayk911"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-purple-500
                       font-medium text-white
                       hover:bg-purple-700 transition"
          >
            Geeks For Geeks Profile
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default DSASection;
