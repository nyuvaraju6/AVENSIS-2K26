import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400">
          About AVENSIS
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          AVENSIS 2K26 is not just a fest — it is a battlefield of talent,
          creativity, innovation and celebration. From cultural performances
          to high-energy expos and electrifying nights, witness the rise of
          campus legends.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
