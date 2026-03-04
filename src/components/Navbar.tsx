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
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 bg-[#d60000] h-[70px] flex items-center shadow-md`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-widest text-white">
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
              className="text-sm font-medium text-white hover:bg-[#b30000] px-4 py-2 rounded transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="ml-4 px-6 py-2 bg-white text-[#d60000] hover:bg-gray-100 text-sm font-bold rounded-md transition-all"
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
          className="md:hidden absolute top-full left-0 right-0 bg-[#d60000] border-t border-[#b30000] p-6 flex flex-col gap-2 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-white hover:bg-[#b30000] px-4 py-2 rounded transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMenuOpen(false)}
            className="w-full mt-4 py-3 bg-white text-center text-[#d60000] font-bold rounded-md hover:bg-gray-100 transition-all"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
