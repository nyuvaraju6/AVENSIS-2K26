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
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20 bg-[#0B0B0B]">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-20 bg-[#0B0B0B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.15),transparent_70%)] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="perspective-1000">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFF3B0] to-[#FFD700] animate-shimmer uppercase">
              AVENSIS 2K26
            </h1>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 font-medium tracking-wide"
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
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,215,0,0.3)] px-8 py-6 rounded-xl min-w-[130px] relative overflow-hidden transition-all duration-300 hover:border-[#FFD700] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                <span className="block text-5xl font-black text-[#FFD700] mb-1 tracking-tighter">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 relative">
          <motion.a
            href="https://forms.gle/ojHDFHX2B11yG1i46"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.4)", y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 rounded-full font-bold tracking-widest bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-black transition-all duration-300 uppercase"
          >
            Register Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
