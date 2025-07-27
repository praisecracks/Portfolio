import React, { useState, useEffect } from "react";
import { Menu, X } from "react-feather";
import DarkModeToggle from "./DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "projects", "Toolkit", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      const activeScroll = scrollY + 100;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= activeScroll && el.offsetTop + el.offsetHeight > activeScroll) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (id) =>
    `relative px-1 py-1 transition-all duration-300 group ${
      activeSection === id ? "text-teal-500 font-semibold" : "text-gray-700 dark:text-gray-200"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-white/60 dark:bg-black/40  dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        <div className="w-32 flex-shrink-0">
          <h1 className="text-2xl font-bold text-teal-500">Praise.dev</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={linkClasses(sec)}
                aria-label={`Go to ${sec}`}
              >
                <span className="relative group">
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full shadow-md shadow-teal-400" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="w-32 flex items-center gap-4 justify-end text-teal-500">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 dark:text-white"
            title="Toggle menu"
            aria-label="Toggle mobile navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden bg-white/80 dark:bg-black/90 backdrop-blur-md px-6 pt-2 pb-6 rounded-b-lg shadow-md"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-4 font-medium text-base">
              {sections.map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                      activeSection === sec
                        ? "text-teal-500 font-semibold"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    aria-label={`Navigate to ${sec}`}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
