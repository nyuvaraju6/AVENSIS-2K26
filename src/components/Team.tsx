import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/events';

const Team = () => {
  return (
    <section id="team" className="py-32 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(177,18,23,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-[#ffd700] via-[#f5c542] to-[#b11217] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            CORE COMMITTEE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#cfd2d6] max-w-2xl mx-auto text-lg italic tracking-wide"
          >
            "The heroes behind the scenes, awakening the ultimate youth fest."
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
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
              className="group relative bg-gradient-to-br from-[#111827] to-[#0a0f1c] p-8 rounded-[20px] text-center border border-[#b11217]/30 backdrop-blur-md shadow-[0_0_30px_rgba(177,18,23,0.15)] hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:border-[#ffd700]/50 transition-all duration-500 perspective-1000 overflow-hidden"
            >
              {/* Light Sweep Shine Animation */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none" />

              {/* Image Wrapper with Red Aura and Gold Border */}
              <div className="relative w-36 h-36 mx-auto mb-8">
                {/* Red Aura Glow */}
                <div className="absolute inset-[-15px] bg-[#b11217] rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
                
                <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-tr from-[#b11217] via-[#ffd700] to-[#b11217] shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_35px_rgba(255,215,0,0.6)] transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1c]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-black mb-2 tracking-tight bg-gradient-to-b from-[#ffd700] to-[#f5c542] bg-clip-text text-transparent">
                {member.name}
              </h3>
              
              <div className="space-y-1">
                <p className="text-[#cfd2d6] text-sm font-bold uppercase tracking-[0.15em]">
                  {member.role}
                </p>
                <p className="text-[#b11217] text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                  {member.dept}
                </p>
              </div>

              {/* Decorative Corner Accents (HUD style) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ffd700]/20 group-hover:border-[#ffd700]/60 transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ffd700]/20 group-hover:border-[#ffd700]/60 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
