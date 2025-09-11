import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "AI in Construction: How Technology Shapes the Future",
    author: "Admin",
    date: "September 10, 2025",
    excerpt:
      "Artificial intelligence is transforming construction projects by improving efficiency, reducing risks, and enabling smarter decision-making.",
  },
  {
    title: "5 Electrical Safety Tips for Businesses",
    author: "Team GIGALOGIC",
    date: "August 28, 2025",
    excerpt:
      "Electrical safety is crucial in workplaces. Here are five key tips every company should follow to protect employees and assets.",
  },
  {
    title: "Project Delivery Excellence: Our Approach",
    author: "Project Team",
    date: "August 12, 2025",
    excerpt:
      "Learn how our company ensures timely and high-quality delivery across all projects, from planning to execution.",
  },
];

function Blog() {
  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center">Company Blog</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              By {post.author} • {post.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            <button className="mt-4 text-blue-600 hover:underline">
              Read More →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
