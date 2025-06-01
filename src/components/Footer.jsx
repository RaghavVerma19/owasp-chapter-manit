"use client";
import React from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaMeetup, FaDiscord, FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-br from-zinc-950 to-blue-950 text-white">
      {/* Wave divider for visual appeal */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white dark:fill-gray-900">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-5">
              <div className="footer-logo w-12 h-12 rounded-full bg-white p-1 shadow-md"></div>
              <div className="ml-3.5">
                <h3 className="font-bold text-xl tracking-wide">OWASP</h3>
                <p className="text-sm text-gray-200">Chapter MANIT</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6 text-center md:text-left leading-relaxed">
              Promoting software security principles and practices through community engagement, education, and innovation.
            </p>
          </div>

          {/* Column 2: Quick Links
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-300 transition-colors duration-300">
                <Link href="/" className="inline-block">Home</Link>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-300">
                <Link href="/events" className="inline-block">Events</Link>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-300">
                <Link href="/team" className="inline-block">Team</Link>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-300">
                <Link href="/mission" className="inline-block">Mission</Link>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-300">
                <Link href="/project" className="inline-block">Projects</Link>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-300">
                <Link href="/faqs" className="inline-block">FAQs</Link>
              </li>
            </ul>
          </div> */}

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                </div>
                <span>MANIT, Bhopal, MP, India</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                  <MdEmail className="text-blue-400" />
                </div>
                <a href="mailto:owaspmanit@gmail.com" className="hover:text-blue-300 transition-colors duration-300">
                  owaspmanit@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                  <FaPhone className="text-blue-400" />
                </div>
                <span>+91 XXXXXXXXXX</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 tracking-wide">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a href="https://www.instagram.com/owasp_nitb/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md">
                <BsInstagram className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/company/owaspnitb" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="https://twitter.com/owasp_nitb" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center hover:from-gray-700 hover:to-black transition-all duration-300 shadow-md">
                <RiTwitterXLine className="text-lg" />
              </a>
              <a href="https://www.meetup.com/owasp-maulana-azad-national-institute-of-technology-chapter/#" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-300 shadow-md">
                <FaMeetup className="text-lg" />
              </a>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-center md:text-left">Join our community:</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm transition-colors duration-300 shadow-md">
                  <FaDiscord className="text-lg" />
                  <span>Discord</span>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm transition-colors duration-300 shadow-md">
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto py-6 text-center text-sm text-gray-400">
          <p> {currentYear} OWASP Chapter MANIT. All rights reserved.</p>
          <div className="mt-2 flex justify-center items-center">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <span className="mx-3 text-xs">•</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
