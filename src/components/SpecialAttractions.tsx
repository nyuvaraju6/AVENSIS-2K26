import React from 'react';
import { motion } from 'motion/react';
import { ATTRACTIONS } from '../data/events';

const SpecialAttractions = () => {
  return (
    <section id="special-attractions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[32px] text-center mb-4 uppercase"
          >
            Special Attractions
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              className="group bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#d60000] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
