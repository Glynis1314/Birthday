import React from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import { siteConfig } from '../config/content';

export default function Footer() {
  const handleCelebrate = () => {
    // Custom F1 & concert theme colors: racing purple, soft lavender, milestone gold, white
    const themeColors = ['#7C3AED', '#C084FC', '#F5C400', '#FFFFFF'];

    // Stage 1: Standard center burst
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: themeColors
    });

    // Stage 2: Left side shooting upwards
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: themeColors
      });
    }, 200);

    // Stage 3: Right side shooting upwards
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: themeColors
      });
    }, 450);
  };

  return (
    <footer className="relative py-20 px-4 bg-[#0D0B1A] text-center overflow-hidden border-t border-f1-purple/20">
      {/* Telemetry Grid Line Background texture */}
      <div className="absolute inset-0 telemetry-grid opacity-15 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-[-5%] left-[10%] w-48 h-48 rounded-full bg-f1-purple/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-60 h-60 rounded-full bg-f1-purple/5 blur-2xl pointer-events-none" />

      <div className="max-w-xl mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Heart Icon pulse in racing purple */}
        <div className="mb-6 flex justify-center items-center text-f1-purple animate-pulse">
          <Heart size={36} fill="currentColor" />
        </div>

        {/* Footer Title Text in display uppercase */}
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 font-display uppercase tracking-wide">
          {siteConfig.footer.signature}
        </h2>
        
        <p className="text-f1-text/70 text-xs sm:text-sm mb-8 font-mono uppercase tracking-widest">
          SYSTEM LAP LOG // RECORD COMPLETED
        </p>

        {/* Celebrate button in purple, gold hover border, purple shadow glow */}
        <button
          onClick={handleCelebrate}
          className="px-10 py-4 bg-f1-purple hover:bg-f1-purple text-white border-2 border-transparent hover:border-f1-gold rounded-full font-mono uppercase tracking-widest text-sm font-bold shadow-lg shadow-f1-purple/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          Celebrate! 🥳
        </button>

        {/* Tiny Copyright */}
        <div className="mt-16 text-f1-text/30 font-mono text-[9px] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Riya's 21st Birthday Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
