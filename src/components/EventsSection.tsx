import React from 'react';
import { motion } from 'motion/react';
import EventCard from './EventCard';
import { SPOT_EVENTS, CULTURAL_EVENTS } from '../data/events';

const EventsSection = () => {
  return (
    <div id="events" className="space-y-32 py-24">
      {/* Spot Events */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-yellow-400 mb-4 tracking-tight"
          >
            Spot Events
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
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
            className="text-4xl md:text-5xl font-black text-yellow-400 mb-4 tracking-tight"
          >
            Cultural Events
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
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
