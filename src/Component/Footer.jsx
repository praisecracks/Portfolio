import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  const bubbles = Array.from({ length: 5 }, (_, i) => `bubble-${i + 1}`);

  return (
  <footer className="relative bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 px-6 py-10 transition-colors overflow-hidden">
  {/* Background Bubbles */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    {bubbles.map((b, i) => (
      <div key={i} className={`bubble ${b}`} />
    ))}
  </div>

  {/* Footer Content */}
  <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Branding */}
    <div className="text-xl font-bold dark:text-white font-semibold">
      Praise.dev
    </div>

    {/* Navigation */}
    <nav className="flex gap-6 text-sm flex-wrap justify-center md:justify-start">
      <a href="#about" className="hover:text-teal-500 transition">About</a>
      <a href="#projects" className="hover:text-teal-500 transition">Projects</a>
      <a href="#contact" className="hover:text-teal-500 transition">Contact</a>
    </nav>

    {/* Socials */}
    <div className="flex gap-4">
      <a href="https://github.com/praisecracks" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition">
        <FaGithub size={20} />
      </a>
      <a href="https://www.linkedin.com/in/durotoluwa-praise-9b3767357" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition">
        <FaLinkedin size={20} />
      </a>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="relative z-10 mt-8 text-center text-sm text-gray-400">
    © {year} Praise.dev. All rights reserved.
  </div>
</footer>

  );
}

export default Footer;
