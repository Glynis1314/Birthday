import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/content';

export default function Timeline() {
  const events = siteConfig.timeline;

  return (
    <section 
      id="timeline" 
      className="py-24 px-4 sm:px-6 bg-gradient-to-b from-rose-50 to-amber-50/40"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-rose-900 tracking-tight font-display mb-4"
          >
            Our Memory Timeline ⏳
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
            A stroll down memory lane. The moments we've shared, the milestones we've hit, and the endless laughs.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-rose-200 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-rose-200">
          
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={event.id} 
                className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center pl-8 md:pl-0"
              >
                {/* Central Year circle badge */}
                <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-rose-400 border-4 border-white shadow-lg" />
                
                {/* Space holder for alternating layout on desktop */}
                <div className={`hidden md:block w-1/2 ${isEven ? 'order-1 pr-12 text-right' : 'order-2 pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    viewport={{ once: true }}
                    className="text-rose-900/60 text-5xl font-extrabold tracking-widest select-none"
                  >
                    {event.year}
                  </motion.div>
                </div>

                {/* Main Card */}
                <div className={`w-full md:w-1/2 ${isEven ? 'order-2 md:pl-12' : 'order-1 md:pr-12'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white rounded-3xl p-6 border border-rose-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden"
                  >
                    {/* Corner gradient ribbon */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-100/50 to-transparent pointer-events-none rounded-bl-full" />
                    
                    {/* Card Content */}
                    <div className="flex flex-col gap-4">
                      {/* Photo */}
                      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner relative">
                        <img 
                          src={event.photo} 
                          alt={event.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Year Badge on Mobile */}
                        <div className="absolute top-3 left-3 md:hidden px-3 py-1 bg-rose-500 text-white font-bold text-xs rounded-full shadow">
                          {event.year}
                        </div>
                      </div>

                      {/* Header */}
                      <div>
                        <span className="hidden md:inline-block px-3 py-1 bg-amber-100 text-amber-950 text-xs font-semibold rounded-full mb-2">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold text-rose-950 font-display">
                          {event.title}
                        </h3>
                      </div>

                      {/* Caption text */}
                      <p className="text-rose-900/80 leading-relaxed text-sm italic font-serif">
                        "{event.caption}"
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
