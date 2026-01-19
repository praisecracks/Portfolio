import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaFigma, FaBootstrap, FaGem, FaGithub, FaNpm,
} from 'react-icons/fa';
import {
  SiJavascript, SiFirebase, SiTailwindcss, SiExpress, SiTypescript, SiPostman,
} from 'react-icons/si';
import { FaDatabase } from "react-icons/fa6"; // For SQL and MongoDB
import { FaGolang } from "react-icons/fa6";
import { SiMongodb, SiAdobephotoshop } from "react-icons/si";


const toolGroups = {
  Frontend: [
    { name: 'React', icon: <FaReact className="text-blue-400" />, experience: 4, proficiency: 90, desc: 'Modern JavaScript library for building UIs' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, experience: 4, proficiency: 95, desc: 'Core programming language for web development' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" />, experience: 3, proficiency: 80, desc: 'Typed superset of JavaScript for better tooling' },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, experience: 4, proficiency: 95, desc: 'Markup language for structuring web content' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, experience: 4, proficiency: 90, desc: 'Style sheet language for designing web pages' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, experience: 2, proficiency: 85, desc: 'Utility-first CSS framework for rapid design' },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" />, experience: 3, proficiency: 85, desc: 'CSS framework for responsive design' },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, experience: 3, proficiency: 80, desc: 'JavaScript runtime for server-side development' },
    { name: 'Express', icon: <SiExpress className="text-gray-700 dark:text-white" />, experience: 2, proficiency: 75, desc: 'Minimalist web framework for Node.js' },
    { name: 'Firebase', icon: <SiFirebase className="text-orange-400" />, experience: 2, proficiency: 80, desc: 'Backend-as-a-service for real-time data & auth' },
    { name: 'Ruby', icon: <FaGem className="text-red-500" />, experience: 3, proficiency: 70, desc: 'Elegant programming language for backend development' },
        { name: 'Go', icon: <FaGolang className="text-teal-500" />, experience: 2, proficiency: 60, desc: 'For backend development and Cloud services' },
    { name: 'SQL', icon: <FaDatabase className="text-indigo-500" />, experience: 3, proficiency: 75, desc: 'Relational database management system' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, experience: 2, proficiency: 70, desc: 'NoSQL database for flexible document storage' },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-red-500" />, experience: 4, proficiency: 90, desc: 'Version control system for code collaboration' },
    { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white" />, experience: 4, proficiency: 90, desc: 'Git-based platform for code hosting & teamwork' },
    { name: 'NPM', icon: <FaNpm className="text-red-600" />, experience: 3, proficiency: 85, desc: 'Package manager for Node.js dependencies' },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" />, experience: 2, proficiency: 80, desc: 'API testing and development environment' },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" />, experience: 2, proficiency: 80, desc: 'UI/UX design tool for prototyping and wireframing' },
        { name: 'Photoshop', icon: <SiAdobephotoshop  className="text-blue-500" />, experience: 2, proficiency: 70, desc: 'UI/UX design tool for prototyping and wireframing' },

  ],
};

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

function Toolkit() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = selectedCategory === 'All'
    ? Object.values(toolGroups).flat()
    : toolGroups[selectedCategory];

  return (
    <section id="toolkit" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="kode-mono text-5xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-teal-800 via-purple-300 to-purple-600 mb-4 text-left drop-shadow-lg"
        >
          Technology
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-400 rounded-full mb-6"></div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl text-left"
        >
          Technologies I use to build, design, and deliver modern digital products.
        </motion.p>

        <div className="flex justify-start flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all border ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Individual Tool Card with tilt effect
function ToolCard({ tool, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  let cardRef = null;

  const handleMouseMove = (e) => {
    const rect = cardRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15; // tilt max 15deg
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={(el) => (cardRef = el)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        perspective: 1000,
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(20,184,166,0.3)' }}
      className="relative backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-white/30 dark:border-gray-700 rounded-xl p-6 cursor-pointer transition-transform"
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className="text-4xl"
          whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
        >
          {tool.icon}
        </motion.div>
        <div className="text-left">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{tool.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {tool.experience}+ yrs • <span className="italic">{tool.desc}</span>
          </p>
        </div>
      </div>
      <div className="mt-2">
        <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${tool.proficiency}%` }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-teal-500"
          />
        </div>
        <p className="text-xs text-right text-teal-600 dark:text-teal-400 mt-1 font-medium">
          {tool.proficiency}%
        </p>
      </div>
    </motion.div>
  );
}

export default Toolkit;
