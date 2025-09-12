import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-850 dark:to-gray-950 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">

        {/* Avatar with 3D + Lightning Hover Effect */}
        <div className="relative group mx-auto w-28 sm:w-32 md:w-36 animate-fade-in-up">
          <img
            src="/me.jpg"
            alt="Durotoluwa Praise - Full Stack Developer avatar"
            className="rounded-full shadow-lg transform transition-transform duration-500 group-hover:scale-105 z-10 relative border-4 border-teal-500"
          />
          {/* 3D Shadow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 opacity-20 blur-lg transform scale-95 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50 z-0"></div>
          {/* Hover Lightning / Glow */}
          <div className="absolute inset-0 rounded-full border-2 border-teal-400 opacity-0 transition-all duration-500 group-hover:opacity-100 animate-pulse z-0"></div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-800 dark:text-white animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Hello, I’m <span className="text-teal-500">Durotoluwa Praise</span>
        </h1>

        <p
          className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-300 tracking-wide animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          I’m a{" "}
          <span className="text-teal-500 font-semibold">
            <Typewriter
              words={["MERN Stack Specialist", "Full Stack Developer", "Software Developer"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>

        <p
          className="text-md sm:text-lg font-light text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Hi, I’m{" "}
          <span className="font-medium text-gray-800 dark:text-white">Durotoluwa Praise</span>
          , a{" "}
          <span className="text-teal-500 font-semibold">Full-Stack Developer</span>{" "}
          dedicated to building clean, functional, and user-friendly web experiences. I love turning ideas into reality through code and design.
        </p>

        {/* CTA Button with color flow hover */}
<a
  href="#projects"
  className="relative inline-block font-semibold px-6 py-3 rounded-full shadow-lg overflow-hidden animate-fade-in-up group border-2 border-cyan-400 transition-all duration-300 hover:scale-105"
  style={{ animationDelay: "0.5s", animationFillMode: "both" }}
>
  {/* Sliding Gradient */}
  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-60 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
  
  {/* Glow on Hover */}
  <span className="absolute inset-0 rounded-full shadow-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
  
  {/* Button Text */}
  <span className="relative text-white">View Projects</span>
</a>

      </div>

      {/* Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
      </div>

      {/* Scroll Down */}
      <div className="mt-12 animate-bounce z-10 relative">
        <a href="#about" aria-label="Scroll Down">
          <FiChevronDown className="text-teal-500 text-4xl bg-white/70 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
