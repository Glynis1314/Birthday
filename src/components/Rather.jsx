import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/content';
import { HelpCircle, RefreshCw } from 'lucide-react';

export default function Rather() {
  const questions = siteConfig.ratherQuestions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // null, 'A', or 'B'

  const handleSelect = (option) => {
    if (selectedOption) return; // Prevent double clicks during transition
    setSelectedOption(option);
    
    // Smooth transition to next question after highlight delay
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }, 600);
  };

  const handleReplay = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
  };

  const isGameOver = currentIndex >= questions.length;
  const currentQuestion = !isGameOver ? questions[currentIndex] : null;

  return (
    <section 
      id="rather" 
      className="relative py-24 px-4 sm:px-6 bg-[#0D0B1A] overflow-hidden"
    >
      {/* Telemetry Grid Line Background texture */}
      <div className="absolute inset-0 telemetry-grid opacity-25 pointer-events-none" />

      {/* Spotlight / Concert lighting effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-wider font-display uppercase mb-4"
          >
            WOULD RIYA RATHER... 🤔
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
            Test your knowledge! Tap the option you think Riya would choose.
          </motion.p>
        </div>

        {/* Card Game Container */}
        <div className="min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isGameOver ? (
              <motion.div
                key={`q-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full max-w-3xl p-8 bg-[#2D2640] border-2 border-f1-purple/30 rounded-3xl shadow-xl flex flex-col items-center"
              >
                {/* Progress / Lap Indicator */}
                <div className="text-xs font-mono font-bold text-f1-gold tracking-widest uppercase mb-6 bg-[#0D0B1A]/50 px-4 py-1.5 rounded-full border border-f1-purple/20">
                  LAP {currentIndex + 1} OF {questions.length}
                </div>

                {/* Prominent Question Heading */}
                <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-wide text-center uppercase mb-10">
                  WOULD RIYA RATHER...
                </h3>

                {/* Option Choices container */}
                <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch mt-2">
                  
                  {/* Option A Card */}
                  <motion.div
                    whileHover={{ scale: selectedOption ? 1 : 1.02, borderColor: selectedOption ? "" : "#F5C400" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect('A')}
                    className={`flex-1 flex flex-col justify-center items-center p-8 bg-[#1f1a2e] border-2 rounded-2xl transition-all duration-300 cursor-pointer text-center min-h-[140px] select-none ${
                      selectedOption === 'A' 
                        ? 'border-f1-gold bg-f1-purple/30 shadow-[0_0_20px_rgba(245,196,0,0.4)] scale-[1.03] z-10' 
                        : selectedOption === 'B' 
                        ? 'opacity-30 scale-95 border-f1-purple/10' 
                        : 'border-f1-purple/20'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-f1-purple group-hover:text-f1-gold tracking-widest uppercase mb-3">OPTION A</span>
                    <p className="text-white text-base font-semibold leading-relaxed font-sans">
                      {currentQuestion.optionA}
                    </p>
                  </motion.div>

                  {/* VS divider for concert tour/racing entry aesthetic */}
                  <div className="flex justify-center items-center relative py-2 md:py-0">
                    <span className="font-mono text-xs font-bold text-f1-gold/40 border border-f1-gold/20 px-3 py-1 rounded-full bg-[#2D2640] z-10 uppercase tracking-widest">
                      VS
                    </span>
                  </div>

                  {/* Option B Card */}
                  <motion.div
                    whileHover={{ scale: selectedOption ? 1 : 1.02, borderColor: selectedOption ? "" : "#F5C400" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect('B')}
                    className={`flex-1 flex flex-col justify-center items-center p-8 bg-[#1f1a2e] border-2 rounded-2xl transition-all duration-300 cursor-pointer text-center min-h-[140px] select-none ${
                      selectedOption === 'B' 
                        ? 'border-f1-gold bg-f1-purple/30 shadow-[0_0_20px_rgba(245,196,0,0.4)] scale-[1.03] z-10' 
                        : selectedOption === 'A' 
                        ? 'opacity-30 scale-95 border-f1-purple/10' 
                        : 'border-f1-purple/20'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-f1-purple group-hover:text-f1-gold tracking-widest uppercase mb-3">OPTION B</span>
                    <p className="text-white text-base font-semibold leading-relaxed font-sans">
                      {currentQuestion.optionB}
                    </p>
                  </motion.div>

                </div>
              </motion.div>
            ) : (
              /* Game Completed Slide */
              <motion.div
                key="replay-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-xl p-10 bg-[#2D2640] border-2 border-f1-purple/30 rounded-3xl shadow-2xl flex flex-col items-center text-center"
              >
                {/* Completion Trophy Icon */}
                <div className="w-16 h-16 rounded-full bg-f1-purple/20 border-2 border-f1-gold flex items-center justify-center text-f1-gold mb-6 shadow-[0_0_15px_rgba(245,196,0,0.25)]">
                  <HelpCircle size={32} />
                </div>

                {/* Completion Message */}
                <h3 className="text-3xl font-extrabold text-white font-display tracking-wide uppercase mb-4">
                  Lap Finished! 🏁
                </h3>

                <p className="text-lg text-[#EDEAFF] leading-relaxed mb-10 font-sans">
                  You know Riya better than she knows herself 💜
                </p>

                {/* Replay CTA */}
                <button
                  onClick={handleReplay}
                  className="px-8 py-3.5 bg-f1-purple hover:bg-f1-purple text-white border-2 border-transparent hover:border-f1-gold rounded-full font-mono uppercase tracking-widest text-xs font-bold shadow-lg shadow-f1-purple/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw size={14} />
                  Replay Game
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
