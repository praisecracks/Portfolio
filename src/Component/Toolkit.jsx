// Toolkit.jsx - PREMIUM UPGRADE 🚀
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaFigma, FaBootstrap, FaGem, FaGithub, FaNpm,
  FaDatabase
} from 'react-icons/fa';
import {
  SiJavascript, SiFirebase, SiTailwindcss, SiExpress, SiTypescript, SiPostman,
  SiMongodb, SiAdobephotoshop, SiVite
} from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";

const toolGroups = {
  Frontend: [
    { name: 'React', icon: <FaReact className="text-blue-400" />, experience: 4, proficiency: 92, desc: 'Modern UI library with hooks & concurrent features' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, experience: 4, proficiency: 95, desc: 'ES6+ modern web development language' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" />, experience: 3, proficiency: 85, desc: 'Type-safe JavaScript superset' },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, experience: 4, proficiency: 95, desc: 'Semantic markup & modern web standards' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, experience: 2, experience: 88, desc: 'Utility-first CSS framework' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, experience: 4, proficiency: 90, desc: 'Advanced styling with animations & flexbox' },
    { name: 'Vite', icon: <SiVite className="text-emerald-400" />, experience: 2, proficiency: 85, desc: 'Next-gen frontend tooling' },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, experience: 3, proficiency: 82, desc: 'Server-side JavaScript runtime' },
    { name: 'Express', icon: <SiExpress className="text-gray-800" />, experience: 2, proficiency: 78, desc: 'Fast Node.js web framework' },
    { name: 'Firebase', icon: <SiFirebase className="text-orange-400" />, experience: 2, proficiency: 85, desc: 'Real-time BaaS platform' },
    { name: 'Go', icon: <FaGolang className="text-teal-500" />, experience: 2, proficiency: 65, desc: 'High-performance backend language' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, experience: 2, proficiency: 75, desc: 'NoSQL document database' },
    { name: 'SQL', icon: <FaDatabase className="text-indigo-500" />, experience: 3, proficiency: 78, desc: 'Relational database systems' },
  ],
  Tools: [
    { name: 'Git/GitHub', icon: <FaGithub className="text-gray-800" />, experience: 4, proficiency: 92, desc: 'Version control & collaboration' },
    { name: 'NPM/Yarn', icon: <FaNpm className="text-red-600" />, experience: 3, proficiency: 88, desc: 'Package management' },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" />, experience: 2, proficiency: 85, desc: 'API development & testing' },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" />, experience: 2, proficiency: 82, desc: 'UI/UX design & prototyping' },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" />, experience: 2, proficiency: 75, desc: 'Professional image editing' },
  ],
};

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

function Toolkit() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = selectedCategory === 'All'
    ? Object.values(toolGroups).flat()
    : toolGroups[selectedCategory];

  // Staggered entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="toolkit" className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={cardVariants}
            className="kode-mono text-5xl sm:text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-purple-500 to-pink-500 mb-6 drop-shadow-2xl"
          >
            Technology
          </motion.h2>
          
          <motion.div
            variants={cardVariants}
            className="w-28 h-1 bg-gradient-to-r from-teal-500 via-purple-400 to-pink-500 rounded-full shadow-lg mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.p
            variants={cardVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-16 max-w-3xl leading-relaxed backdrop-blur-sm"
          >
            Technologies I use to build modern, scalable, and performant digital products.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-16 justify-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              custom={i}
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: (i) => ({
                  scale: 1,
                  opacity: 1,
                  transition: { delay: i * 0.1 }
                })
              }}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                boxShadow: "0 10px 30px rgba(20,184,166,0.4)"
              }}
              whileTap={{ scale: 0.96 }}
              className={`group relative px-8 py-4 text-lg font-bold rounded-3xl backdrop-blur-xl border-2 overflow-hidden transition-all duration-500 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-2xl shadow-teal-500/50 border-teal-400'
                  : 'bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-white border-gray-200/50 dark:border-gray-700/50 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="relative z-10">{category}</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 -skew-x-12 transform opacity-0 group-hover:opacity-100 transition-all duration-500 ${selectedCategory === category ? 'opacity-100 rotate-2' : ''}`} />
            </motion.button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {filteredTools.map((tool, index) => (
              <ToolCard key={`${tool.name}-${selectedCategory}`} tool={tool} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ToolCard({ tool, index }) {
  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1]
          }
        })
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(20,184,166,0.3)",
        transition: { duration: 0.4, ease: "backOut" }
      }}
      className="group relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl cursor-pointer overflow-hidden transform-gpu hover:-translate-y-2 transition-all duration-500"
    >
      {/* Shine Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        initial={{ x: -100 }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            className="text-5xl p-3 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl backdrop-blur-sm border border-teal-200/50 shrink-0"
            whileHover={{ 
              rotate: [0, 5, -5, 0],
              scale: 1.1,
              transition: { duration: 0.6 }
            }}
          >
            {tool.icon}
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-teal-600 transition-all duration-300 mb-2 leading-tight">
              {tool.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {tool.experience}+ years • <span className="font-medium">{tool.desc}</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-3 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0, scaleX: 1 }}
              animate={{ width: `${tool.proficiency}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 shadow-lg rounded-2xl relative overflow-hidden"
            >
              {/* Progress Shine */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ['0%', '-100%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
          <p className="text-right text-sm font-bold text-teal-600 dark:text-teal-400 mt-2 tracking-wide">
            {tool.proficiency}%
          </p>
        </div>
      </div>

      {/* Floating Proficiency Badge */}
      <motion.div 
        className="absolute top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100"
        initial={{ scale: 0, rotate: -180 }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 0,
          y: -8,
          transition: { type: "spring", stiffness: 400 }
        }}
      >
        <span className="text-xl font-black text-white drop-shadow-lg">{tool.proficiency}%</span>
      </motion.div>
    </motion.div>
  );
}

export default Toolkit;
