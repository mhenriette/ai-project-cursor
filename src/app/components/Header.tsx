"use client";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between py-6 px-8 bg-gradient-to-r from-gray-900 to-black"
    >
      <div className="flex items-center mb-4 md:mb-0">
        <h1 className="text-xl  font-bold text-green-400">👨‍💻 John Doe</h1>
        <p className="text-xl  text-green-400 ml-4">
          Front-End Developer
        </p>
      </div>
      <nav>
        <ul className="flex flex-row space-x-6">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 px-3 py-2 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 px-3 py-2 rounded"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 px-3 py-2 rounded"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;