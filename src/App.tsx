import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventsSection from './components/EventsSection';
import Schedule from './components/Schedule';
import SpecialAttractions from './components/SpecialAttractions';
import Registration from './components/Registration';
import Team from './components/Team';
import Location from './components/Location';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import CinematicIntro from './components/CinematicIntro';
import Admin from './components/Admin';

const RevealSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.section>
);

const Home = () => (
  <main>
    <Hero />
    <RevealSection>
      <About />
    </RevealSection>
    <RevealSection>
      <EventsSection />
    </RevealSection>
    <RevealSection>
      <Schedule />
    </RevealSection>
    <RevealSection>
      <SpecialAttractions />
    </RevealSection>
    <RevealSection>
      <Registration />
    </RevealSection>
    <RevealSection>
      <Team />
    </RevealSection>
    <RevealSection>
      <Location />
    </RevealSection>
  </main>
);

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  useEffect(() => {
    const startMusic = () => {
      if (!started && audioRef.current && !showIntro && !isAdmin) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
        setStarted(true);
      }
    };

    window.addEventListener("click", startMusic);
    return () => window.removeEventListener("click", startMusic);
  }, [started, showIntro, isAdmin]);

  useEffect(() => {
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime && audioRef.current) {
      audioRef.current.currentTime = parseFloat(savedTime);
    }

    const interval = setInterval(() => {
      if (audioRef.current && !audioRef.current.paused) {
        localStorage.setItem("musicTime", audioRef.current.currentTime.toString());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1a1f2e,#0a0f1c_60%)] text-white selection:bg-[#ffd700] selection:text-black overflow-x-hidden">
      <AnimatePresence>
        {showIntro && !isAdmin && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
        preload="auto"
      />
      
      {(isAdmin || !showIntro) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <CursorGlow />
          {!isAdmin && (
            <div className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-b border-gray-200 relative z-[60]">
              <img
                src="https://drive.google.com/uc?export=view&id=1qwqfPIdUacuuonzyjBNXA6MPAwLcGsoA"
                alt="Avanthi Group of Colleges"
                className="w-full h-auto object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          )}
          {!isAdmin && <Navbar />}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          {!isAdmin && <Footer />}
        </motion.div>
      )}
    </div>
  );
}
