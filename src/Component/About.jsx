import React from 'react';
import { FaDownload } from 'react-icons/fa';
import prof from '../assets/MySelf.jpg';

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-16 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300"
    >
      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
                <div className="bubble bubble-3" />
        <div className="bubble bubble-3" />


      </div>

      {/* Avatar Section */}
      <div
        className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10"
        data-aos="fade-up"
      >
        <img
          src={prof}
          alt="Durotoluwa Praise - Developer"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-lg border-4 border-teal-500 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Section */}
      <div
        className="w-full md:w-1/2 text-center md:text-left relative z-10"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-500 mb-4">
          About Me
        </h2>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m{' '}
          <span className="text-teal-500 font-semibold animate-pulse">
            Durotoluwa Praise
          </span>
          , a Full-Stack Developer passionate about building clean, user-focused
          digital experiences. With over 15 completed projects and 4+ years of
          experience, I develop impactful, scalable web solutions.
          <br />
          <br />
          I hold a strong background in Software Engineering and love
          transforming complex ideas into seamless products. I’m currently open
          to full-time roles, freelance gigs, or collaborations that drive
          innovation.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-400 text-sm md:text-base">
          <li className="animate-bounce">🎓 B.Sc. in Software Engineering</li>
          <li className="animate-bounce delay-100">💻 4+ years building real-world projects</li>
          <li className="animate-bounce delay-200">🚀 Mission: Deliver value with code and creativity</li>
        </ul>

        <a
          href="/resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-2 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-medium rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg"
          download={true}
        >
          <FaDownload className="animate-bounce" /> Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;
