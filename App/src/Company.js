// src/Company.js
import React, { useState, useEffect } from "react";

function Company({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const firstName = user?.email?.split("@")[0];

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (id) =>
    `hover:underline ${
      activeSection === id ? "text-yellow-400 font-semibold" : ""
    }`;

  // Dynamic progress bar color
  const progressColors = {
  home: "bg-gradient-to-r from-yellow-400 to-orange-400",
  about: "bg-gradient-to-r from-green-400 to-emerald-500",
  projects: "bg-gradient-to-r from-blue-400 to-indigo-500",
  contact: "bg-gradient-to-r from-pink-400 to-rose-500",
};


  return (
    <div className="min-h-screen flex flex-col font-sans scroll-smooth">
      {/* Navbar */}
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">GIGALOGIC AI</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#home" className={navLinkClass("home")}>Home</a>
            <a href="#about" className={navLinkClass("about")}>About Us</a>
            <a href="#projects" className={navLinkClass("projects")}>Projects</a>
            <a href="#contact" className={navLinkClass("contact")}>Contact</a>
            <button
              onClick={onLogout}
              className="ml-4 bg-red-600 px-3 py-1 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Scroll Progress Bar with dynamic color */}
        <div
          className={`h-1 transition-all duration-300 ${progressColors[activeSection]}`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-800 text-white flex flex-col space-y-3 p-4">
          <a href="#home" className={navLinkClass("home")}>Home</a>
          <a href="#about" className={navLinkClass("about")}>About Us</a>
          <a href="#projects" className={navLinkClass("projects")}>Projects</a>
          <a href="#contact" className={navLinkClass("contact")}>Contact</a>
          <button
            onClick={onLogout}
            className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </nav>
      )}

      {/* Home */}
      <section
        id="home"
        className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Welcome, {firstName} 👋</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          We deliver world-class solutions in software, building projects,
          electrical works, and end-to-end delivery projects.
        </p>
      </section>

      {/* About */}
      <section id="about" className="p-10 bg-white max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Our company specializes in delivering reliable and innovative
          solutions. With expertise in software development, building project
          management, and electrical services, we ensure excellence in every
          project we take on.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg hover:scale-105 transition transform duration-300">
            <h3 className="font-semibold text-lg">Building Projects</h3>
            <p className="text-sm text-gray-600">
              End-to-end building construction and project management.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg hover:scale-105 transition transform duration-300">
            <h3 className="font-semibold text-lg">Electrical Projects</h3>
            <p className="text-sm text-gray-600">
              Reliable electrical design and execution for industrial and
              residential needs.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg hover:scale-105 transition transform duration-300">
            <h3 className="font-semibold text-lg">Delivery Projects</h3>
            <p className="text-sm text-gray-600">
              Efficient project delivery with focus on timelines and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-blue-900 text-white p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p>
          📞 Phone:{" "}
          <a href="tel:+919876543210" className="underline">
            +91 98765 43210
          </a>
        </p>
        <p>
          📧 Email:{" "}
          <a href="mailto:info@mysoftwarecompany.com" className="underline">
            info@mysoftwarecompany.com
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/company/mysoftwarecompany"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/company/mysoftwarecompany
          </a>
        </p>
        <p className="text-sm mt-4">
          © {new Date().getFullYear()} My Software Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Company;
