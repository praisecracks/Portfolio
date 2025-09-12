import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import web1 from "../assets/t.jpg";
import mobile from "../assets/rr.jpeg";
import web2 from "../assets/h.jpg";

const projects = [
  {
    title: "Portfolink Web App",
    platform: "Web",
    description:
      "A modern and responsive portfolio builder with a sharable one-time link instantly generated.",
    tech: ["React", "Tailwind CSS", "Vite", "Firebase", "Node.js", "Express.js", "AI"],
    image: web2,
    github: "https://github.com/praisecracks/Portfolink",
    live: "https://portfolink-ck.netlify.app",
  },
  {
    title: "News & Event Reporting System",
    platform: "Web",
    description: "A news and event reporting system for Dominion University.",
    tech: ["React", "Firebase", "CSS", "Tailwind CSS", "Boostrap"],
    image: web1,
    github: "https://github.com/praisecracks/DU-FEED-APP",
    live: "https://du-feed.netlify.app",
  },
  {
    title: "Animal Health Tracker",
    platform: "Mobile",
    description:
      "Mobile app that tracks animal health and connects to nearby vet clinics.",
    tech: ["React Native", "MongoDB", "Tailwind CSS", "Google Maps API", "Firebase"],
    image: mobile,
    github: "https://github.com/praisecracks/Animal-health-Tracker",
    live: "https://github.com/praisecracks/Animal-health-Tracker",
  },
];

function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const [filter, setFilter] = useState("All");

  // ✅ FIXED: Case-insensitive filtering
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.platform.toLowerCase() === filter.toLowerCase()
        );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12 transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Explore some of my recent projects built with a focus on intuitive
          user experiences, clean design, and reliable functionality.
        </motion.p>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-4 mb-10"
        >
          {["All", "Web", "Mobile"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium border transition ${
                filter.toLowerCase() === category.toLowerCase()
                  ? "bg-teal-500 text-white border-teal-500 shadow-md"
                  : "text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-teal-100 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setModalProject(project)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <span className="inline-block text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-1">
                  {project.platform}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-white max-w-2xl w-full mx-4 rounded-2xl p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">
                    {modalProject.title}
                  </h3>
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
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-4">
                  Platform: {modalProject.platform} <br />
                  Stack: {modalProject.tech.join(" • ")}
                </p>
                <div className="flex gap-4">
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={modalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
