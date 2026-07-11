import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/content';

export default function Letter() {
  const { greeting, paragraphs, closing, sender } = siteConfig.letter;

  return (
    <section 
      id="letter" 
      className="relative py-24 px-4 sm:px-6 bg-[#0D0B1A]"
    >
      {/* Telemetry Grid Line Background texture */}
      <div className="absolute inset-0 telemetry-grid opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-wider font-display uppercase mb-4"
          >
            A PERSONAL MESSAGE // LOGBOOK ✉_
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-24 h-1 bg-f1-purple mx-auto rounded-full mb-4"
          />
        </div>

        {/* Muted Plum Ruled Logbook Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#2D2640] border-2 border-f1-purple/30 shadow-2xl rounded-2xl overflow-hidden p-8 sm:p-12 md:p-16 hover:shadow-f1-purple/20 transition-all duration-500"
        >
          {/* Notebook Spiral binder effect on top (decorative circles) */}
          <div className="absolute top-0 left-0 right-0 h-6 flex justify-around px-8 bg-[#1f1a2e] border-b border-f1-purple/20">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#0D0B1A] border border-f1-purple/30 -mt-1.5 shadow-inner" />
            ))}
          </div>

          {/* Paper lines overlay */}
          <div 
            className="absolute inset-0 pointer-events-none mt-10" 
            style={{
              backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.12) 1px, transparent 1px)',
              backgroundSize: '100% 2.25rem',
              lineHeight: '2.25rem'
            }}
          />

          {/* Lavender margin line */}
          <div className="absolute top-6 bottom-0 left-12 sm:left-16 w-0.5 bg-lavender-soft/40 pointer-events-none" />

          {/* Letter content wrapper */}
          <div className="relative pl-8 sm:pl-12 md:pl-16 pt-4 text-[#EDEAFF] text-lg leading-[2.25rem]">
            {/* Greeting */}
            <h3 className="text-3xl font-bold font-handwritten text-f1-gold mb-6 mt-2">
              {greeting}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-6">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="font-handwritten text-2xl text-[#EDEAFF]/95 leading-[2.25rem]">
                  {p}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="mt-12 text-right">
              <p className="font-handwritten text-2xl font-semibold text-f1-gold">
                {closing}
              </p>
              <p className="font-handwritten text-3xl font-bold text-white mt-2">
                {sender}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
