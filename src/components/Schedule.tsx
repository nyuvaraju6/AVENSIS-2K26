import React from 'react';
import { motion } from 'motion/react';
import { SCHEDULE } from '../data/events';

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[32px] text-center mb-4 uppercase"
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
              className="bg-white border-t border-r border-b border-[#e5e5e5] border-l-4 border-l-[#d60000] rounded-[10px] p-8 shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all"
            >
              <h3 className="text-2xl font-bold text-[#222] mb-2 flex items-center gap-4">
                {day.day} <span className="text-gray-500 text-sm font-medium">— {day.date}</span>
              </h3>
              {day.title && (
                <p className="text-[#d60000] font-bold text-lg mb-6 uppercase tracking-tight">
                  {day.title}
                </p>
              )}
              <div className="space-y-4">
                {day.items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-[#e5e5e5] last:border-0">
                    <span className="text-[#d60000] font-bold text-sm uppercase tracking-wider">{item.time}</span>
                    <span className="text-[#222] font-medium">{item.event}</span>
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
