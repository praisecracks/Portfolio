import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHandshake,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaGoogle,
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
    { id: 'projects', label: 'Projects & Experience' },
  ];

  const skills = [
    { icon: <FaReact />, label: 'MERN Stack', percent: 90 },
    { icon: <FaNodeJs />, label: 'Graphics', percent: 85 },
    { icon: <FaCloud />, label: 'Cloud & Go', percent: 60 },
    { icon: <FaGoogle />, label: 'Firebase & SQL', percent: 80 },
  ];

  const projects = [
    {
      title: 'University Lecture Attendance Tracker',
      desc: 'System that tracks attendance and generates analytics.',
    },
    {
      title: 'News & Event Reporting System',
      desc: 'Real-time web app for campus news and events with admin moderation.',
    },
    {
      title: 'Animal Health Tracker',
      desc: 'Mobile app for companion animals to diagnose and find nearby veterinary clinics.',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12 relative z-10">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <div className="flex gap-3 mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-teal-500 to-purple-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-teal-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-sm uppercase tracking-widest text-teal-500 font-semibold mb-2">
                  Full-Stack Developer · Creative Problem Solver
                </h3>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 mb-4">
                  Meet Durotoluwa Praise
                </h2>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 max-w-xl">
                  I’m a <span className="text-teal-500 font-semibold">Full-Stack Developer</span> 
                  passionate about building futuristic web experiences. Over 4+ years, I’ve developed user-focused solutions using 
                  <strong> React.js, Node.js, and Firebase</strong>. 
                  <span className="inline-flex items-center gap-2 text-teal-400 font-semibold ml-1 animate-pulse">
                    <FaCloud /> Advancing into Cloud with Go
                  </span>
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-xl">
                  My focus is on performance, UX, and maintainability — creating solutions that scale elegantly.
                </p>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3 text-teal-500 text-xl">
                      {skill.icon}
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">{skill.label}</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-teal-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg"
                  >
                    <h4 className="text-teal-500 font-semibold">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{project.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
            <div className="flex gap-4">
              <a href="https://github.com/praisecracks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition text-sm font-medium">
                <FaGithub /> GitHub
              </a>
              <a href="http://www.linkedin.com/in/durotoluwa-praise-9b3767357" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition text-sm font-medium">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/praisecrack/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition text-sm font-medium">
                <FaInstagram /> Instagram
              </a>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-medium rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow">
              <FaHandshake className="text-white animate-bounce" /> Let’s Work Together
            </a>
          </div>
        </motion.div>

        {/* Right Section with Rotating Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-64 sm:w-72 md:w-96">
            <motion.img
              src={prof}
              alt="Durotoluwa Praise"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="relative w-full h-full object-cover rounded-full border-4 border-teal-500/60 shadow-[0_0_40px_#14b8a6] bg-white dark:bg-gray-900"
            />

            {/* Fixed Icons Around the Image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <FaReact className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-cyan-400 hover:scale-125 transition-all duration-300" />
              <FaNodeJs className="absolute bottom-6 left-10 text-5xl text-green-500 hover:scale-125 transition-all duration-300" />
              <SiMeta className="absolute top-12 right-8 text-3xl text-blue-500 hover:scale-125 transition-all duration-300" />
              <FaGoogle className="absolute bottom-10 right-10 text-4xl text-red-500 hover:scale-125 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
