"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import {AnimatedTestimonials} from './ui/animated-testimonials.jsx';
import EventData from '../data/EventData.js';
const Events = () => {
  return (
    <AnimatedTestimonials testimonials={EventData} />
  )
}

export default Events