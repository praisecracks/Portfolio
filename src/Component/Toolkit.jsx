import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaFigma, FaBootstrap, FaGem
} from 'react-icons/fa';
import {
  SiJavascript, SiFirebase, SiTailwindcss, SiExpress
} from 'react-icons/si';

const tools = [
  {
    name: 'React',
    icon: <FaReact className="text-blue-400" />,
    experience: 3,
    proficiency: 90,
    desc: 'Modern JavaScript library for building UIs',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400" />,
    experience: 4,
    proficiency: 95,
    desc: 'Core programming language for web development',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-cyan-400" />,
    experience: 2,
    proficiency: 85,
    desc: 'Utility-first CSS framework for rapid design',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="text-orange-400" />,
    experience: 2,
    proficiency: 80,
    desc: 'Backend-as-a-service for real-time data & auth',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-orange-500" />,
    experience: 4,
    proficiency: 95,
    desc: 'Markup language for structuring web content',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-blue-500" />,
    experience: 4,
    proficiency: 90,
    desc: 'Style sheet language for designing web pages',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500" />,
    experience: 3,
    proficiency: 80,
    desc: 'JavaScript runtime for server-side development',
  },
  {
    name: 'Express',
    icon: <SiExpress className="text-gray-700 dark:text-white" />,
    experience: 2,
    proficiency: 75,
    desc: 'Minimalist web framework for Node.js',
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="text-red-500" />,
    experience: 4,
    proficiency: 90,
    desc: 'Version control system for code collaboration',
  },
  {
    name: 'Figma',
    icon: <FaFigma className="text-pink-500" />,
    experience: 2,
    proficiency: 70,
    desc: 'UI/UX design tool for prototyping and wireframing',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="text-purple-600" />,
    experience: 3,
    proficiency: 85,
    desc: 'CSS framework for responsive design',
  },
  {
    name: 'Ruby',
    icon: <FaGem className="text-red-500" />,
    experience: 2,
    proficiency: 70,
    desc: 'Elegant programming language for backend development',
  },
];

function Toolkit() {
  return (
    <section id="Toolkit" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Toolkit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto"
        >
          Technologies I use to build, design, and deliver modern digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{tool.icon}</div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{tool.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tool.experience}+ yrs • <span className="italic">{tool.desc}</span>
                  </p>
                </div>
              </div>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
                <div className="bubble bubble-3" />
        <div className="bubble bubble-3" />


      </div>
      
              {/* Proficiency Bar */}
              <div className="mt-2">
                <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.proficiency}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-teal-500"
                  ></motion.div>
                </div>
                <p className="text-sm text-right text-teal-600 dark:text-teal-400 mt-1">
                  {tool.proficiency}%
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Toolkit;
