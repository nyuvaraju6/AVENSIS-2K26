import React from 'react';
import { motion } from 'motion/react';

const chiefPatrons = [
  {
    name: "Sri M. Srinivasa Rao",
    designations: ["Former State Minister – AP", "Founder Chairman, Avanthi Group of Colleges"]
  },
  {
    name: "Smt. M. Gnaneswari",
    designations: ["President, Avanthi Educational Society"]
  }
];

const coPatrons = [
  {
    name: "Dr. B. Murali Krishna",
    designations: ["Principal, AIET"]
  },
  {
    name: "Dr. A. Chandra Sekhar",
    designations: ["Director – HR"]
  },
  {
    name: "Dr. K. Purna Nagasree",
    designations: ["Principal, AIPS"]
  },
  {
    name: "Mr. P. Rama Krishna",
    designations: ["Principal, Avanthi Degree College"]
  },
  {
    name: "Mr. B. Jagadeeshwar Rao",
    designations: ["I/C Principal, Polytechnic College"]
  }
];

const PatronCard = ({ name, designations, delay }: { name: string, designations: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white border-l-4 border-l-[#d60000] border-y border-r border-gray-200 rounded-r-[10px] p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center h-full"
  >
    <h4 className="text-lg font-bold text-[#222222] mb-2">
      {name}
    </h4>
    <div className="space-y-1">
      {designations.map((role, rIndex) => (
        <p key={rIndex} className="text-gray-600 text-xs font-medium leading-tight">
          {role}
        </p>
      ))}
    </div>
  </motion.div>
);

const Patrons = () => {
  return (
    <section id="patrons" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[40px] uppercase tracking-wider mb-4"
          >
            PATRONS
          </motion.h2>
          <div className="w-24 h-1 bg-[#d60000] mx-auto rounded-full"></div>
        </div>

        {/* Chief Patrons Subsection */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#d60000] mb-8 text-center uppercase tracking-wide"
          >
            CHIEF PATRONS
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {chiefPatrons.map((patron, index) => (
              <PatronCard 
                key={index} 
                name={patron.name} 
                designations={patron.designations} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>

        {/* Co-Patrons Subsection */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#d60000] mb-8 text-center uppercase tracking-wide"
          >
            CO-PATRONS
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coPatrons.map((patron, index) => (
              <PatronCard 
                key={index} 
                name={patron.name} 
                designations={patron.designations} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patrons;
