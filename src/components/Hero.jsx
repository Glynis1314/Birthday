import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/content';

export default function Hero() {
  const { title, subtitle, photo } = siteConfig.hero;

  return (
    <section 
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center overflow-hidden bg-[#0D0B1A]"
    >
      {/* Telemetry Grid Line Background texture */}
      <div className="absolute inset-0 telemetry-grid opacity-30 pointer-events-none" />

      {/* Spotlight / Concert lighting effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Animated F1 Driver Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10 p-5 bg-[#2D2640] border-2 border-f1-purple/60 rounded-3xl shadow-[0_0_40px_rgba(124,58,237,0.15)] max-w-sm sm:max-w-md w-full"
        >
          {/* Driver Card Header Accent */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-f1-purple px-6 py-1 rounded-b-xl text-[10px] font-mono tracking-widest font-bold text-white uppercase select-none">
            Official Driver Entry
          </div>

          {/* Photo frame + Large Livery Number */}
          <div className="relative mt-4 flex justify-center items-center">
            {/* Riya's Image */}
            <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-4 border-[#0D0B1A] shadow-inner">
              <img 
                src={photo} 
                alt="Riya" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Giant Racing Livery Number "21" */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 select-none">
              <span className="text-7xl sm:text-8xl font-black font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-f1-purple via-f1-purple to-f1-gold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                21
              </span>
            </div>
          </div>

          {/* Driver Stats Tech Readout */}
          <div className="mt-8 grid grid-cols-3 divide-x divide-f1-purple/30 border-t border-f1-purple/20 pt-5 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#EDEAFF]/85">
            <div className="px-1 text-center">
              <span className="block text-[9px] text-f1-gold font-bold mb-1">CAREER</span>
              NURSERY → NOW
            </div>
            <div className="px-1 text-center">
              <span className="block text-[9px] text-f1-gold font-bold mb-1">AGE STAGE</span>
              21 YEARS
            </div>
            <div className="px-1 text-center">
              <span className="block text-[9px] text-f1-gold font-bold mb-1">STATUS</span>
              RIDE OR DIE
            </div>
          </div>
        </motion.div>

        {/* Heading in aggressive Big Shoulders font */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl sm:text-7xl font-black text-white tracking-wider font-display uppercase leading-none mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle in Space Mono style */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-sm sm:text-base text-f1-gold font-mono uppercase tracking-widest mb-10 max-w-lg"
        >
          {subtitle}
        </motion.p>

        {/* Explore button with purple glow and hover gold border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a 
            href="#gallery"
            className="px-8 py-3.5 bg-f1-purple hover:bg-f1-purple text-white border-2 border-transparent hover:border-f1-gold rounded-full font-mono uppercase tracking-wider text-xs font-bold shadow-lg shadow-f1-purple/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Enter Gallery Track 🏁
          </a>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg 
            className="w-5 h-5 text-f1-purple/80 hover:text-f1-gold transition-colors duration-200" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
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
