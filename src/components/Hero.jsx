import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/content';

export default function Hero() {
  const { title, subtitle, photo } = siteConfig.hero;

  return (
    <section 
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100/60 to-amber-50"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 rounded-full bg-amber-200/30 blur-3xl" />
      
      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated circular photo container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Gold double border ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/60 animate-[spin_60s_linear_infinite]" />
          <div className="p-3">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-rose-200">
              <img 
                src={photo} 
                alt="Riya" 
                className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Animated main title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold text-rose-900 tracking-tight font-display mb-4"
        >
          {title}
        </motion.h1>

        {/* Animated subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-amber-800 font-medium italic mb-12 max-w-lg"
        >
          {subtitle}
        </motion.p>

        {/* Explore button that smooth scrolls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a 
            href="#gallery"
            className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold shadow-lg shadow-rose-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            See Our Journey ✨
          </a>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg 
            className="w-6 h-6 text-rose-400" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7-7-7m14-6l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
