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
    { name: 'Events', href: '#events' },
    { name: 'Patrons', href: '#patrons' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Convenors', href: '#convenors' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-lg py-4 border-b border-red-900/40 shadow-xl' : 'bg-black/70 backdrop-blur-lg py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-widest text-[#ffd700]">
          AVENSIS 2K26
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-[#ffd700] transition-all hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="px-6 py-2.5 bg-[#b11217] hover:bg-[#ffd700] hover:text-black text-sm font-bold rounded-full transition-all"
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
          className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-zinc-300 hover:text-[#ffd700] transition-all hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-3 bg-[#b11217] text-center text-white font-bold rounded-xl hover:bg-[#ffd700] hover:text-black transition-all"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
