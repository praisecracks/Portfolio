import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Projects from './Component/Project';
import Testimonial from './Component/Testimonial';
import Toolkit from './Component/Toolkit';
import Contact from './Component/Contact';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Toolkit />
      <Contact />
      <Footer/>

      {/* ✅ Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
