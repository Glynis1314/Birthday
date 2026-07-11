import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Rather from './components/Rather';
import Letter from './components/Letter';
import Reasons from './components/Reasons';
import Footer from './components/Footer';
import { Camera, Gamepad2, Heart, Mail, Home } from 'lucide-react';

export default function App() {
  const navItems = [
    { label: 'Home', id: 'hero', icon: <Home size={16} /> },
    { label: 'Gallery', id: 'gallery', icon: <Camera size={16} /> },
    { label: 'Would Rather', id: 'rather', icon: <Gamepad2 size={16} /> },
    { label: 'Letter', id: 'letter', icon: <Mail size={16} /> },
    { label: 'Reasons', id: 'reasons', icon: <Heart size={16} /> }
  ];

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-f1-purple/40 selection:text-white bg-[#0D0B1A]">
      {/* Floating Glassmorphic Navbar styled in dark plum/purple */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-[#2D2640]/80 backdrop-blur-md px-5 sm:px-6 py-3 rounded-full shadow-xl shadow-[#0D0B1A]/80 border border-f1-purple/25 w-max max-w-[95vw] md:max-w-xl">
        <ul className="flex items-center justify-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[#EDEAFF] hover:text-f1-gold font-mono uppercase tracking-wider text-[10px] sm:text-xs rounded-full hover:bg-f1-purple/30 transition-all duration-200 cursor-pointer"
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Single Page Sections */}
      <Hero />
      <Gallery />
      <Rather />
      <Letter />
      <Reasons />
      <Footer />
    </div>
  );
}
