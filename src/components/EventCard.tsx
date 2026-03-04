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
        whileHover={{ scale: 1.08, rotateX: 5, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        viewport={{ once: true }}
        className="group bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-8 hover:border-[#ffd700] transition duration-300 flex flex-col h-full perspective-1000 relative overflow-hidden"
      >
        {/* Light Sweep Animation */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none" />
        
        <div className="flex-1 relative z-10">
          <span className="text-[10px] uppercase tracking-widest font-bold bg-[#ffd700] text-black px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.3)]">
            {event.category === 'spot' ? 'Spot Event' : 'Cultural'}
          </span>
          <h3 className="text-2xl font-semibold mt-6 mb-4 text-white">
            {event.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {event.description}
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-8 w-full py-3 text-yellow-400 border border-yellow-400/20 hover:bg-yellow-400 hover:text-black font-bold uppercase tracking-widest rounded-xl transition-all"
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
              className="relative w-full max-w-lg bg-[#0a0f1c] border border-[#ffd700]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.2)]"
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
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

                  {/* Coordinator Card */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#ffd700]" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffd700] mb-4">
                      Event Coordinator
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#b11217] via-[#ffd700] to-[#b11217] shrink-0">
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1c] flex items-center justify-center relative">
                          {event.coordinatorPhoto ? (
                            <img 
                              src={event.coordinatorPhoto} 
                              alt={event.coordinator}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '';
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          ) : null}
                          <User className="w-8 h-8 text-[#ffd700]/50 absolute" />
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left">
                        <div className="text-xl font-bold text-white uppercase tracking-tight">
                          {event.coordinator}
                        </div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                          Dept: {event.coordinatorDept || 'CSE'}
                        </div>
                      </div>

                      <a 
                        href={`tel:${event.contact}`}
                        className="flex items-center gap-2 bg-[#ffd700] text-black px-4 py-2 rounded-lg font-black text-xs uppercase hover:bg-white transition-colors w-full sm:w-auto justify-center"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a 
                    href="#register"
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#b11217] to-[#ffd700] text-white font-black uppercase tracking-[0.2em] rounded-xl shadow-[0_10px_20px_rgba(177,18,23,0.3)] hover:shadow-[0_15px_30px_rgba(255,215,0,0.4)] transition-all transform hover:-translate-y-1"
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
