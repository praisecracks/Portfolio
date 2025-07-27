import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 t-20 transition-colors ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
                <div className="bubble bubble-3" />
        <div className="bubble bubble-3" />


      </div>
      
        {/* Branding */}
        <div className="text-xl font-bol dark:text-white font-semibold ">
          Praise.dev
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-teal-500 transition">About</a>
          <a href="#projects" className="hover:text-teal-500 transition">Projects</a>
          <a href="#contact" className="hover:text-teal-500 transition">Contact</a>
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/praisecracks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/durotoluwa-praise-9b3767357"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {year} Praise.dev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
