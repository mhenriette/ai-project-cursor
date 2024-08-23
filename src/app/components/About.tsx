"use client";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-center py-16 bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-green-400">About Me</h2>
      <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
        Hi! Im John Doe, a passionate front-end developer with 3 years of
        experience in building beautiful and responsive web applications. I love
        working with modern technologies like React, Next.js, and Tailwind CSS.
        🚀
      </p>
    </motion.section>
  );
};

export default About;