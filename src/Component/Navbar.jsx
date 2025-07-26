import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import DarkModeToggle from './DarkModeToggle';

const sections = ['home', 'about', 'projects', 'Toolkit', 'contact'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = (id) =>
    `hover:text-teal-500 transition duration-300 ${
      activeSection === id ? 'text-teal-500 font-semibold' : ''
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm bg-white dark:bg-black dark:text-white transition">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        <div className="w-32 flex-shrink-0">
          <h1 className="text-2xl font-bold text-teal-500">Praise.dev</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
          {sections.map((sec) => (
            <li key={sec}>
              <a href={`#${sec}`} className={linkClasses(sec)}>
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="w-32 flex items-center gap-4 justify-end flex-shrink-0">
          <DarkModeToggle />
          <button onClick={toggleMenu} className="md:hidden" title="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4">
          <ul className="flex flex-col gap-4 font-medium">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  onClick={() => setMenuOpen(false)}
                  href={`#${sec}`}
                  className={linkClasses(sec)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
