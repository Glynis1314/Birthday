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
      className="py-24 px-4 sm:px-6 bg-gradient-to-b from-rose-50 to-amber-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-rose-900 tracking-tight font-display mb-4"
          >
            21 Reasons I Love You 💛
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-24 h-1 bg-amber-400 mx-auto rounded-full mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-amber-800 text-lg max-w-lg mx-auto"
          >
            Just a few of the million reasons why you are, and always will be, my absolute favorite person.
          </motion.p>
        </div>

        {/* 21 Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const displayNum = String(index + 1).padStart(2, '0');
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle background overlay */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-rose-50 rounded-bl-full group-hover:bg-amber-50 transition-colors duration-300 pointer-events-none" />

                {/* Reason Text */}
                <div className="z-10 mt-6 mb-2">
                  <p className="text-rose-950 font-medium leading-relaxed font-display text-base">
                    {reason}
                  </p>
                </div>

                {/* Styled Number in Corner */}
                <div className="absolute top-4 left-4 z-0 text-3xl font-extrabold text-amber-400/30 group-hover:text-amber-400/50 transition-colors duration-300 select-none">
                  {displayNum}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
