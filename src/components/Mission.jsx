"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <div className="w-full ">
      <div className="container-custom gap-10 ">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          
          {/* Vision Card */}
          <div className="text-center mb-16">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white mb-6  flex flex-col items-center "
            >
              Our Vision
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
                No more insecure software.
              </p>
            </motion.div>
          </div>
          
          {/* Mission Card */}
          <div className="text-center">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white mb-6"
            >
              Our Mission
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            >
              {/* Mission Card 1 */}
              <div className="glass-card p-6 rounded-xl flex flex-col items-center justify-around text-center h-full gap-3">
            
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Education</h4>
                <p className="text-white/80">Empowering students with knowledge in cybersecurity, ethical hacking, and secure development practices.</p>
              </div>
              
              {/* Mission Card 2 */}
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center h-full gap-3 justify-around">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Community</h4>
                <p className="text-white/80">Building a collaborative community of security enthusiasts at NIT Bhopal to share knowledge and skills.</p>
              </div>
              
              {/* Mission Card 3 */}
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center h-full gap-3 justify-around">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Security Advocacy</h4>
                <p className="text-white/80">Promoting security best practices and raising awareness about cybersecurity challenges in modern applications.</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto"
            >
              OWASP Chapter MANIT is your gateway to the exciting world of cybersecurity! At NIT Bhopal, we explore cutting-edge topics like network security, ethical hacking, and secure development.
            </motion.p>
           
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;