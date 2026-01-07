import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeModal = ({ onFinish }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      setShow(true);
      sessionStorage.setItem("visited", "true");

      setTimeout(() => {
        setShow(false);
        onFinish();
      }, 1200);
    } else {
      onFinish();
    }
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center
                     bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="text-4xl sm:text-8xl md:text-9xl font-bold
                       text-white tracking-wide text-center"
          >
            Hi 👋 <br />
            <span className="text-purple-400">
              Welcome to my portfolio
            </span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
