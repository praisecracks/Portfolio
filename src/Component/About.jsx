import React from 'react';
import {
  FaDownload,
  FaCode,
  FaBriefcase,
  FaLightbulb,
  FaHandshake,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import prof from '../assets/MySelf.jpg';

function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text Section */}
        <div className="w-full md:w-1/2" data-aos="fade-up">
          <h3 className="text-sm uppercase tracking-widest text-teal-500 font-semibold mb-2">
            Full-Stack Developer · Creative Problem Solver
          </h3>

          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 mb-4">
            Meet Durotoluwa Praise
          </h2>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 max-w-xl">
            I’m a <span className="text-teal-500 font-semibold">Full-Stack Developer</span> passionate about turning ideas into scalable, clean, and human-centered web solutions. With 4+ years of hands-on experience and 15+ shipped projects, I’m committed to building tools that make an impact.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-xl">
            My focus is on performance, UX, and long-term maintainability. I’m currently open to full-time roles, freelance gigs, or collaborations that bring fresh challenges and real value.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300 mb-6">
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <FaCode className="text-teal-500 text-lg" />
              <span>15+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <FaBriefcase className="text-teal-500 text-lg" />
              <span>4+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <FaLightbulb className="text-teal-500 text-lg" />
              <span>Creative & Scalable Solutions</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <FaDownload className="text-teal-500 text-lg" />
              <a href="/Resume.pdf" className="hover:underline" download>
                Download Resume
              </a>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/praisecracks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition text-sm font-medium"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="http://www.linkedin.com/in/durotoluwa-praise-9b3767357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition text-sm font-medium"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/praisecrack/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition text-sm font-medium"
              >
                <FaInstagram /> Instagram
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-medium rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow"
            >
              <FaHandshake className="text-white animate-bounce" />
              Let’s Work Together
            </a>
          </div>

          {/* Signature Line */}
          <p className="italic text-gray-400 text-xs mt-6">
            "Building digital solutions that speak human."
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-left"
        >
          <div className="relative group">
            <img
              src={prof}
              alt="Durotoluwa Praise"
              className="w-56 sm:w-64 md:w-80 object-cover rounded-xl shadow-lg border-4 border-teal-500 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -inset-1 rounded-xl blur-md bg-gradient-to-br from-teal-400 to-purple-600 opacity-25 group-hover:opacity-50 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
