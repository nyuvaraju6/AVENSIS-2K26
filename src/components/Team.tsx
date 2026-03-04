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

        {/* Student Coordinators Section */}
        <div className="text-center mb-16 pt-24 border-t border-[#e5e5e5]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[32px] text-center mb-4 uppercase"
          >
            STUDENT COORDINATORS – AVENSIS 2K26
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg italic tracking-wide mb-12"
          >
            "The heroes leading the charge for the ultimate youth fest."
          </motion.p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name, committee or dept..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[#ccc] rounded-full py-3 pl-12 pr-6 text-[#222] placeholder:text-gray-500 focus:outline-none focus:border-[#d60000] transition-all"
            />
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible md:snap-none -mx-6 px-6 md:mx-0 md:px-0">
          <AnimatePresence mode="popLayout">
            {filteredCoordinators.map((coordinator) => (
              <motion.div
                layout
                key={coordinator.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white border-t border-r border-b border-[#e5e5e5] border-l-4 border-l-[#d60000] rounded-[10px] p-8 shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
              >
                {/* ID Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#d60000] text-[10px] font-bold text-white">
                  #{String(coordinator.id).padStart(2, '0')}
                </div>

                <div className="flex flex-col items-center text-center">
                  {/* Profile Photo */}
                  <div className="relative w-24 h-24 mb-6">
                    <div className="relative w-full h-full rounded-full p-[3px] border-2 border-[#d60000] bg-white">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        {coordinator.photo ? (
                          <img
                            src={coordinator.photo}
                            alt={coordinator.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '';
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : null}
                        <User className="w-10 h-10 text-gray-400 absolute" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <h4 className="text-2xl font-bold text-[#222] mb-4 tracking-tight">
                      {coordinator.name}
                    </h4>
                    
                    <div className="space-y-3">
                      <a 
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-[#d60000] transition-colors bg-gray-50 py-2 rounded-lg border border-gray-200"
                      >
                        <Phone className="w-4 h-4 text-[#d60000]" />
                        <span className="font-bold tracking-wider">{coordinator.phone}</span>
                      </a>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gray-50 border border-gray-200">
                          <Briefcase className="w-4 h-4 text-[#d60000]" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Committee</span>
                          <span className="text-[11px] font-bold text-[#222] uppercase leading-tight">{coordinator.committee}</span>
                        </div>
                        
                        <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gray-50 border border-gray-200">
                          <GraduationCap className="w-4 h-4 text-[#d60000]" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Department</span>
                          <span className="text-[11px] font-bold text-[#222] uppercase leading-tight">{coordinator.dept}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCoordinators.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            No coordinators found matching your search.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Team;
