import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Product Manager at TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4.5,
    quote:
      "Praise is a phenomenal developer. His attention to detail and clean UI implementation really made our project shine!",
  },
  {
    name: "John Smith",
    title: "Founder of Startupify",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "Super responsive, excellent problem solver, and always delivers top-notch work. Highly recommended!",
  },
  {
    name: "Emily Rose",
    title: "UX Designer at PixelStudio",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 4,
    quote:
      "Working with Praise was smooth and efficient. He understands UX principles well and communicates clearly.",
  },
];

function renderStars(rating) {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < full)
      stars.push(
        <FaStar
          key={i}
          className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
        />
      );
    else if (i === full && half)
      stars.push(
        <FaStarHalfAlt
          key={i}
          className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
        />
      );
    else
      stars.push(
        <FaRegStar
          key={i}
          className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
        />
      );
  }

  return <div className="flex gap-1 mt-2">{stars}</div>;
}

function Testimonial() {
  return (
   <section
  id="testimonials"
  className="relative px-6 py-24 bg-gray-800 dark:bg-gray-950 text-gray-300 transition-colors duration-700 overflow-hidden"
>
  <div className="max-w-6xl mx-auto text-center relative">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="kode-mono text-5xl t-transparent bg-clip-text bg-gradient-to-r              font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-teal-800 via-purple-300 to-purple-600 mb-6       drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
    >
      What People Say
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-gray-300 mb-14 text-lg"
    >
      Real experiences. Real impact.
    </motion.p>

    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation={{ nextEl: "#nextBtn", prevEl: "#prevBtn" }}
      autoplay={{ delay: 7500 }}
      pagination={{
        clickable: true,
        el: ".swiper-custom-pagination",
        bulletClass: "swiper-custom-bullet",
        bulletActiveClass: "swiper-custom-bullet-active",
      }}
      spaceBetween={40}
      className="px-8"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            whileHover={{
              rotateY: 5,
              rotateX: -3,
              scale: 1.05,
              boxShadow:
                "0 0 40px rgba(56,189,248,0.4), 0 0 80px rgba(20,184,166,0.3)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative group bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.3)] p-10 max-w-3xl mx-auto text-left transition-all duration-500 hover:shadow-[0_0_60px_rgba(56,189,248,0.4)]"
          >
            <div className="absolute left-6 top-6 w-24 h-24 bg-gradient-to-br from-teal-400/40 to-cyan-400/20 blur-xl rounded-lg -z-10" />
            <div className="flex items-center gap-5 mb-6">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.4 }}
                src={item.avatar}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.6)]"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.title}</p>
                {renderStars(item.rating)}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 italic leading-relaxed text-lg relative"
            >
              <span className="absolute -left-4 -top-2 text-5xl text-teal-400/40 select-none">
                “
              </span>
              {item.quote}
              <span className="absolute -bottom-6 text-5xl text-teal-400/40 right-0 select-none">
                ”
              </span>
            </motion.p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Arrows */}
    <button
      id="prevBtn"
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/20 dark:bg-white/10 hover:bg-white/40 dark:hover:bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <FaChevronLeft size={20} />
    </button>
    <button
      id="nextBtn"
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/20 dark:bg-white/10 hover:bg-white/40 dark:hover:bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <FaChevronRight size={20} />
    </button>

    {/* Pagination dots */}
    <div className="swiper-custom-pagination flex justify-center gap-3 mt-10" />
  </div>
</section>

  );
}

export default Testimonial;
