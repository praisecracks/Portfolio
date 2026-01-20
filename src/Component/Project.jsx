// Projects.jsx - Hearts REMOVED ✅
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTimes, 
  FaGlobe, 
  FaMobileAlt, 
  FaHammer
} from "react-icons/fa";
import web1 from "../assets/t.jpg";
import mobile from "../assets/rr.jpeg";
import web2 from "../assets/h.jpg";
import pygame from "../assets/pygame.jpg";
import famchat from "../assets/famchat.jpg";

const projects = [
  {
    id: "famchat",
    title: "FamChat",
    platform: "Web & Mobile",
    description: "A real-time family chat application designed for private, secure communication with a clean and user-friendly interface.",
    tech: ["React", "Firebase", "Vite", "Express.js", "Tailwind css", "Open AI"],
    image: famchat,
    github: "https://github.com/praisecracks/FamChat",
    live: "https://famchatt.netlify.app",
    isOngoing: true
  },
  {
    id: "portfolink",
    title: "Portfolink Web App",
    platform: "Web",
    description: "A modern and responsive portfolio builder with a sharable one-time link instantly generated.",
    tech: ["React", "Tailwind CSS", "Vite", "Node.js", "Express.js", "Open AI"],
    image: web2,
    github: "https://github.com/praisecracks/Portfolink",
    live: "https://portfolink-ck.netlify.app"
  },
  {
    id: "dufeed",
    title: "News & Event Reporting System",
    platform: "Web",
    description: "A news and event reporting system for Dominion University.",
    tech: ["React", "CSS", "Tailwind CSS", "Bootstrap", "Vite", "Firebase"],
    image: web1,
    github: "https://github.com/praisecracks/DU-FEED-APP",
    live: "https://du-feed.netlify.app"
  },
  {
    id: "animal",
    title: "Animal Health Tracker",
    platform: "Mobile",
    description: "Mobile app that tracks animal health and connects to nearby vet clinics.",
    tech: ["React Native", "Tailwind CSS", "Google Maps API"],
    image: mobile,
    github: "https://github.com/praisecracks/Animal-health-Tracker",
    live: "https://github.com/praisecracks/Animal-health-Tracker"
  },
  {
    id: "pygame2048",
    title: "Pygame2048",
    platform: "Mobile",
    description: "2048 implemented with Python and Pygame deployed on Vercel and playable in-browser.",
    tech: ["Python", "Pygame"],
    image: pygame,
    github: "https://github.com/praisecracks/PYGAME-2048",
    live: "https://pygame-2048.vercel.app"
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  // Apply category filter
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.platform.toLowerCase().includes(filter.toLowerCase()));

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-20 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="kode-mono text-5xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-purple-300 to-purple-600 mb-6"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
        >
          Explore my recent work with a focus on futuristic design, smooth UX, and interactive functionality.
        </motion.p>

        {/* Filter buttons + toggle */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div className="flex gap-3 flex-wrap">
            {["All", "Web", "Mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
                  filter === category
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-none shadow-lg shadow-teal-500/30"
                    : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-teal-500"
                }`}
              >
                {category === "Web" ? <FaGlobe className="inline mr-2" /> : category === "Mobile" ? <FaMobileAlt className="inline mr-2" /> : null}
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2.5 text-sm font-semibold rounded-full border border-gray-400 dark:border-gray-700 hover:bg-teal-500 hover:text-white transition dark:text-gray-400 dark:hover:text-gray-200"
          >
            {showAll ? "Show Less" : "Show All Projects"}
          </button>
        </div>

        {/* Grid layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className={`grid gap-8 ${showAll ? "sm:grid-cols-2" : "md:grid-cols-12"}`}
        >
          {showAll ? (
            filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setModalProject(p)}
                className="relative cursor-pointer group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl"
              >
                {/* Ongoing Development Badge */}
                {p.isOngoing && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                      <FaHammer className="w-3 h-3" />
                      In Development
                    </div>
                  </div>
                )}

                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-5 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{p.description}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <>
              {displayedProjects[0] && (
                <div
                  className="md:col-span-7 col-span-12 group relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => setModalProject(displayedProjects[0])}
                >
                  {/* Ongoing Development Badge for featured project */}
                  {displayedProjects[0].isOngoing && (
                    <div className="absolute top-6 right-16 z-10">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                        <FaHammer className="w-4 h-4" />
                        In Development
                      </div>
                    </div>
                  )}

                  <img
                    src={displayedProjects[0].image}
                    alt={displayedProjects[0].title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{displayedProjects[0].title}</h3>
                    <p className="text-gray-300">{displayedProjects[0].description}</p>
                  </div>
                </div>
              )}

              <div className="md:col-span-5 col-span-12 grid grid-rows-2 gap-6">
                {displayedProjects.slice(1, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setModalProject(p)}
                    className="group relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg cursor-pointer"
                  >
                    {/* Ongoing Development Badge for stacked projects */}
                    {p.isOngoing && (
                      <div className="absolute top-3 right-10 z-10">
                        <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                          <FaHammer className="w-2.5 h-2.5" />
                          Dev
                        </div>
                      </div>
                    )}

                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h4 className="text-lg font-bold text-white">{p.title}</h4>
                      <p className="text-sm text-gray-300 mt-2 line-clamp-2">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-white max-w-3xl w-full rounded-2xl p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Ongoing badge in modal */}
                {modalProject.isOngoing && (
                  <div className="mb-4 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg w-fit">
                    <FaHammer className="w-4 h-4" />
                    Currently in Active Development 🚀
                  </div>
                )}

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{modalProject.title}</h3>
                  <button
                    onClick={() => setModalProject(null)}
                    className="text-gray-500 hover:text-teal-500 transition transform hover:rotate-90"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                <p className="mb-3">{modalProject.description}</p>

                {/* Tech Stack */}
                {modalProject.tech && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {modalProject.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {modalProject.github && (
                    <a
                      href={modalProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-700 flex items-center gap-2 font-medium"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                  {modalProject.live && (
                    <a
                      href={modalProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-700 flex items-center gap-2 font-medium"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
