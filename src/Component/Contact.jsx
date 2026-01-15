import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaTimes,
  FaMap,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Enhanced TiltCard with click handlers
function TiltCard({ icon, text, onClick, type }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  let cardRef = null;

  const handleMouseMove = (e) => {
    const rect = cardRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={(el) => (cardRef = el)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onClick={onClick}
      style={{
        transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        perspective: 1000,
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(20,184,166,0.3)' }}
      className="flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-md transition-transform cursor-pointer hover:bg-teal-50/50 dark:hover:bg-teal-900/20"
    >
      <div className="text-teal-500 text-xl flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-900 dark:text-gray-200 font-medium truncate">{text}</p>
        {type === 'location' && (
          <span className="text-xs text-teal-600 font-medium">View on map</span>
        )}
        {type === 'phone' && (
          <span className="text-xs text-teal-600 font-medium">Click to call</span>
        )}
        {type === 'email' && (
          <span className="text-xs text-teal-600 font-medium">Send email</span>
        )}
      </div>
    </motion.div>
  );
}

// Location Preview Modal
function LocationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-white/50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl text-teal-500" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Current Location</h3>
                  <p className="text-teal-600 font-semibold">Akure, Nigeria</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <FaTimes className="w-5 h-5 text-gray-500" />
              </motion.button>
            </div>
          </div>

          {/* Map Preview */}
          <div className="p-2 md:p-8">
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaMap className="w-24 h-24 text-gray-400 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-500 dark:text-gray-400 font-medium">📍 Akure, Nigeria</p>
                  <p className="text-sm text-gray-400 mt-1">Interactive map preview</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Akure, Nigeria</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Akure%2C+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-sm"
                  >
                    Open in Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Phone Call Modal
function PhoneModal({ isOpen, onClose, phoneNumber }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden border border-white/50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-2xl text-green-500" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Call Me</h3>
                  <p className="text-green-600 font-semibold">{phoneNumber}</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <FaTimes className="w-5 h-5 text-gray-500" />
              </motion.button>
            </div>
          </div>

          {/* Call Actions */}
          <div className="p-8 space-y-6">
            <motion.button
              onClick={() => window.location.href = `tel:${phoneNumber}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaPhone className="w-6 h-6" />
              Call Now
            </motion.button>
            
            <div className="text-center py-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm">Or copy number:</p>
              <div className="flex items-center justify-center gap-3 mt-3 p-3 bg-gray-100/50 dark:bg-gray-700/50 rounded-xl">
                <span className="font-mono font-semibold text-lg">{phoneNumber}</span>
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText(phoneNumber);
                    toast.success("Phone number copied!");
                    onClose();
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-600/50 transition-colors"
                >
                  📋
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Email Modal
function EmailModal({ isOpen, onClose, email }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden border border-white/50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-2xl text-teal-500" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Send Email</h3>
                  <p className="font-mono font-semibold text-teal-600">{email}</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <FaTimes className="w-5 h-5 text-gray-500" />
              </motion.button>
            </div>
          </div>

          {/* Email Actions */}
          <div className="p-8 space-y-6">
            <motion.button
              onClick={() => window.location.href = `mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-16 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaPaperPlane className="w-5 h-5" />
              Open Email Client
            </motion.button>
            
            <div className="text-center py-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm">Or copy email:</p>
              <div className="flex items-center justify-center gap-3 mt-3 p-3 bg-gray-100/50 dark:bg-gray-700/50 rounded-xl">
                <span className="font-mono font-semibold text-lg">{email}</span>
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText(email);
                    toast.success("Email copied!");
                    onClose();
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-600/50 transition-colors"
                >
                  📋
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Contact() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

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
    <>
      <section
        id="contact"
        className="relative py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors"
      >
        <div className="max-w-6xl mx-auto text-left">

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="kode-mono text-5xl sm:text-9xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-teal-800 via-purple-300 to-purple-600 mb-6"
          >
            Let's Connect!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl"
          >
            Got a project in mind or looking to collaborate? I'm always up for building beautiful, scalable, and user-focused experiences.
          </motion.p>

          <p className="mb-12 inline-block backdrop-blur-md bg-white/80 dark:bg-gray-800/80 text-sm text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full font-medium shadow-lg border border-white/30">
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
                      className="w-full p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-transparent border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    />
                  ) : (
                    <textarea
                      name="message"
                      rows={5}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      placeholder=" "
                      className="w-full p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-transparent border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
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
                  href="/NewResume.pdf"
                  download="NewResume.pdf"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-white bg-teal-500 px-5 py-3 rounded-xl shadow-xl hover:bg-teal-600 transition"
                >
                  <FaDownload className="text-xl animate-pulse text-white" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info Cards (Tilt) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1 grid gap-6"
            >
              {[
                { 
                  icon: <FaEnvelope />, 
                  text: "praisecrackdev@gmail.com",
                  type: 'email',
                  onClick: () => setShowEmailModal(true)
                },
                { 
                  icon: <FaPhoneAlt />, 
                  text: "+234 7069 9911 71",
                  type: 'phone',
                  onClick: () => setShowPhoneModal(true)
                },
                { 
                  icon: <FaMapMarkerAlt />, 
                  text: "Akure, Nigeria",
                  type: 'location',
                  onClick: () => setShowLocationModal(true)
                },
              ].map((info, i) => (
                <TiltCard key={i} {...info} />
              ))}

              {/* Optional Collab Heading */}
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="kode-mono text-5xl sm:text-9xl font-extrabold text-transparent bg-clip-text 
                           bg-gradient-to-r from-teal-800 via-purple-300 to-purple-600 mb-6 text-left"
              >
                Let's Collab!
              </motion.h2>
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

      {/* Modals */}
      <LocationModal 
        isOpen={showLocationModal} 
        onClose={() => setShowLocationModal(false)} 
      />
      <PhoneModal 
        isOpen={showPhoneModal} 
        onClose={() => setShowPhoneModal(false)} 
        phoneNumber="+234 7069 9911 71" 
      />
      <EmailModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
        email="praisecrackdev@gmail.com" 
      />
    </>
  );
}

export default Contact;
