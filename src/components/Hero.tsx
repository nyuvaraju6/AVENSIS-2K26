import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Cinematic Concert Background Image URL
  const heroBgImage = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920";

  useEffect(() => {
    const targetDate = new Date('2026-03-13T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20 bg-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 -z-20 opacity-10"
        style={{
          backgroundImage: `url('${heroBgImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10">
        <div className="perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-[#d60000] uppercase">
              AVENSIS 2K26
            </h1>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 font-medium tracking-wide"
        >
          A Two Day National level Youth Fest
        </motion.p>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg mb-16 relative">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white border border-[#e5e5e5] px-8 py-6 rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] min-w-[130px] relative overflow-hidden">
                <span className="block text-5xl font-black text-[#d60000] mb-1 tracking-tighter">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 relative">
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 rounded-[6px] font-bold tracking-widest bg-[#d60000] text-white hover:bg-[#b30000] transition-all duration-300 uppercase"
          >
            Register Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
