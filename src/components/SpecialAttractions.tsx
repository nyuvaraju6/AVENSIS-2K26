import React from 'react';
import { motion } from 'motion/react';
import { ATTRACTIONS } from '../data/events';

const SpecialAttractions = () => {
  return (
    <section id="special-attractions" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Special <span className="text-yellow-400">Attractions</span>
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
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
              className="group bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all"
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
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
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
