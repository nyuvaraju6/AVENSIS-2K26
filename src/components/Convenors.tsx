import React from 'react';
import { motion } from 'motion/react';

const Convenors = () => {
  const convenors = [
    "Dr. S.H. Shariff – Associate Professor, HOD – MECH",
    "Dr. Ch. R. Phani Kumar – Associate Professor – Dept of ECE"
  ];

  const coConvenors = [
    "Dr. Uma Shankar V – Vice Principal – AIPS",
    "Dr. B. V. Swamy – Assistant Professor – CSE",
    "Mr. Y. Babji – Assistant Professor – CSMD",
    "Mr. A. Seshu – Assistant Professor – Polytechnic",
    "Mr. K. Satayanarayana – Assistant Professor – Degree"
  ];

  return (
    <section id="convenors" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[32px] text-center mb-4 uppercase"
          >
            Convenors
          </motion.h2>
          <div className="w-24 h-1 bg-[#d60000] mx-auto" />
        </div>

        <div className="space-y-12">
          {/* Convenors Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#e5e5e5] p-8 md:p-12 rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#d60000] mb-8 text-center tracking-widest uppercase">
              Convenors
            </h3>
            
            <ul className="space-y-4 text-center">
              {convenors.map((person, index) => (
                <li key={index} className="text-lg md:text-xl text-[#222] font-medium py-2 border-b border-[#e5e5e5] last:border-0">
                  {person}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Co-Convenors Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-[#e5e5e5] p-8 md:p-12 rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#d60000] mb-8 text-center tracking-widest uppercase">
              Co-Convenors
            </h3>
            
            <ul className="space-y-4 text-center">
              {coConvenors.map((person, index) => (
                <li key={index} className="text-lg md:text-xl text-[#222] font-medium py-2 border-b border-[#e5e5e5] last:border-0">
                  {person}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Convenors;
