import React from 'react';
import { motion } from 'motion/react';
import { Shield, Database, ExternalLink, Users, Calendar, Trophy } from 'lucide-react';

const Admin = () => {
  // In a real app, this would be protected by authentication
  // For now, we'll embed the Google Sheet view as requested
  
  const googleSheetUrl = "https://docs.google.com/spreadsheets/d/1vA5W3zX-i1pS9S_Y-kueXJw5eaRBntZaw/edit?usp=sharing"; // Placeholder - user should replace with actual sheet URL

  return (
    <div className="min-h-screen bg-[#0a0f1c] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-yellow-400 mb-2"
            >
              <Shield className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Command Center</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight"
            >
              ADMIN <span className="text-yellow-400">DASHBOARD</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-4"
          >
            <a 
              href={googleSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition-all"
            >
              <Database className="w-5 h-5" />
              Open Google Sheet
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Registrations', value: '---', icon: Users, color: 'text-blue-400' },
            { label: 'Events Active', value: '13', icon: Calendar, color: 'text-yellow-400' },
            { label: 'Prize Pool', value: '---', icon: Trophy, color: 'text-emerald-400' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Live</span>
              </div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Embedded Sheet View */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm font-bold text-zinc-400 uppercase tracking-widest">Registration Database</span>
            </div>
          </div>
          <div className="aspect-video w-full bg-zinc-900/50 relative group">
            <iframe 
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS68-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8-G8/pubhtml?widget=true&amp;headers=false" 
              className="w-full h-full border-none grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              title="Registration Data"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <p className="mt-8 text-center text-zinc-600 text-[10px] uppercase font-bold tracking-[0.3em]">
          Authorized Personnel Only • AVENSIS 2K26 Security Protocol Active
        </p>
      </div>
    </div>
  );
};

export default Admin;
