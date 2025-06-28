import React, { Profiler } from 'react';
import { FaDownload } from 'react-icons/fa';
import prof from '../assets/MySelf.jpg'




function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-20 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      {/* Text Section */}
      <div className="md:mr-12 max-w-xl animate-fade-in-up">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About Me
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m <span className="text-teal-500 font-semibold">Durotoluwa Praise</span>, a Full-Stack Developer passionate about building clean, user-focused digital experiences. With 3+ years of experience and over 15 completed projects, I create impactful, scalable web solutions. I have a strong Software Engineering background and a love for turning complex ideas into seamless products. <br /><br />
          Currently open to full-time roles, freelance work, and collaborations that drive real innovation.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-400">
          <li>🎓 B.Sc. in Software Engineering</li>
          <li>💻 4+ years experience building projects</li>
          <li>🚀 Mission: Deliver value with code and creativity</li>
        </ul>

        <a
          href="/resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 hover:scale-105 shadow-md"
          download={true}
        >
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Avatar Section */}
      <div className="mt-8 md:mt-0 animate-fade-in-up">
        <img
          src={prof}
          alt="Developer Avatar"
          className="w-72 h-72 object-cover rounded-xl shadow-2xl border-4 border-teal-500"
        />
      </div>
    </section>
  );
}

export default About;
