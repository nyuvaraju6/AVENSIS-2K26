import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventsSection from './components/EventsSection';
import Schedule from './components/Schedule';
import Convenors from './components/Convenors';
import SpecialAttractions from './components/SpecialAttractions';
import Registration from './components/Registration';
import Team from './components/Team';
import Location from './components/Location';
import Footer from './components/Footer';
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
      <Convenors />
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
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-white text-[#222222] selection:bg-[#d60000] selection:text-white overflow-x-hidden">
      <AnimatePresence>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`relative ${!isAdmin ? 'pt-[70px]' : ''}`}
      >
        {!isAdmin && (
          <div className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-b border-gray-200 relative z-[60]">
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
    </div>
  );
}
