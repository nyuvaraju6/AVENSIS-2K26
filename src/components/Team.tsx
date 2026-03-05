import React from 'react';
import { motion } from 'motion/react';
import { 
  OVERALL_COORDINATORS, 
  CHIEF_PATRONS, 
  CO_PATRONS, 
  CONVENORS, 
  CO_CONVENORS, 
  FACULTY_COORDINATORS,
  LeadershipProfile,
  OverallCoordinator
} from '../data/events';

interface TeamSectionProps {
  title: string;
  subtitle?: string;
  members: (LeadershipProfile | OverallCoordinator)[];
  id?: string;
}

const TeamCard = ({ member }: { member: LeadershipProfile | OverallCoordinator }) => {
  const isOverallCoordinator = 'phone' in member;
  const role = isOverallCoordinator ? (member as OverallCoordinator).committee : (member as LeadershipProfile).role;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -15,
        rotateX: 5,
        rotateY: 5,
        scale: 1.03,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative bg-white p-8 rounded-[10px] text-center border-t border-r border-b border-[#e5e5e5] border-l-4 border-l-[#d60000] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      {/* Profile Photo */}
      <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center shrink-0">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-600 bg-white shadow-md flex items-center justify-center shrink-0">
          <img
            src={member.image || "/default-avatar.png"}
            alt={member.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/default-avatar.png";
            }}
          />
        </div>
      </div>

      {/* Member Info */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#222] uppercase tracking-tight">
            {member.name}
          </h3>
          
          <div className="text-[#d60000] font-bold text-sm uppercase tracking-wider mb-2">
            {role}
          </div>
        </div>
        
        <div className="space-y-2 mt-2">
          {isOverallCoordinator && (member as OverallCoordinator).phone && (
            <a 
              href={`tel:${(member as OverallCoordinator).phone}`}
              className="block text-gray-700 hover:text-[#d60000] transition-colors font-bold tracking-widest"
            >
              📞 {(member as OverallCoordinator).phone}
            </a>
          )}
          
          <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            {member.dept}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = ({ title, subtitle, members, id }: TeamSectionProps) => (
  <div id={id} className="mb-24 last:mb-0 scroll-mt-24">
    <div className="text-center mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#d60000] font-bold text-[32px] text-center mb-4 uppercase"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg italic tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <TeamSection 
          id="patrons"
          title="CHIEF PATRONS" 
          members={CHIEF_PATRONS} 
        />

        <TeamSection 
          title="CO-PATRONS" 
          members={CO_PATRONS} 
        />

        <TeamSection 
          id="convenors"
          title="CONVENORS" 
          members={CONVENORS} 
        />

        <TeamSection 
          title="CO-CONVENORS" 
          members={CO_CONVENORS} 
        />

        <TeamSection 
          id="faculty"
          title="FACULTY COORDINATORS" 
          members={FACULTY_COORDINATORS} 
        />

        <TeamSection 
          title="STUDENT OVERALL CO-ORDINATORS" 
          subtitle='"The visionaries orchestrating the grand symphony of Avensis 2K26."'
          members={OVERALL_COORDINATORS} 
        />

      </div>
    </section>
  );
};

export default Team;
