import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send("service_n87gosh", "template_ufozf8y", values, "YrcK5-AfeSIDobdWJ")
        .then(() => {
          toast.success("Message sent successfully!");
          resetForm();
        })
        .catch(() => toast.error("Failed to send message."));
    },
  });

  return (
    <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto"
        >
          Got a project in mind or looking to collaborate? I'm always up for building beautiful, scalable, and user-focused experiences.
        </motion.p>

        <p className="mb-12 inline-block backdrop-blur-lg bg-white/30 dark:bg-white/10 text-sm text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full font-medium shadow-lg border border-white/30">
          🌍 Remote-Friendly | Open to Global Roles
        </p>

        {/* Form & Info */}
        <form
          onSubmit={formik.handleSubmit}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:col-span-1"
          >
            {["name", "email", "message"].map((field, index) => (
              <div key={index} className="relative group">
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    placeholder=" "
                    className="w-full p-4 rounded-xl bg-gray-300/30 dark:bg-white/10 text-gray-900 dark:text-white placeholder-transparent border border-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                ) : (
                  <textarea
                    name="message"
                    rows={5}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    placeholder=" "
                    className="w-full p-4 rounded-xl bg-gray-300/30 dark:bg-white/10 text-gray-900 dark:text-white placeholder-transparent border border-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                )}
                <label
                  className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transform scale-75 origin-left transition-all peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:translate-y-2 peer-focus:scale-75"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {formik.touched[field] && formik.errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors[field]}</p>
                )}
              </div>
            ))}

            {/* Submit & CV */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition transform hover:scale-105"
              >
                Send Message
              </button>

              <motion.a
                href='/Resume.pdf'
                download
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-2 text-white bg-teal-500 px-5 py-3 rounded-xl shadow-xl hover:bg-teal-600 transition'
              >
                <FaDownload className='text-xl animate-pulse text-white' />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info Cards (Glass Style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 grid gap-6"
          >
            {[
              { icon: <FaEnvelope />, text: "praisecrackdev@gmail.com" },
              { icon: <FaPhoneAlt />, text: "+234 6999 1171" },
              { icon: <FaMapMarkerAlt />, text: "Based in Lagos, Nigeria" },
            ].map((info, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/20 dark:bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-md hover:shadow-xl transition text-left"
              >
                <div className="text-teal-500 text-xl">{info.icon}</div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">{info.text}</p>
              </div>
            ))}
          </motion.div>
        </form>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-500 text-white shadow-md hover:bg-teal-600 transition"
          title="Back to Top"
        >
          <FaArrowUp />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+2347069991171"
          className="fixed bottom-20 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
