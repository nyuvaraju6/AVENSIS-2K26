import React from 'react';
import { motion } from 'motion/react';
import { SCHEDULE } from '../data/events';

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-black/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-yellow-400 mb-4 tracking-tight"
          >
            Event Schedule
          </motion.h2>
        </div>

        <div className="space-y-12">
          {SCHEDULE.map((day, idx) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-zinc-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                {day.day} <span className="text-zinc-500 text-sm font-medium">— {day.date}</span>
              </h3>
              <div className="space-y-4">
                {day.items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-zinc-800/50 last:border-0">
                    <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">{item.time}</span>
                    <span className="text-zinc-300 font-medium">{item.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
