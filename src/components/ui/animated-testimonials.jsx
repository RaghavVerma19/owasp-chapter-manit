"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  // We’ll store one random rotation number per testimonial in state,
  // but only fill it on the client (after mount). On the server, it stays [].
  const [rotations, setRotations] = useState([]);
  const isClient = useRef(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (idx) => idx === active;

  useEffect(() => {
    // Mark that we’re running on the client
    isClient.current = true;

    // Generate one random rotation per testimonial
    const newRotations = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
    setRotations(newRotations);

    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials]);

  return (
    <div className="mx-auto max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* LEFT: image stack */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    // On the server (first render), always rotate: 0
                    rotate: 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    // After mount, if not active, pick the random rotation for this index
                    rotate: isClient.current
                      ? isActive(index)
                        ? 0
                        : rotations[index]
                      : 0,
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    // On exit, also use the same random if on client
                    rotate: isClient.current ? rotations[index] : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: text content */}
        <div className="flex flex-col justify-between py-4 gap-4">
          <motion.div
            key={active} // re-trigger animation when active changes
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].date} · {testimonials[active].time}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].details.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * idx,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            {testimonials[active].link && (
              <div className="mt-4">
                <a
                  href={testimonials[active].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600"
                >
                  Learn More
                </a>
              </div>
            )}
          </motion.div>

          {/* Prev/Next buttons */}
          <div className="flex gap-4 pt-12 md:pt-0 justify-center md:justify-start">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-9 w-9 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-9 w-9 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
