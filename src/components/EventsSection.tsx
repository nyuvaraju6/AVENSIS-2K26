import React from 'react';
import { motion } from 'motion/react';
import EventCard from './EventCard';
import { SPOT_EVENTS, CULTURAL_EVENTS } from '../data/events';

const EventsSection = () => {
  return (
    <div id="events" className="space-y-32 py-24 bg-[#0B0B0B]">
      {/* Spot Events */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107] font-bold text-[32px] text-center mb-4 uppercase tracking-widest"
          >
            Spot Events
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience high-energy participation and showcase your skills in our exciting spot competitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPOT_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Cultural Events */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107] font-bold text-[32px] text-center mb-4 uppercase tracking-widest"
          >
            Cultural Events
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Celebrate creativity, performance and stage excellence with our grand cultural showcases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CULTURAL_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsSection;
