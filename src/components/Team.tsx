import React from 'react';
import { motion } from 'motion/react';
import { OVERALL_COORDINATORS } from '../data/events';
import { Phone, User, Briefcase, GraduationCap } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Overall Coordinators Section */}
        <div className="text-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                className="group relative bg-white p-8 rounded-[10px] text-center border-t border-r border-b border-[#e5e5e5] border-l-4 border-l-[#d60000] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden"
              >
                {/* Profile Photo */}
                <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-600 bg-white shadow-md flex items-center justify-center shrink-0">
                    <img
                      src={coordinator.image || "/default-avatar.png"}
                      alt={coordinator.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/default-avatar.png";
                      }}
                    />
                  </div>
                </div>

                {/* Coordinator Info */}
                <h3 className="text-xl font-bold mb-2 text-[#222] uppercase tracking-tight">
                  {coordinator.name}
                </h3>
                
                <div className="space-y-2">
                  <a 
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#d60000] transition-colors font-bold tracking-widest"
                  >
                    📞 {coordinator.phone}
                  </a>
                  
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
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
