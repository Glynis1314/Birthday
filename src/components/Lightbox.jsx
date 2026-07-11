import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  // Add keyboard listeners for navigation and close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Disable body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex < 0 || currentIndex >= images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Previous Photo"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Image Container with Framer Motion slide */}
        <div className="relative max-w-5xl max-h-[80vh] px-4 flex flex-col items-center">
          <motion.img
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3 }}
            src={currentImage.src}
            alt={currentImage.caption || "Riya"}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
          />

          {/* Caption */}
          {currentImage.caption && (
            <motion.p
              key={`caption-${currentImage.src}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-4 text-center text-white/90 text-lg font-medium max-w-xl font-display"
            >
              {currentImage.caption}
            </motion.p>
          )}

          {/* Pagination Counter */}
          <span className="mt-2 text-white/40 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Next Photo"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
