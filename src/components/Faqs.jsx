"use client";
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import QueryData from "../data/QueryData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import faq from "../assets/faq.jpg"; // Adjust the path as necessary

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-black min-h-screen rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Column */}
            <div className="relative hidden lg:block">
              <div className="h-full w-full overflow-hidden rounded-l-lg">
                <Image
                  width={600}
                  height={400}
                  src={faq}
                  alt="FAQ Illustration"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
                    <p className="text-white/80">Find answers to the most common questions about OWASP MANIT.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Column */}
            <div className="p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-white mb-8 lg:hidden">Frequently Asked Questions</h2>
              
              <motion.div
                className="space-y-4 no-scrollbar"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {QueryData.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-b border-white/20 pb-2"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                    >
                      <span className="text-white font-medium">{faq.query}</span>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white"
                      >
                        <GoChevronDown />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="overflow-hidden"
                        >
                          <p className="text-white/80 pb-4 text-sm">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
