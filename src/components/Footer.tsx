import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-[#0B0B0B] border-t border-[#2A2A2A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.a 
            href="#home" 
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107]"
          >
            AVENSIS 2K26
          </motion.a>
          
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center">
            {/* Instagram Button */}
            <motion.a
              href="https://www.instagram.com/avanthitagarapuvalasa.official/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#FFD700] text-black font-bold tracking-wider hover:bg-[#FFC107] transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.2)]"
            >
              <Instagram className="w-6 h-6" />
              <span>Follow AVENSIS on Instagram</span>
            </motion.a>

            {/* YouTube Button */}
            <motion.a
              href="https://www.youtube.com/@avanthiengineeringcollege"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#FFD700] text-black font-bold tracking-wider hover:bg-[#FFC107] transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.2)]"
            >
              <Youtube className="w-6 h-6" />
              <span>Subscribe on YouTube</span>
            </motion.a>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 text-sm font-medium tracking-[0.2em] uppercase">
              © 2026 AVENSIS 2K26 | Powered by Core Committees
            </p>
            <div className="flex justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
              <span>Excellence</span>
              <span>•</span>
              <span>Innovation</span>
              <span>•</span>
              <span>Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
