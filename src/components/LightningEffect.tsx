import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LightningEffect = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerFlash = () => {
      setFlash(true);
      setTimeout(() => setFlash(false), 150);
      // Double flash effect
      setTimeout(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 100);
      }, 250);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        triggerFlash();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-[60] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};

export default LightningEffect;
