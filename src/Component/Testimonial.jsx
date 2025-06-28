import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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
    else if (i === full && half) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }

  return <div className="flex gap-1 mt-2">{stars}</div>;
}

function Testimonial() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
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
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }} // 5 seconds per slide
          className="px-4"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl mx-auto text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-teal-500"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    {renderStars(item.rating)}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.quote}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
}

export default Testimonial;
