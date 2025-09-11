import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleDarkMode }) {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">GIGALOGIC AI</h1>
      <nav className="space-x-6 hidden md:block">
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/blog" className="hover:text-gray-300">Blog</Link>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="ml-4 px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
      >
        🌙
      </button>
    </header>
  );
}

export default Header;
