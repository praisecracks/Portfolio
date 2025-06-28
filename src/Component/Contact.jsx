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
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_n87gosh",
          "template_ufozf8y",
          values,
          "YrcK5-AfeSIDobdWJ"
        )
        .then(() => {
          toast.success("Message sent successfully!");
          resetForm();
        })
        .catch(() => {
          toast.error("Failed to send message.");
        });
    },
  });

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Connect With Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mb-10"
        >
          Have a project in mind or just want to chat? I’m always open to
          discuss product design work or partnership opportunities.
        </motion.p>

        <p className="mb-8 inline-block bg-teal-100 dark:bg-gray-800 text-sm text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full font-medium">
          🌍 Remote / Available Globally
        </p>

        {/* 💌 Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="grid md:grid-cols-2 gap-6 text-left items-start"
        >
          <div className="space-y-6 md:col-span-1">
            <div>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>

            <a
              href="/Resume.docx"
              download
              className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition ml-2"
            >
              <FaDownload /> Download My CV
            </a>
          </div>

          {/* ℹ️ Contact Info */}
          <div className="text-sm space-y-6 md:col-span-1 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-500" />
              <span>praisecrackdev@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FaPhoneAlt className="text-teal-500" />
              <span>+234 6999 1171</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-500" />
              <span>Based in Lagos, Nigeria.</span>
            </div>
          </div>
        </form>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-500 text-white shadow-md hover:bg-teal-600 transition"
          title="Back to Top"
        >
          <FaArrowUp />
        </button>

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
