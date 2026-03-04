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
    <section id="team" className="py-32 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(177,18,23,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Overall Coordinators Section */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-[#ffd700] via-[#f5c542] to-[#b11217] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            STUDENT OVERALL CO-ORDINATORS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#cfd2d6] max-w-2xl mx-auto text-lg italic tracking-wide mb-16"
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
                className="group relative bg-gradient-to-br from-[#111827] to-[#0a0f1c] p-8 rounded-[20px] text-center border border-[#b11217]/30 backdrop-blur-md shadow-[0_0_30px_rgba(177,18,23,0.15)] hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:border-[#ffd700]/50 transition-all duration-500 perspective-1000 overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none" />
                
                <div className="relative w-36 h-36 mx-auto mb-8">
                  <div className="absolute inset-[-15px] bg-[#b11217] rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-tr from-[#b11217] via-[#ffd700] to-[#b11217] shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_35px_rgba(255,215,0,0.6)] transition-all duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1c] flex items-center justify-center">
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
                      <User className="w-12 h-12 text-[#ffd700]/50 absolute" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-4 tracking-tight bg-gradient-to-b from-[#ffd700] to-[#f5c542] bg-clip-text text-transparent">
                  {coordinator.name}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center justify-center gap-2 text-[#cfd2d6] hover:text-[#ffd700] transition-colors bg-white/5 py-2 rounded-lg border border-white/5 hover:border-[#ffd700]/30"
                  >
                    <Phone className="w-4 h-4 text-[#b11217]" />
                    <span className="font-bold tracking-widest">{coordinator.phone}</span>
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-[#b11217] text-xs font-black uppercase tracking-[0.2em] opacity-80">
                    <GraduationCap className="w-4 h-4" />
                    {coordinator.dept}
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ffd700]/20 group-hover:border-[#ffd700]/60 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ffd700]/20 group-hover:border-[#ffd700]/60 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Coordinators Section */}
        <div className="text-center mb-16 pt-24 border-t border-white/5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-[#ffd700] via-[#f5c542] to-[#b11217] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            STUDENT COORDINATORS – AVENSIS 2K26
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#cfd2d6] max-w-2xl mx-auto text-lg italic tracking-wide mb-12"
          >
            "The heroes leading the charge for the ultimate youth fest."
          </motion.p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ffd700]/50 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name, committee or dept..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111827]/50 border border-[#b11217]/30 rounded-full py-3 pl-12 pr-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ffd700]/50 focus:ring-1 focus:ring-[#ffd700]/50 transition-all backdrop-blur-sm"
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
                className="group relative bg-gradient-to-br from-[#111827] to-[#0a0f1c] border border-[#b11217]/20 rounded-2xl p-8 backdrop-blur-md hover:border-[#ffd700]/40 hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] transition-all overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
              >
                {/* ID Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#b11217]/20 border border-[#b11217]/30 text-[10px] font-black text-[#ffd700] group-hover:bg-[#ffd700]/20 group-hover:border-[#ffd700]/40 transition-all">
                  #{String(coordinator.id).padStart(2, '0')}
                </div>

                <div className="flex flex-col items-center text-center">
                  {/* Profile Photo */}
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-[-8px] bg-gradient-to-tr from-[#b11217] via-[#ffd700] to-[#b11217] rounded-full opacity-30 blur-md group-hover:opacity-60 transition-opacity" />
                    <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-[#b11217] via-[#ffd700] to-[#b11217]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1c] flex items-center justify-center">
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
                        <User className="w-10 h-10 text-[#ffd700]/50 absolute" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <h4 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffd700] transition-colors tracking-tight">
                      {coordinator.name}
                    </h4>
                    
                    <div className="space-y-3">
                      <a 
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center justify-center gap-2 text-sm text-zinc-400 hover:text-[#ffd700] transition-colors bg-white/5 py-2 rounded-lg border border-white/5 hover:border-[#ffd700]/30"
                      >
                        <Phone className="w-4 h-4 text-[#b11217]" />
                        <span className="font-bold tracking-wider">{coordinator.phone}</span>
                      </a>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/5">
                          <Briefcase className="w-4 h-4 text-[#b11217]" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Committee</span>
                          <span className="text-[11px] font-bold text-zinc-300 uppercase leading-tight">{coordinator.committee}</span>
                        </div>
                        
                        <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/5">
                          <GraduationCap className="w-4 h-4 text-[#b11217]" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Department</span>
                          <span className="text-[11px] font-bold text-zinc-300 uppercase leading-tight">{coordinator.dept}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ffd700]/10 group-hover:border-[#ffd700]/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ffd700]/10 group-hover:border-[#ffd700]/40 transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCoordinators.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-zinc-500"
          >
            No coordinators found matching your search.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Team;
