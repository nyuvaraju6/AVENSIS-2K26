import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, User, X, ExternalLink } from 'lucide-react';
import { Event } from '../data/events';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:scale-103 flex flex-col h-full relative overflow-hidden"
      >
        <div className="flex-1 relative z-10">
          <span className="text-[10px] uppercase tracking-widest font-bold bg-[#FFD700] text-black px-3 py-1 rounded-full">
            {event.category === 'spot' ? 'Spot Event' : 'Cultural'}
          </span>
          <h3 className="text-2xl font-semibold mt-6 mb-4 text-[#FFD700]">
            {event.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {event.description}
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-8 w-full py-3 bg-[#FFD700] text-black hover:bg-[#FFC107] font-bold uppercase tracking-widest rounded-lg transition-all"
        >
          Learn More
        </button>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#111] border border-[#ffd700]/20 rounded-[10px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:text-[#ffd700] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col">
                {/* Banner */}
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={event.banner || `https://picsum.photos/seed/${event.id}/800/400`} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
                      {event.name}
                    </h2>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <p className="text-gray-300 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Coordinator Cards */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700] mb-4">
                      Student Coordinators
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.coordinators.map((coordinator, index) => (
                        <div key={index} className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 shadow-md relative overflow-hidden group">
                          <div className="flex flex-col items-center text-center gap-2">
                            <div className="w-12 h-12 rounded-full border-2 border-[#FFD700] shrink-0 flex items-center justify-center bg-[#0B0B0B]">
                              <User className="w-6 h-6 text-gray-400" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="text-sm font-bold text-white uppercase tracking-tight">
                                {coordinator.name}
                              </div>
                              <div className="text-xs text-[#FFD700] font-bold uppercase tracking-widest mt-1">
                                Dept: {coordinator.dept}
                              </div>
                            </div>

                            <a 
                              href={`tel:${coordinator.phone}`}
                              className="flex items-center gap-2 bg-[#FFD700] text-black px-3 py-1.5 rounded-lg font-black text-[10px] uppercase hover:bg-[#FFC107] transition-colors w-full justify-center mt-2"
                            >
                              <Phone className="w-3 h-3" />
                              {coordinator.phone}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a 
                    href="https://forms.gle/ojHDFHX2B11yG1i46"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center justify-center gap-3 w-full py-3 bg-[#FFD700] text-black font-black uppercase tracking-[0.2em] rounded-lg hover:bg-[#FFC107] transition-all transform hover:-translate-y-1 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                  >
                    Register Now
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventCard;
