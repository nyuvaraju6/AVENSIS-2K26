import React, { useState } from 'react';
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
import Convenors from "./components/Convenors";
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
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1a1f2e,#0a0f1c_60%)] text-white selection:bg-[#ffd700] selection:text-black overflow-x-hidden">
      <AnimatePresence>
        {showIntro && !isAdmin && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {(isAdmin || !showIntro) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`relative ${!isAdmin ? 'pt-[80px]' : ''}`}
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
