import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Step 0: Black screen (initial)
      await new Promise(r => setTimeout(r, 1000));
      
      // Step 1: "A Storm is Rising..."
      setStep(1);
      await new Promise(r => setTimeout(r, 2500));
      
      // Step 2: Lightning Flash + AVENSIS Logo
      setStep(2);
      await new Promise(r => setTimeout(r, 2000));
      
      // Step 3: Transition to Home
      onComplete();
    };

    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="text1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#b11217] tracking-[0.3em] uppercase italic">
              A Storm is Rising...
            </h2>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            {/* Lightning Flash Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 0.8, 0] }}
              transition={{ duration: 0.4, times: [0, 0.1, 0.2, 0.3, 1] }}
              className="absolute inset-[-200%] bg-white z-[-1] blur-3xl"
            />
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-[#ffd700] via-[#f5c542] to-[#b11217] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              AVENSIS
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-[#ffd700] mt-4 shadow-[0_0_15px_#ffd700]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CinematicIntro;
