import React from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

export default function Footer() {
  const handleCelebrate = () => {
    // Stage 1: Standard center burst
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFC0CB', '#FFD700', '#FF69B4', '#FFFDD0', '#E6E6FA']
    });

    // Stage 2: Left side shooting upwards
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: ['#FFC0CB', '#FFD700', '#FF69B4']
      });
    }, 200);

    // Stage 3: Right side shooting upwards
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: ['#FFC0CB', '#FFD700', '#FF69B4']
      });
    }, 450);
  };

  return (
    <footer className="py-20 px-4 bg-gradient-to-t from-rose-100 via-rose-50 to-amber-50/40 text-center relative overflow-hidden border-t border-rose-100">
      {/* Decorative floral/bokeh blur circles */}
      <div className="absolute top-[-5%] left-[10%] w-48 h-48 rounded-full bg-pink-200/20 blur-2xl" />
      <div className="absolute bottom-[-10%] right-[10%] w-60 h-60 rounded-full bg-amber-200/20 blur-2xl" />

      <div className="max-w-xl mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Heart Icon pulse */}
        <div className="mb-6 flex justify-center items-center text-rose-500 animate-pulse">
          <Heart size={36} fill="currentColor" />
        </div>

        {/* Footer Title Text */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-900 mb-2 font-display">
          Happy Birthday, my forever person 💛
        </h2>
        
        <p className="text-amber-800/80 text-sm mb-8 font-medium">
          Created with lots of love for your special day.
        </p>

        {/* Confetti celebrate button */}
        <button
          onClick={handleCelebrate}
          className="px-10 py-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl shadow-rose-200 hover:shadow-rose-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
          Celebrate! 🥳
        </button>

        {/* Tiny Copyright */}
        <div className="mt-16 text-rose-900/40 text-xs">
          &copy; {new Date().getFullYear()} Riya's 21st Birthday Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
