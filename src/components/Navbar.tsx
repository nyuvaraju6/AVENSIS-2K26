import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Poster', href: 'https://drive.google.com/uc?export=view&id=1BqJ4KQgjGukilj2WZFk5q8HM4qbofO6y', isExternal: true },
    { name: 'Events', href: '#events' },
    { name: 'Patrons', href: '#patrons' },
    { name: 'Convenors', href: '#convenors' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Team', href: '#team' },
    { name: 'Schedule', href: '#schedule' },
  ];

  return (
    <nav
      className={`sticky top-0 z-[9999] transition-all duration-300 ${isScrolled ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#2A2A2A]' : 'bg-[#0B0B0B]'} h-[70px] flex items-center shadow-md`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
          AVENSIS 2K26
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="relative text-sm font-medium text-white hover:text-[#FFD700] px-4 py-2 transition-all group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#register"
            className="ml-4 px-6 py-2 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#FFC107] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all"
          >
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B0B] border-t border-[#2A2A2A] p-6 flex flex-col gap-2 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-white hover:text-[#FFD700] px-4 py-2 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMenuOpen(false)}
            className="w-full mt-4 py-3 bg-[#FFD700] text-center text-black font-bold rounded-lg hover:bg-[#FFC107] transition-all"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
