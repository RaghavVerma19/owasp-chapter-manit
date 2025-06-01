"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import EventData from '../data/EventData';
import Link from 'next/link';

const UpcomingEv = ({ hideTitle = false }) => {
    return (
        <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 py-10'>
            {/* Section title with modern styling - conditionally rendered */}
            {!hideTitle && (
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 inline-block mb-3">Upcoming Events</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
                </div>
            )}
            
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ 
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="rounded-2xl overflow-hidden shadow-2xl relative event-swiper"
            >
                {EventData.map((data, index) => (
                    <SwiperSlide key={index} className="py-4">
                        <div className="glass-card overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative p-0 md:p-4">
                                
                                <div className="relative h-64 md:h-[450px] overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <img 
                                        className="absolute inset-0 w-full h-full object-cover" 
                                        src={data.image} 
                                        alt={data.name}
                                        loading="lazy"
                                    />
                                </div>
                                
                                
                                <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                                            {data.name}
                                        </h3>
                                        <div className="flex items-center text-sky-300 text-sm mb-6">
                                            <span className="mr-5 flex items-center bg-sky-900/30 px-3 py-1.5 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {data.date || "Coming Soon"}
                                            </span>
                                            {data.time && (
                                                <span className="flex items-center bg-sky-900/30 px-3 py-1.5 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {data.time}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white/80 mb-8 line-clamp-4 md:line-clamp-6 leading-relaxed">
                                            {data.details}
                                        </p>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <Link 
                                            href={data.link || "#"}
                                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ padding: '0.75rem 1.5rem' }}
                                        >
                                            <span>Register Now</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Spacer element */}
            <div className="h-24"></div>
            
            
            <div 
                className="mt-32 mb-16 rounded-2xl text-center relative overflow-hidden"
                style={{ 
                    padding: '2.5rem',
                    background: 'linear-gradient(to right, #0f172a, #1e293b)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
            >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    
                    {/* Network pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Want to stay updated?
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed mx-auto max-w-2xl mb-8">
                        Join our mailing list to receive notifications about upcoming events, workshops, and hackathons.
                    </p>
                    <a 
                        href="mailto:info@owaspmanit.org" 
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
                        style={{ padding: '0.75rem 1.5rem' }}
                    >
                        <span>Subscribe Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEv;