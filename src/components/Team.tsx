import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDENT_COORDINATORS, OVERALL_COORDINATORS } from '../data/events';
import { Search, Phone, User, Briefcase, GraduationCap } from 'lucide-react';

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoordinators = STUDENT_COORDINATORS.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.committee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Overall Coordinators Section */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[32px] text-center mb-4 uppercase"
          >
            STUDENT OVERALL CO-ORDINATORS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg italic tracking-wide mb-16"
          >
            "The visionaries orchestrating the grand symphony of Avensis 2K26."
          </motion.p>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible md:snap-none -mx-6 px-6 md:mx-0 md:px-0">
            {OVERALL_COORDINATORS.map((coordinator, index) => (
              <motion.div
                key={coordinator.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.8
                }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-[10px] text-center border-t border-r border-b border-[#e5e5e5] border-l-4 border-l-[#d60000] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
              >
                <div className="relative w-36 h-36 mx-auto mb-8">
                  <div className="relative w-full h-full rounded-full p-[4px] border-2 border-[#d60000] bg-white">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      {coordinator.photo ? (
                        <img
                          src={coordinator.photo}
                          alt={coordinator.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '';
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : null}
                      <User className="w-12 h-12 text-gray-400 absolute" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#222]">
                  {coordinator.name}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#d60000] transition-colors bg-gray-50 py-2 rounded-lg border border-gray-200"
                  >
                    <Phone className="w-4 h-4 text-[#d60000]" />
                    <span className="font-bold tracking-widest">{coordinator.phone}</span>
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-[#d60000] text-xs font-bold uppercase tracking-[0.2em]">
                    <GraduationCap className="w-4 h-4" />
                    {coordinator.dept}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
