import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/content';

export default function Letter() {
  const { greeting, paragraphs, closing, sender } = siteConfig.letter;

  return (
    <section 
      id="letter" 
      className="py-24 px-4 sm:px-6 bg-gradient-to-b from-amber-50/40 to-rose-50"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-rose-900 tracking-tight font-display mb-4"
          >
            A Little Letter to You ✉️
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-24 h-1 bg-amber-400 mx-auto rounded-full mb-4"
          />
        </div>

        {/* Lined Paper Letter Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#FFFDF9] border border-amber-100 shadow-2xl rounded-2xl overflow-hidden p-8 sm:p-12 md:p-16 hover:shadow-rose-100/50 transition-all duration-500"
        >
          {/* Notebook Spiral binder effect on top (decorative circles) */}
          <div className="absolute top-0 left-0 right-0 h-6 flex justify-around px-8 bg-amber-50/60 border-b border-amber-100">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-full bg-rose-50 border border-amber-200/50 -mt-1.5 shadow-inner" />
            ))}
          </div>

          {/* Paper lines overlay */}
          <div 
            className="absolute inset-0 pointer-events-none mt-10" 
            style={{
              backgroundImage: 'linear-gradient(rgba(226, 203, 169, 0.15) 1px, transparent 1px)',
              backgroundSize: '100% 2.25rem',
              lineHeight: '2.25rem'
            }}
          />

          {/* Red margin line */}
          <div className="absolute top-6 bottom-0 left-12 sm:left-16 w-0.5 bg-rose-200/80 pointer-events-none" />

          {/* Letter content wrapper */}
          <div className="relative pl-8 sm:pl-12 md:pl-16 pt-4 font-serif text-amber-950 text-lg leading-[2.25rem]">
            {/* Greeting */}
            <h3 className="text-2xl sm:text-3xl font-bold font-handwritten text-rose-800 mb-6 mt-2">
              {greeting}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-6">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="font-handwritten text-xl sm:text-2xl text-amber-950/90 leading-[2.25rem]">
                  {p}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="mt-12 text-right">
              <p className="font-handwritten text-2xl font-semibold text-rose-800">
                {closing}
              </p>
              <p className="font-handwritten text-3xl font-bold text-rose-900 mt-2">
                {sender}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
