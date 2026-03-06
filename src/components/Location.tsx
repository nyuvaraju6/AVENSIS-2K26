import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const mapLink = "https://maps.app.goo.gl/j9tkMsN8y3BK2NGF7";
  
  return (
    <section id="location" className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107] font-bold text-[32px] text-center mb-6 uppercase tracking-widest"
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
            <div className="flex items-center justify-center gap-3 text-white text-lg font-bold tracking-widest uppercase">
              <MapPin className="w-6 h-6 text-[#FFD700]" />
              <span>Avanthi Institute, Tagarapuvalasa</span>
            </div>
            
            <motion.a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,215,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-[#FFD700] text-black rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-[#FFC107] transition-all"
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
          className="relative w-full h-[500px] rounded-xl overflow-hidden border border-[#2A2A2A] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.896646549247!2d83.422127375178!3d17.93170708775988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39690000000001%3A0x8f0f0f0f0f0f0f0f!2sAvanthi%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1709366400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AVENSIS 2K26 Venue"
            className="relative z-10 hover:scale-105 transition-transform duration-700"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
