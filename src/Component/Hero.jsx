import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import prof from '../assets/avataaars.png'

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-2 bg-white dark:bg-black transition duration-300 relative md:px-32"
>
      {/* Text Section */}
      <div className="text-center md:text-left w-full md:w-1/2 fade-in md:pr-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hello, I'm Praise 👋
        </h1>

        <h2 className="text-teal-500 text-xl md:text-2xl font-semibold mb-4">
          <Typewriter
            options={{
              strings: [
                'Web Developer',
                'React Enthusiast',
                'Ruby Programmer',
                'Graphics Designer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
          Hi, I’m Durotoluwa Praise, a Full-Stack Developer dedicated to crafting responsive, high-performance web solutions. I specialize in creating seamless digital experiences that drive real impact.
        </p>

        <div className="flex gap-4 justify-center md:justify-start mb-6">
          <a href="https://github.com/praisecracks" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-700 dark:text-white hover:text-teal-500 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/durotoluwa-praise-9b3767357" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-700 hover:text-teal-500 transition duration-200" />
            </a>
          <a href="https://x.com/POluwabumi" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-500 hover:text-teal-500 transition duration-200" />
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 hover:scale-105 animate-pulse"
        >
          View My Work
        </a>
      </div>

      {/* Developer Avatar */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end fade-in">
        <img
          src={prof}
          alt="Developer Avatar"
          className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full shadow-lg border- border-teal-500 transition hover:scale-105"
        />
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a href="#about">
          <FiChevronDown className="text-teal-500 text-3xl animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
