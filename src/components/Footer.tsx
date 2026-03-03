import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-[#b11217]/30 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[radial-gradient(circle_at_center,rgba(177,18,23,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.a 
            href="#home" 
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-black tracking-tighter bg-gradient-to-b from-[#ffd700] via-[#f5c542] to-[#b11217] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
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
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#b11217] to-[#ffd700] text-black font-black tracking-wider shadow-[0_0_20px_rgba(177,18,23,0.3)] hover:shadow-[0_0_35px_rgba(255,215,0,0.6)] transition-all duration-300 group overflow-hidden relative"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none" />
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
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#6e0f12] border border-[#b11217] text-white font-black tracking-wider shadow-[0_0_20px_rgba(110,15,18,0.4)] hover:shadow-[0_0_35px_rgba(177,18,23,0.6)] transition-all duration-300 group overflow-hidden relative"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none" />
              <Youtube className="w-6 h-6 text-[#ffd700]" />
              <span className="bg-gradient-to-r from-white to-[#cfd2d6] bg-clip-text text-transparent">Subscribe on YouTube</span>
            </motion.a>
          </div>

          <div className="space-y-4">
            <p className="text-[#cfd2d6] text-sm font-medium tracking-[0.2em] uppercase opacity-60">
              © 2026 AVENSIS 2K26 | Powered by Core Committees
            </p>
            <div className="flex justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#b11217]">
              <span>Cinematic</span>
              <span className="text-[#ffd700]">•</span>
              <span>Powerful</span>
              <span className="text-[#ffd700]">•</span>
              <span>Immersive</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
