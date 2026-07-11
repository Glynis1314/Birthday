import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/content';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const images = siteConfig.gallery;

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentIndex(-1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Stagger container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-24 px-4 sm:px-6 bg-gradient-to-b from-amber-50 to-rose-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-rose-900 tracking-tight font-display mb-4"
          >
            A Gallery of Beautiful Moments 📸
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
            Some of my favorite memories of you, captured in frames of happiness and laughter.
          </motion.p>
        </div>

        {/* Masonry-like Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid relative overflow-hidden rounded-2xl bg-white border border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Photo Image */}
              <img 
                src={img.src} 
                alt={img.caption} 
                className="w-full h-auto object-cover max-h-[450px]"
                loading="lazy"
              />

              {/* Hover Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-base font-semibold drop-shadow-md leading-relaxed font-display">
                  {img.caption}
                </p>
                <span className="text-amber-300 text-xs mt-2 font-medium tracking-wide">
                  CLICK TO VIEW 🔍
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
