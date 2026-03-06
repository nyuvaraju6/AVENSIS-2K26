import React from 'react';
import { motion } from 'motion/react';
import { ATTRACTIONS } from '../data/events';

const SpecialAttractions = () => {
  return (
    <section id="special-attractions" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107] font-bold text-[32px] text-center mb-4 uppercase tracking-widest"
          >
            Special Attractions
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond the competitions, experience these unique highlights that make AVENSIS 2K26 truly magical.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ATTRACTIONS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialAttractions;
