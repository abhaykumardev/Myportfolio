import React, { useState } from "react";
import { FaBars, FaCut } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            My
            <span className="text-purple">Portfolio</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#projects"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#dsa"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>DSA</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {showMenu ? (
            <FaCut
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center items-center">
          <a
            onClick={() => setShowMenu(false)}
            href="#home"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Home</span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#about"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>About</span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#skills"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Skills</span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#projects"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Projects</span>
          </a>
          <a
            href="#dsa"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>DSA</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#contact"
            className="relative text-white/80 hover:text-purple transition-all duration-300 group"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
