import React from 'react';
import { motion } from 'motion/react';
import { Phone, User, Trophy, CreditCard } from 'lucide-react';
import { Event } from '../data/events';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
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
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {event.description}
        </p>
      </div>

      <button className="mt-8 w-full py-3 text-yellow-400 border border-yellow-400/20 hover:bg-yellow-400 hover:text-black font-bold uppercase tracking-widest rounded-xl transition-all">
        Learn More
      </button>
    </motion.div>
  );
};

export default EventCard;
