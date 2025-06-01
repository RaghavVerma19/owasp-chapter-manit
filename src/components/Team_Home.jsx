"use client";
import React, { useEffect, useRef, useState } from 'react'
import UpcomingEv from './UpcomingEv'
import News from './News';
import Faqs from './Faqs';
import Events from './Events';
import Team from './Team';
import Mission from './Mission';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Vortex } from './ui/vortex.jsx';

const Team_Home = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const texts = ['Hacking', 'Cyber Security', 'Ethical Hacking', 'Networking', 'Development'];

  // Modern typing effect with smoother transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        // If we've typed the full word, start deleting after a pause
        if (charIndex >= currentText.length) {
          setIsDeleting(true);
          setTypingSpeed(150); // Pause before deleting
        }
      } else {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        // If we've deleted the word, move to the next word
        if (charIndex <= 1) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
          setTypingSpeed(100); // Normal typing speed
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, typingSpeed, texts]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="home-page relative">
      <Vortex className="inset-0 z-0" children={<section className="hero-section w-full min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            
            <div className="h-20"></div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white mb-2">
              OWASP
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8">
              Chapter MANIT
            </p>
            <div className="inline-flex items-center glass-card px-6 py-3 mt-4">
              <span className="text-green-500 mr-2 text-xl">$</span>
              <span className="text-green-500 text-xl font-mono h-8">{text}<span className="typing-cursor"></span></span>
            </div>
          </motion.div>
        </div>
      </section> } />
      
    {/* Events Section */}
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="section bg-gradient-blue"
        id="past-events"
      >
        <div className="container-custom">
          <h2 className="section-title text-white mb-12">Past Events</h2>
          <Events />

          {/* Button to go to Upcoming Events page */}
          <div className="mt-8 text-center">
          <Link
  href="/upcoming"
  className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
>
  See Upcoming Events
          </Link>
          </div>
        </div>
      </motion.section>
    

      {/* Projects Section */}
      {/* <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="section bg-gradient-blue py-20"
        id="projects"
      > */}
        {/* <div className="container-custom">
          <h2 className="section-title text-white mb-12">Projects</h2>
          <Projects />
        </div> */}
      {/* </motion.section> */}
          {/* Mission Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="section bg-gradient-dark py-20"
        id="mission"
      >
        <div className="container-custom gap-20 py-30">
          {/* <h2 className="section-title text-white mb-12">Our Mission</h2> */}
          <Mission />
        </div>
      </motion.section>


      {/* News Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="section bg-gradient-dark py-20 rounded-2xl"
        id="news"
      >
        <div className="container-custom">
          <h2 className="section-title text-white mb-12">Latest News</h2>
          <News />
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="section bg-black "
        id="team"
      >
        <div className="container-custom">
          {/* <h2 className="section-title text-white mb-12">About Us</h2> */}
          <Team />
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="section bg-gradient-dark py-20 rounded-2xl"
        id="faqs"
      >
        <div className="container-custom">
          <h2 className="section-title text-white mb-12">Frequently Asked Questions</h2>
          <Faqs />
        </div>
      </motion.section>
    </div>
  );
};

export default Team_Home;