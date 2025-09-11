import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="p-10 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold">Good Evening 👋</h2>
      <p className="mt-4 text-lg">
        We deliver world-class solutions in software, building projects,
        electrical works, and end-to-end delivery processes.
      </p>
      <button className="mt-6 bg-white text-blue-900 px-6 py-2 rounded-lg shadow hover:bg-gray-200">
        Get in Touch
      </button>
    </motion.section>
  );
}

export default Hero;
