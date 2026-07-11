import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Letter from './components/Letter';
import Reasons from './components/Reasons';
import Footer from './components/Footer';
import { Camera, Calendar, Heart, Mail, Home } from 'lucide-react';

export default function App() {
  const navItems = [
    { label: 'Home', id: 'hero', icon: <Home size={18} /> },
    { label: 'Gallery', id: 'gallery', icon: <Camera size={18} /> },
    { label: 'Timeline', id: 'timeline', icon: <Calendar size={18} /> },
    { label: 'Letter', id: 'letter', icon: <Mail size={18} /> },
    { label: 'Reasons', id: 'reasons', icon: <Heart size={18} /> }
  ];

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-rose-200 selection:text-rose-900 bg-[#FAF6F0]">
      {/* Floating Glassmorphic Navbar */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-xl shadow-rose-100/40 border border-white/50 max-w-[90vw] md:max-w-md">
        <ul className="flex items-center gap-4 sm:gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-rose-800 hover:text-rose-600 font-semibold text-xs sm:text-sm rounded-full hover:bg-rose-50 transition-all duration-200 cursor-pointer"
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
      <Timeline />
      <Letter />
      <Reasons />
      <Footer />
    </div>
  );
}
