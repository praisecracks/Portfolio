import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import TimeOrb from "./TimeOrb"; // 👈 Clock component

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-x-hidden transition-colors duration-500
      bg-gradient-to-br from-gray-100 via-white to-gray-200 
      dark:from-[#020617] dark:via-[#010410] dark:to-[#000000] overflow-hidden"
    >
      {/* Ambient background glow for dark mode */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08),transparent_75%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15),transparent_80%)]"></div>

      {/* Futuristic Clock Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
        <TimeOrb />
      </div>

      {/* Hello text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-600 dark:text-gray-300 text-lg tracking-widest mb-2 z-10"
      >
        Hello, I’m
      </motion.p>

      {/* Big Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="kode-mono text-[clamp(3rem,10vw,8rem)] font-extrabold text-gray-900 dark:text-white relative z-10 leading-none tracking-tight"
        style={{
          textShadow: `
            0 0 25px rgba(79, 204, 188, 0.6),
            0 0 40px rgba(3, 41, 57, 0.4),
            0 8px 12px rgba(0,0,0,0.8)
          `,
        }}
      >
        Durotoluwa Praise
        <span
          className="block text-transparent text-[clamp(2rem,8vw,6rem)] font-extrabold mt-[-1.5rem]"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            transform: "scaleY(-1)",
            opacity: 0.25,
            filter: "blur(2px)",
          }}
        >
          Durotoluwa Praise
        </span>
      </motion.h1>

      {/* Typewriter Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-teal-500 dark:text-teal-400 text-2xl sm:text-3xl font-semibold mt-4 z-10"
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "MERN Stack Specialist",
            "Software Engineer",
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-400 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed z-10"
      >
        I’m{" "}
        <span className="font-medium text-gray-900 dark:text-white">
          Durotoluwa Praise
        </span>
        , a{" "}
        <span className="text-teal-500 dark:text-teal-400 font-semibold">
          Full-Stack Developer
        </span>{" "}
        passionate about building smooth, interactive, and user-friendly web
        experiences that bring ideas to life through modern technology and clean
        code.
      </motion.p>

      {/* Hire Me Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative inline-block mt-10 px-10 py-3 rounded-full border border-teal-500/40 text-gray-900 dark:text-white font-semibold tracking-wide overflow-hidden group z-10"
      >
        <span className="absolute inset-0 rounded-full border-2 border-transparent before:absolute before:inset-0 before:rounded-full before:border-[2px] before:border-transparent before:animate-borderRun before:bg-[conic-gradient(from_0deg,rgba(45,212,191,1)_0deg,transparent_90deg,rgba(45,212,191,1)_180deg,transparent_270deg,rgba(45,212,191,1)_360deg)]"></span>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-500 opacity-0 group-hover:opacity-100 opacity-20 blur-sm transition-opacity duration-700"></span>
        <span className="relative z-10">Hire Me</span>
      </motion.a>

      {/* Button Glow Animation */}
      <style>{`
        @keyframes borderRun {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .before\\:animate-borderRun::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderRun 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
