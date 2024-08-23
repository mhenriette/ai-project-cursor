"use client";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="text-center py-16 bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-green-400">Contact</h2>
      <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
        Feel free to reach out to me via email at{" "}
        <a href="mailto:john.doe@example.com" className="text-green-400">
          john.doe@example.com
        </a>{" "}
        📧
      </p>
    </motion.section>
  );
};

export default Contact;