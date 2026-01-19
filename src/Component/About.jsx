import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FaHandshake,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaGoogle,
  FaStar,
  FaCalendarAlt,
  FaUsers,
} from 'react-icons/fa';
import { SiMeta } from 'react-icons/si';
import prof from '../assets/MySelf.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      setTilt({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills & Cloud Journey' },
    { id: 'timeline', label: 'Career Timeline' },
  ];

  const skills = [
    { icon: <FaReact />, label: 'MERN Stack', percent: 90 },
    { icon: <FaNodeJs />, label: 'Graphics', percent: 85 },
    { icon: <FaCloud />, label: 'Cloud & Go', percent: 60 },
    { icon: <FaGoogle />, label: 'Firebase & SQL', percent: 80 },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Senior Full-Stack Developer',
      achievements: [
        'Architected 5+ enterprise chat platforms',
        'Led Firebase optimization (99.9% uptime)',
        'Mentored 3 junior developers',
      ],
    },
    {
      year: '2023-2024',
      title: 'Full-Stack Developer',
      achievements: [
        'Delivered University Attendance Tracker',
        'Built News & Event Reporting System',
        'Created Animal Health Tracker app',
      ],
    },
    {
      year: '2021-2022',
      title: 'Frontend Specialist',
      achievements: [
        'Mastered React component patterns',
        'Performance optimization expert',
        'Mobile-first responsive design',
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12 relative z-10">

        {/* Left Section - Enhanced Tabs & Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          {/* Enhanced Tab Navigation */}
          <div className="flex gap-3 mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-teal-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/30'
                }`}
              >
                {activeTab === tab.id && <FaStar className="w-3 h-3" />}
                {tab.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* About Tab */}
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-teal-500 font-semibold mb-2 flex items-center gap-2">
                    <FaStar /> Full-Stack Developer · Creative Problem Solver
                  </h3>
                  <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 mb-6 leading-tight">
                    Durotoluwa Praise
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                    I’m a Full-Stack Software Developer with over five years of experience building{" "}
                    <span className="font-bold text-teal-500">scalable digital products</span> across web and mobile platforms. 
                    My work spans modern JavaScript stacks, real-time systems, and data-driven applications, with hands-on 
                    experience in both SQL and NoSQL databases. I design with{" "}
                    <span className="font-bold text-teal-500">performance, usability, and clean architecture</span> in mind, 
                    while steadily growing into AI-powered and cloud-native development.
                  </p>

                    <div className="flex items-center gap-3 p-4 bg-teal-50/50 dark:bg-teal-900/30 rounded-xl border border-teal-200/50">
                      <FaCloud className="text-teal-500 text-xl" />
                      <span className="font-semibold text-teal-600 animate-pulse">
                        Currently advancing into Cloud-native development with Go
                      </span>
                    </div>
                    <p className="font-medium italic text-teal-700 dark:text-teal-300">
                      "Performance, UX, maintainability — solutions that scale elegantly."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Skills Tab - Enhanced Progress Bars */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group p-6 bg-gradient-to-br from-white/80 to-gray-50/50 dark:from-gray-800/80 dark:to-gray-700/50 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 hover:border-teal-300/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="p-3 bg-teal-500/10 rounded-xl group-hover:bg-teal-500/20 transition-all">
                        <div className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100 group-hover:text-teal-600 transition-colors">
                          {skill.label}
                        </h4>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div
                          className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full shadow-lg relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percent}%` }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="absolute -top-8 right-0 text-lg font-black text-teal-600 drop-shadow-lg">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Timeline Tab - NEW Advanced Feature */}
            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-600" />
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex items-center group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl absolute -left-2 z-10 group-hover:scale-110 transition-all">
                        <span className="font-bold text-white text-sm drop-shadow-md">{item.year}</span>
                      </div>
                      <div className="ml-20 p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 hover:border-teal-300/50 transition-all ml-16">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-teal-600">
                          {item.title}
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((ach, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                              <FaStar className="text-teal-500 mt-1 w-4 h-4 flex-shrink-0" />
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Social & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 pt-8 border-t-2 border-teal-100 dark:border-teal-900"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex gap-4 flex-wrap">
                <motion.a 
                  href="https://github.com/praisecracks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-50/50 dark:bg-teal-900/50 hover:bg-teal-500 hover:text-white rounded-xl border border-teal-200/50 transition-all text-sm font-semibold"
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a 
                  href="http://www.linkedin.com/in/durotoluwa-praise-9b3767357" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50/50 dark:bg-blue-900/50 hover:bg-blue-600 hover:text-white rounded-xl border border-blue-200/50 transition-all text-sm font-semibold"
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
              <motion.a 
                href="https://x.com/POluwabumi/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white rounded-xl border border-gray-300 dark:border-gray-700 transition-all text-sm font-semibold"
              >
                <FaXTwitter /> Twitter
              </motion.a>

              </div>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-purple-700 transition-all duration-300 border border-teal-400/50"
              >
                <FaHandshake className="text-lg" /> Let’s Work Together
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Enhanced Profile with Orbiting Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ transform: `rotateY(${tilt.x * 0.5}deg) rotateX(${tilt.y * 0.5}deg)` }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-72 sm:w-80 md:w-96">
            {/* Enhanced Profile Image */}
            <motion.div className="relative group">
             <motion.img
                src={prof}
                alt="Durotoluwa Praise"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="relative w-full h-auto aspect-square object-cover shadow-2xl transition-all duration-500"
                style={{
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                  border: '6px solid rgba(20,184,166,0.35)',
                }}
              />

              {/* Animated Ring */}
            </motion.div>

            {/* Orbiting Tech Icons */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                animate={{ 
                  rotate: [0, 360] 
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute top-4 left-1/2 -translate-x-1/2"
              >
                <FaReact className="text-4xl text-cyan-400 drop-shadow-2xl hover:scale-125 transition-all duration-300" />
              </motion.div>
              <motion.div 
                animate={{ 
                  rotate: [0, -360] 
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute bottom-8 left-8"
              >
                <FaNodeJs className="text-5xl text-green-500 drop-shadow-2xl hover:scale-125 transition-all duration-300" />
              </motion.div>
              <motion.div 
                animate={{ 
                  rotate: [0, 360] 
                }}
                transition={{ 
                  duration: 35, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute top-12 right-8"
              >
                <SiMeta className="text-4xl text-blue-500 drop-shadow-2xl hover:scale-125 transition-all duration-300" />
              </motion.div>
              <motion.div 
                animate={{ 
                  rotate: [0, -360] 
                }}
                transition={{ 
                  duration: 28, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute bottom-12 right-12"
              >
                <FaGoogle className="text-5xl text-red-500 drop-shadow-2xl hover:scale-125 transition-all duration-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
