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
        className="bg-white border border-[#e5e5e5] rounded-[10px] p-8 shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition duration-300 flex flex-col h-full relative overflow-hidden"
      >
        <div className="flex-1 relative z-10">
          <span className="text-[10px] uppercase tracking-widest font-bold bg-[#d60000] text-white px-3 py-1 rounded-full">
            {event.category === 'spot' ? 'Spot Event' : 'Cultural'}
          </span>
          <h3 className="text-2xl font-semibold mt-6 mb-4 text-[#222222]">
            {event.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {event.description}
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-8 w-full py-3 bg-[#d60000] text-white hover:bg-[#b30000] font-bold uppercase tracking-widest rounded-[6px] transition-all"
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
              className="relative w-full max-w-lg bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 text-[#222] hover:text-[#d60000] transition-colors"
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
                      {event.name}
                    </h2>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Coordinator Cards */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d60000] mb-4">
                      Event Coordinators
                    </h4>
                    
                    {event.coordinators.map((coordinator, index) => (
                      <div key={index} className="bg-white border border-[#e5e5e5] rounded-[10px] p-6 relative overflow-hidden group shadow-sm">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#d60000]" />
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="w-16 h-16 rounded-full p-[2px] bg-[#d60000] shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center relative">
                              <User className="w-8 h-8 text-gray-400 absolute" />
                            </div>
                          </div>
                          
                          <div className="flex-1 text-center sm:text-left">
                            <div className="text-xl font-bold text-[#222] uppercase tracking-tight">
                              {coordinator.name}
                            </div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                              Dept: {coordinator.dept}
                            </div>
                          </div>

                          <a 
                            href={`tel:${coordinator.phone}`}
                            className="flex items-center gap-2 bg-[#d60000] text-white px-4 py-2 rounded-lg font-black text-xs uppercase hover:bg-[#b30000] transition-colors w-full sm:w-auto justify-center"
                          >
                            <Phone className="w-4 h-4" />
                            Call Now
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a 
                    href="#register"
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center justify-center gap-3 w-full py-3 bg-[#d60000] text-white font-black uppercase tracking-[0.2em] rounded-[6px] hover:bg-[#b30000] transition-all transform hover:-translate-y-1"
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
