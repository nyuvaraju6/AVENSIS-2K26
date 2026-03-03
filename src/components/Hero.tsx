import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import GalaxyBackground from './GalaxyBackground';
import LightningEffect from './LightningEffect';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 120,
    particles: {
      number: { value: 60 },
      size: { value: 2 },
      move: { enable: true, speed: 0.5 },
      opacity: { value: 0.5 },
      color: { value: "#facc15" },
      links: {
        enable: true,
        color: "#facc15",
        distance: 150,
        opacity: 0.2
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isShaking, setIsShaking] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Cinematic Concert Background Image URL
  const heroBgImage = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sync shaking with lightning flashes (simulated here for simplicity)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const handleAssembleClick = (e: React.MouseEvent) => {
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  return (
    <section id="home" className={`relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20 transition-transform duration-100 ${isShaking ? 'animate-shake' : ''}`}>
      {/* Cinematic Background Image with Parallax/Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url('${heroBgImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.6) blur(1px)'
        }}
      />

      {/* Dark Red-Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#b11217]/40 to-black/90 -z-10 backdrop-blur-[1px]" />

      <ParticlesBackground />
      <LightningEffect />
      
      {/* Subtle Red Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(177,18,23,0.25),transparent_70%)] -z-10"></div>

      {/* Mouse-Following Blue Energy Pulse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent)"
        }}
      />

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500 opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-wider mb-6 animate-spin-slow bg-gradient-to-b from-[#ffd700] via-[#f5c542] to-[#b11217] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)] relative">
              AVENSIS 2K26
              {/* Shine Overlay */}
              <span className="absolute inset-0 animate-shine pointer-events-none bg-clip-text text-transparent opacity-50">
                AVENSIS 2K26
              </span>
            </h1>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-medium italic tracking-wide"
        >
          "A Two Day National level Youth Fest Awakens"
        </motion.p>

        {/* HUD Styled Countdown */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg mb-16 relative">
          {/* HUD Decorative Lines */}
          <div className="absolute -inset-4 border-t border-b border-[#ffd700]/20 pointer-events-none" />
          
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-gradient-to-b from-[#1c1f2b] to-[#111318] border border-[#b11217]/40 px-8 py-6 rounded-sm shadow-2xl shadow-red-900/20 min-w-[130px] relative overflow-hidden">
                {/* HUD Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ffd700]" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ffd700]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ffd700]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ffd700]" />
                
                <span className="block text-5xl font-black text-[#ffd700] mb-1 font-mono tracking-tighter">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-[#cfd2d6] text-[10px] uppercase tracking-[0.3em] font-bold">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 relative">
          <motion.button
            onClick={handleAssembleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full font-black tracking-[0.2em] bg-gradient-to-r from-[#b11217] to-[#ffd700] text-black shadow-[0_0_30px_rgba(177,18,23,0.4)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">ASSEMBLE & REGISTER</span>
            {/* Button Shine Sweep */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none" />
          </motion.button>
        </div>

        {/* Particle Explosion Container */}
        <AnimatePresence>
          {particles.map(p => (
            <motion.div
              key={p.id}
              initial={{ x: p.x, y: p.y, scale: 1, opacity: 1 }}
              animate={{ 
                x: p.x + (Math.random() - 0.5) * 400, 
                y: p.y + (Math.random() - 0.5) * 400,
                scale: 0,
                opacity: 0 
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="fixed w-3 h-3 bg-[#ffd700] rounded-full z-[100] pointer-events-none blur-[1px]"
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
