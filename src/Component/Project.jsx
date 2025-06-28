import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Testimonial from './Testimonial'; 
import web1 from '../assets/web1.png'
import mobile from "../assets/mobile2.png"
import web2 from '../assets/Web2.png';


const projects = [
  {
    title: 'Portfolink Web App',
    platform: 'Web',
    description: 'A modern and responsive portfolio builter, with sharable one time link instantly generated.',
    tech: ['React', 'Tailwind', 'Vite', 'Firebase', 'Node js', 'Express js'],
    image: web2,
    github: 'https://github.com/praisecracks/Portfolink',
    live: 'https://portfolink-ck.netlify.app',
  },
  {
    title: 'News & Event Reporting System',
    platform: 'Web',
    description: 'A dissemination of News and Event Reporting system with in Dominion University.',
    tech: ['React', 'Firebase', 'CSS', 'Tailwind CSS'],
    image: web1,
    github: 'https://github.com/praisecracks/DU-FEED-APP',
    live: 'https://du-feed.netlify.app',
  },
  {
    title: 'Animal Health Tracker',
    platform: 'Mobile',
    description: 'Mobile app that tracks animal health and connects to nearby vet clinics.',
    tech: ['React Native', 'Google Maps API', 'Google', 'Firebase'],
    image: mobile,
    github: 'https://github.com/praisecracks/Animal-health-Tracker',
    live: 'https://github.com/praisecracks/Animal-health-Tracker',
  },
];

function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.platform === filter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
<section
  id="projects"
  className="scale-95 opacity-0 animate-[fadeIn_0.4s_ease-in-out_forwards] bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-12 transition-colors"
>

    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-12 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <Fade direction="up" cascade damping={0.2}>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Explore some of my recent projects built with a focus on intuitive user experiences,
            clean design, and reliable functionality.
          </p>
        </Fade>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {['All', 'Web', 'Mobile'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium border transition ${
                filter === category
                  ? 'bg-teal-500 text-white border-teal-500'
                  : 'text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-teal-100 dark:hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Fade direction="up" triggerOnce delay={index * 100} key={index}>
              <div
                onClick={() => setModalProject(project)}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-left">
                  <span className="inline-block text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-1">
                    {project.platform}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">
                    {project.tech.join(' • ')}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        {modalProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white max-w-2xl w-full rounded-xl p-6 shadow-lg transform transition-all duration-300 scale-95 animate-fadeIn">
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
              <p className="mb-2">{modalProject.description}</p>
              <p className="text-sm text-teal-600 dark:text-teal-400 mb-4">
                Platform: {modalProject.platform} <br />
                Stack: {modalProject.tech.join(' • ')}
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
            </div>
          </div>
        )}
      </div>
    </section>
    </section>

  );
}

export default Projects;
