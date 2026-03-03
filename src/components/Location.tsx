import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const mapLink = "https://maps.app.goo.gl/j9tkMsN8y3BK2NGF7";
  
  return (
    <section id="location" className="py-32 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(177,18,23,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-[#ffd700] via-[#f5c542] to-[#b11217] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            THE VENUE
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center justify-center gap-3 text-[#cfd2d6] text-lg font-bold tracking-widest uppercase">
              <MapPin className="w-6 h-6 text-[#b11217] animate-pulse" />
              <span>Avanthi Institute, Tagarapuvalasa</span>
            </div>
            
            <motion.a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 bg-[#b11217]/10 border border-[#b11217]/30 rounded-full text-[#ffd700] text-sm font-black uppercase tracking-widest hover:bg-[#b11217]/20 transition-all"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] rounded-[2rem] overflow-hidden border border-[#b11217]/30 shadow-[0_0_50px_rgba(177,18,23,0.2)] group"
        >
          {/* HUD Overlay */}
          <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-[#b11217]/5 transition-all duration-700 pointer-events-none z-20" />
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#ffd700]/40 pointer-events-none z-20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#ffd700]/40 pointer-events-none z-20" />
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.896646549247!2d83.422127375178!3d17.93170708775988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39690000000001%3A0x8f0f0f0f0f0f0f0f!2sAvanthi%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1709366400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2) invert(0.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AVENSIS 2K26 Venue"
            className="relative z-10"
          ></iframe>
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none z-15" />
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
