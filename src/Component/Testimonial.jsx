import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
    if (i < full) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (i === full && half)
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }

  return <div className="flex gap-0.5 mt-2">{stars}</div>;
}

function Testimonial() {
  return (
    <section
      id="testimonials"
      className="relative px-4 py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400 drop-shadow-lg"
        >
          What People Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mb-10"
        >
          Feedback from clients and collaborators
        </motion.p>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: "#nextBtn",
            prevEl: "#prevBtn",
          }}
          autoplay={{ delay: 8000 }}
          spaceBetween={30}
          className="px-4"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-8 max-w-xl mx-auto text-left transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-teal-400 shadow"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    {renderStars(item.rating)}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mt-4">
                  “{item.quote}”
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button
          id="prevBtn"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100/70 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 backdrop-blur-lg border border-white/50 dark:border-white/20 text-gray-900 dark:text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          id="nextBtn"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100/70 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 backdrop-blur-lg border border-white/50 dark:border-white/20 text-gray-900 dark:text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
