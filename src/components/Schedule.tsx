import React from 'react';
import { motion } from 'motion/react';
import { SCHEDULE } from '../data/events';

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107] font-bold text-[32px] text-center mb-4 uppercase tracking-widest"
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
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[#2A2A2A] rounded-xl p-8 transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]"
            >
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-4">
                {day.day} <span className="text-gray-400 text-sm font-medium">— {day.date}</span>
              </h3>
              {day.title && (
                <p className="text-[#FFD700] font-bold text-lg mb-6 uppercase tracking-tight">
                  {day.title}
                </p>
              )}
              <div className="space-y-4 border-l-4 border-l-[#FFD700] pl-6">
                {day.items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-[#2A2A2A] last:border-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors px-2 rounded">
                    <span className="text-[#FFD700] font-bold text-sm uppercase tracking-wider">{item.time}</span>
                    <span className="text-white font-medium">{item.event}</span>
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
