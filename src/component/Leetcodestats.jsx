import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/Abhayk911")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error);
  }, []);

  if (!stats) {
    return (
      <p className="text-gray-300 text-center mt-8">
        Loading LeetCode stats...
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="container mx-auto px-6 mt-16 mb-10"
    >
      <div
        className="relative max-w-md rounded-xl p-6
                   bg-dark-200 border border-purple-400/30
                   shadow-xl overflow-hidden text-center mx-auto justify-center"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-linear-to-r
                        from-purple-400 to-purple-700
                        opacity-20 blur-2xl mb-10" />

        <h3 className="relative text-xl font-semibold text-white mb-4">
          LeetCode Stats
        </h3>

        <div className="relative space-y-2 text-gray-300">
          <p>Total Solved: <span className="text-purple-400 font-semibold">{stats.totalSolved}</span></p>
          <p>Easy: <span className="text-green-400">{stats.easySolved}</span></p>
          <p>Medium: <span className="text-blue-400">{stats.mediumSolved}</span></p>
          <p>Hard: <span className="text-red-400">{stats.hardSolved}</span></p>
          <p>Acceptance Rate: <span className="text-purple-400">{stats.acceptanceRate}%</span></p>
        </div>
      </div>
    </motion.div>
  );
};

export default LeetCodeStats;
