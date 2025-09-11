import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="p-10 bg-gray-100 dark:bg-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        Our company specializes in delivering reliable and innovative solutions.
        With expertise in software development, building project management, and
        electrical services, we ensure excellence in every project we take on.
      </p>
    </motion.section>
  );
}

export default About;
