import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Building Projects", desc: "End-to-end construction and project management." },
  { title: "Electrical Projects", desc: "Reliable electrical design and execution for industrial and residential projects." },
  { title: "Delivery Projects", desc: "Efficient project delivery with focus on timelines and quality." },
];

function Projects() {
  return (
    <section className="p-10 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-lg shadow hover:shadow-xl bg-gray-50 dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
