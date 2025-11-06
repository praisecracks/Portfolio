import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import NigeriaMan from "../assets/man.jpg"

const testimonials = [
  {
    name: "Benjamin Bryant",
    title: "VP & Co-Founder, Wilder",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    quote:
      "Praise was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.",
  },
  {
    name: "Raaid Hossain",
    title: "Project Management, Focuslab",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    quote:
      "His attention to detail and ability to deliver beyond expectations truly set him apart. Every project with Praise feels effortless and professional.",
  },
  {
    name: "Logan Cee",
    title: "UI/UX Designer, LogenCee",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
    quote:
      "An amazing collaborator and problem solver. He quickly understands what’s needed and delivers beautiful, functional designs every time.",
  },
  {
    name: "Adeola James",
    title: "Business Consultant, Lagos",
    avatar: NigeriaMan,
    rating: 5,
    quote:
      "Working with Praise was a professional experience from start to finish. His communication, reliability, and quality of work make him stand out in every project we collaborate on.",
  },
];

function Testimonial() {
  const [active, setActive] = useState(0);
  const activeTestimonial = testimonials[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="transition-colors duration-700 py-24 px-6 md:px-12 text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-3 text-gray-900 dark:text-white"
        >
          Testimonials
        </motion.h2>
        <p className="mb-12 text-sm tracking-wide text-gray-600 dark:text-gray-400">
          What clients say about me
        </p>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-lg p-10 md:p-14 max-w-3xl mx-auto mb-14 border transition-all bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-900"
          >
            <div className="flex justify-center mb-4">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-emerald-400 text-lg mx-0.5" />
              ))}
              <span className="text-sm ml-2 text-gray-600 dark:text-gray-400">
                {activeTestimonial.rating}.0 Rating
              </span>
            </div>
            <p className="text-lg md:text-xl italic leading-relaxed text-gray-700 dark:text-gray-300">
              “{activeTestimonial.quote}”
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Profile Selector */}
        <div className="flex justify-center flex-wrap gap-10 md:gap-16">
          {testimonials.map((person, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer flex flex-col items-center transition-all duration-500 ${
                active === index ? "opacity-100" : "opacity-60 hover:opacity-80"
              }`}
            >
              <img
                src={person.avatar}
                alt={person.name}
                className={`w-20 h-20 rounded-full object-cover mb-3 border-2 ${
                  active === index
                    ? "border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              <p className="font-medium text-gray-900 dark:text-white">
                {person.name}
              </p>
              <p className="text-xs mt-1 text-emerald-600 dark:text-emerald-400">
                {person.title}
              </p>
              {active === index && (
                <motion.div
                  layoutId="underline"
                  className="h-0.5 w-16 mt-3 rounded-full bg-emerald-600 dark:bg-emerald-400"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
