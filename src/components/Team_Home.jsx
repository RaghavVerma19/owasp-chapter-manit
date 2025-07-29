"use client";
import React, { useEffect, useRef, useState } from 'react'
import UpcomingEv from './UpcomingEv'
import News from './News';
import Faqs from './Faqs';
import Events from './Events';
import Team from './Team';
import Mission from './Mission';
import Link from 'next/link';
import { Vortex } from './ui/vortex.jsx';
import Image from 'next/image';
import hero from '../../public/hack.jpg';
const Team_Home = () => {
  const [text, setText] = useState('');
  return (
    <div className="home-page relative bg-black text-white overflow-hidden">
      {/* <Vortex className="inset-0 z-0" children={<section className="hero-section w-full min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8"> */}
        <Image src={hero} alt="Hero" fill className="object-cover max-h-[650px]" />
        <div className="relative z-10 text-center">
          <div
           
            className="hero-content"
          >
            
            <div className="h-50"></div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white mb-2">
              OWASP
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8">
              Chapter MANIT
            </p>
            <div className="h-20"></div>
            
          </div>
        </div>
        <div className='h-30'></div>
    <section
       
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
      </section>
    

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
      <section 
        
        className="section bg-gradient-dark py-20"
        id="mission"
      >
        <div className="container-custom gap-20 py-30">
          {/* <h2 className="section-title text-white mb-12">Our Mission</h2> */}
          <Mission />
        </div>
      </section>


      {/* News Section */}
      <section 
        
        className="section bg-gradient-dark py-20 rounded-2xl"
        id="news"
      >
        <div className="container-custom">
          <h2 className="section-title text-white mb-12">Latest News</h2>
          <News />
        </div>
      </section>

      {/* Team Section */}
      <section
        className="section bg-black "
        id="team"
      >
        <div className="container-custom">
          {/* <h2 className="section-title text-white mb-12">About Us</h2> */}
          <Team />
        </div>
      </section>

      {/* FAQs Section */}
      <section 
       
        className="section bg-gradient-dark py-20 rounded-2xl"
        id="faqs"
      >
        <div className="container-custom">
          <h2 className="section-title text-white mb-12">Frequently Asked Questions</h2>
          <Faqs />
        </div>
      </section>
    </div>
  );
};

export default Team_Home;