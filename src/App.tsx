import React from 'react';
import { motion } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EventsSection from './components/EventsSection';
import Schedule from './components/Schedule';
import Team from './components/Team';
import Location from './components/Location';
import Footer from './components/Footer';
import Admin from './components/Admin';
import ScrollToTop from './components/ScrollToTop';

const RevealSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    className="w-full bg-[#0B0B0B]"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.section>
);

const Home = () => (
  <main className="bg-[#0B0B0B]">
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
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#FFD700] selection:text-black overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {!isAdmin && <Header />}
        {!isAdmin && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        {!isAdmin && <Footer />}
        <ScrollToTop />
      </motion.div>
    </div>
  );
}
