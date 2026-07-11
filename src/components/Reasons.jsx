import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/content';

export default function Reasons() {
  const reasons = siteConfig.reasons;

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="reasons" 
      className="relative py-24 px-4 sm:px-6 bg-[#0D0B1A]"
    >
      {/* Telemetry Grid Line Background texture */}
      <div className="absolute inset-0 telemetry-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-wider font-display uppercase mb-4"
          >
            21 REASONS // TELEMETRY LOGS 💛
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-24 h-1 bg-f1-purple mx-auto rounded-full mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#EDEAFF] text-base max-w-lg mx-auto"
          >
            Just a few of the million reasons why you are, and always will be, my absolute favorite person.
          </motion.p>
        </div>

        {/* 21 Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            // Count down from 21 to 1
            const numberVal = 21 - index;
            const displayNum = String(numberVal).padStart(2, '0');
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  borderColor: '#7C3AED',
                  boxShadow: '0 8px 20px rgba(124, 58, 237, 0.15)'
                }}
                className="bg-[#2D2640] rounded-2xl p-6 border border-f1-purple/20 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle telemetry overlay detail */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-f1-purple/5 rounded-bl-full group-hover:bg-f1-purple/10 transition-colors duration-300 pointer-events-none" />

                {/* Reason Layout: Side-by-side Number and Text */}
                <div className="flex items-start gap-4 z-10 relative">
                  {/* Countdown number styled prominently in gold mono font */}
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-f1-gold select-none leading-none pt-1">
                    {displayNum}
                  </div>
                  
                  {/* Reason Text */}
                  <div className="flex-1">
                    <p className="text-[#EDEAFF] font-medium leading-relaxed font-sans text-base">
                      {reason}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
