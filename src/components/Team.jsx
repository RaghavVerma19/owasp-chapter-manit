"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import TeamData from "../data/TeamData";
import Image from "next/image";



function Section({ children }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="w-60">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

const Team = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  // Sentinel at bottom of container
  const [bottomInView, setBottomInView] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setBottomInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayed = showAll ? TeamData : TeamData.slice(0, 4);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center py-3 bg-gray-800 rounded-2xl justify-around ">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12 p-2">
        Meet Our Team
      </h2>

      <div className="flex flex-wrap gap-7 justify-center">
        {displayed.map((member, idx) => (
          <Section key={idx}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-black bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-60 h-80"
            >
              <div className="relative w-full h-40">
                <Image
                  src={member.dp}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-300">{member.role}</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-pink-100 transition-colors"
                >
                  <BsInstagram className="text-xl text-pink-600" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-sky-100 transition-colors"
                >
                  <FaLinkedinIn className="text-xl text-sky-600" />
                </a>
              </div>
            </motion.div>
          </Section>
        ))}
      </div>

      {/* Sentinel element */}
      <div ref={bottomRef} className="w-full h-1 mt-4" />

     {/* Floating toggle btn on mobile, hidden if scrolled past bottom */}
     {showAll && !bottomInView && (
        <button
          onClick={() => setShowAll(true)}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 transition-colors duration-300 block"
        >
          Show More
        </button>
      )}
      {/* Desktop toggle button */}
      <button
        onClick={() => setShowAll(prev => !prev)}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 hidden sm:block"
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default Team;
