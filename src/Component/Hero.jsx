import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import TimeOrb from "./TimeOrb";
import AudioGrid from "./AudioGrid";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 -mt-20 lg:mt-0 pt-20 lg:pt-0
      bg-gradient-to-br from-gray-100 via-white to-gray-200
      dark:from-[#020617] dark:via-[#010410] dark:to-black"
    >
      <AudioGrid />

      <div className="absolute inset-0
        bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.12),transparent_60%)]
        dark:bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.18),transparent_65%)]
        pointer-events-none"
      />

      <h1 className="absolute left-[-5%] top-1/2 -translate-y-1/2
        text-[20rem] font-extrabold uppercase tracking-tight
        text-black/5 dark:text-white/5
        pointer-events-none select-none"
      >
        Developer
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full h-full">
        {/* LEFT — Glass Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative backdrop-blur-xl bg-white/50 dark:bg-white/5
          border border-white/20 dark:border-white/10
          rounded-3xl p-10 shadow-2xl max-w-lg"
        >
          <p className="text-sm tracking-widest text-gray-600 dark:text-gray-400 mb-3">
            HELLO, I'M
          </p>

          <h2
            className="kode-mono text-[clamp(2.8rem,6vw,4.5rem)]
            font-extrabold text-gray-900 dark:text-white leading-tight"
            style={{
              textShadow: `
                0 0 30px rgba(45,212,191,0.35),
                0 10px 25px rgba(0,0,0,0.5)
              `,
            }}
          >
            Durotoluwa <br /> Praise
          </h2>

          <p className="mt-4 text-teal-500 dark:text-teal-400 text-xl font-semibold">
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
          </p>

          <p className="mt-6 text-gray-700 dark:text-gray-400 leading-relaxed max-w-lg">
            I design and build modern, high-performance web applications with a
            strong focus on clean UI, smooth interactions, and scalable
            architecture.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center mt-8 px-10 py-3
            rounded-full border border-teal-500/40
            text-gray-900 dark:text-white font-semibold
            relative overflow-hidden group"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r
              from-teal-400 via-cyan-400 to-purple-500
              opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
            />
            <span className="relative z-10">Hire Me</span>
          </a>
        </motion.div>

        {/* RIGHT — TimeOrb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[420px] h-[420px]
            bg-teal-500/20 blur-[120px] rounded-full"
          />

          <div className="relative scale-[1.15]">
            <TimeOrb />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
