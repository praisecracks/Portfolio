// Projects.jsx
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
import famchat from "../../public/famchat.jpg";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.03, rotateX: -2, rotateY: 3, transition: { type: "spring", stiffness: 300 } }
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [modalProject, setModalProject] = useState(null);

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
          className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl"
        >
          Explore my recent work with a focus on futuristic design, smooth UX, and interactive functionality.
        </motion.p>

        {/* Filters */}
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

        {/* Project Cards Grid */}
        <motion.div
          className={`grid gap-8 ${showAll ? "sm:grid-cols-2 md:grid-cols-3" : "md:grid-cols-12"}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setModalProject(project)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg`}
            >
              {project.isOngoing && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                    <FaHammer className="w-3 h-3" />
                    In Development
                  </div>
                </div>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="p-5 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{project.description}</p>
              </div>
            </motion.div>
          ))}
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
