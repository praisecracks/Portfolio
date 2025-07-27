import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-850 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <img
          src="/me.jpg"
          alt="Durotoluwa Praise - Full Stack Developer avatar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-teal-500 shadow-xl hover:scale-110 transition-transform duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        />

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
              words={[
                "Frontend Developer",
                "Full Stack Developer",
                "UI/UX Designer",
              ]}
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
          <span className="font-medium text-gray-800 dark:text-white">
            Durotoluwa Praise
          </span>
          , a{" "}
          <span className="text-teal-500 font-semibold">
            Full-Stack Developer
          </span>{" "}
          dedicated to building clean, functional, and user-friendly web
          experiences. I love turning ideas into reality through code and
          design.
        </p>

        <a
          href="#projects"
          className="inline-block bg-teal-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition-all duration-300 hover:scale-105 shadow-md animate-fade-in-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          View Projects
        </a>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
                <div className="bubble bubble-3" />
        <div className="bubble bubble-3" />
      </div>
        <div className="mt-12 animate-bounce">
          <a href="#about" aria-label="Scroll Down">
            <FiChevronDown className="text-teal-500 text-4xl bg-white/70 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
