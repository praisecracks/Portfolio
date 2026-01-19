import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUp, Home, User, Folder, Star, Tool, Mail } from "react-feather";
import DarkModeToggle from "./DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "projects", "testimonials", "toolkit", "contact"];

function Navbar() {
  const [bottomNavOpen, setBottomNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0);

      const activeScroll = scrollY + 120;
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setBottomNavOpen(false);
  };

  const icons = {
    home: <Home size={20} />,
    about: <User size={20} />,
    projects: <Folder size={20} />,
    testimonials: <Star size={20} />,
    toolkit: <Tool size={20} />,
    contact: <Mail size={20} />
  };

  return (
    <>
      {/* Top Header Bar - Always Visible */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-4 ${
        scrolled 
          ? "bg-white dark:bg-gray-900 backdrop-blur-xl shadow-lg"
          : "bg-transparent"

        }`}
      >
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
              <span className="kode-mono">PC</span>.dev
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-white/40 dark:border-gray-800/50 shadow-lg">
            <ul className="flex gap-6 text-sm font-semibold">
              {sections.map((sec) => (
                <li key={sec}>
                  <motion.button
                    onClick={() => scrollToSection(sec)}
                    className={`relative transition-all duration-300 group cursor-pointer py-1 px-3 ${
                      activeSection === sec
                        ? "text-teal-500"
                        : "text-gray-700 dark:text-gray-200 group-hover:text-teal-400"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 text-gray-900 dark:text-gray-300">
            <DarkModeToggle />
            {scrolled && (
              <motion.button
                className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-teal-500/40 border border-teal-500/30 text-teal-600 hidden xl:flex items-center justify-center"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.05, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.button>
            )}
            {/* Mobile Bottom Nav Toggle */}
            <motion.button
              onClick={() => setBottomNavOpen(!bottomNavOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl hover:bg-teal-500/30 border border-teal-500/30 text-gray-800 dark:text-gray-200 hover:text-teal-500 shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation Sheet */}
      <AnimatePresence>
        {bottomNavOpen && (
          <>
            {/* Dim Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[99] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBottomNavOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-[100] md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Handle Bar */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4 pt-6 pb-2 flex justify-center">
                <div className="w-8 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
              </div>

              {/* Navigation List */}
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-2xl rounded-t-3xl p-6 pb-12 space-y-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                    <span className="kode-mono">PC</span>.dev
                  </h2>
                  <motion.button
                    onClick={() => setBottomNavOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {sections.map((sec) => (
                    <motion.button
                      key={sec}
                      onClick={() => scrollToSection(sec)}
                      className={`group relative flex flex-col items-center p-4 rounded-2xl border-2 shadow-lg transition-all duration-300 h-28 ${
                        activeSection === sec
                          ? "bg-gradient-to-br from-teal-500 to-cyan-500 text-white border-teal-400/50 shadow-teal-500/30"
                          : "bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 border-gray-200/50 dark:border-gray-700/50 hover:bg-teal-500/10 dark:hover:bg-teal-500/20 hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-500/20 hover:scale-105"
                      }`}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                        {icons[sec]}
                      </div>
                      <span className="font-semibold text-sm leading-tight tracking-wide">
                        {sec.charAt(0).toUpperCase() + sec.slice(1)}
                      </span>

                      {/* Active Indicator */}
                      {activeSection === sec && (
                        <motion.div
                          className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-2xl -m-4 blur-sm"
                          layoutId="active-indicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Safe Area (for iPhone notch) */}
      <div className="h-20 lg:hidden" />
    </>
  );
}

export default Navbar;
