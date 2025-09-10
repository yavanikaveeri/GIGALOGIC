// src/components/Navbar.js
import React, { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#projects", label: "Projects" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // shrink + solid after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-white sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-blue-900 py-3 shadow-xl"
          : "bg-gradient-to-r from-blue-900/70 to-indigo-800/70 backdrop-blur-md py-5 shadow-md"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
        {/* Logo / Brand */}
        <h1
          className={`font-extrabold tracking-wide transition-all duration-500 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          GIGALOGIC <span className="text-indigo-300">AI</span>
        </h1>

        {/* Navigation */}
        <div className="flex items-center space-x-8">
          {/* Horizontal Nav with | separators */}
          <nav className="flex items-center space-x-6 text-lg font-bold">
            {links.map((link, index) => (
              <React.Fragment key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-indigo-300 transition-colors duration-300"
                >
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="text-indigo-400">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Contact Us Button with fade + glow + pulse that stops on hover */}
          <a
            href="#contact"
            className={`ml-6 font-bold px-5 py-2 rounded-full shadow-md transition-all duration-500 transform
              ${scrolled
                ? "bg-indigo-500 hover:bg-indigo-600 opacity-100 translate-y-0 shadow-indigo-500/50 hover:shadow-indigo-400/80 hover:scale-105 animate-[pulse_2s_ease-in-out_infinite] hover:animate-none"
                : "bg-indigo-500 opacity-0 translate-y-[-10px]"
              }`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
