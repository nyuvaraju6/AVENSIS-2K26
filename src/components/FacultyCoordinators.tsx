import React from 'react';
import { motion } from 'motion/react';

const facultyMembers = [
  { name: 'G. Chinnayya', dept: 'B&SH' },
  { name: 'Mr. Applaraju', dept: 'MCA' },
  { name: 'Mr. V. Pradeep Kumar', dept: 'MECH' },
  { name: 'Mrs. Sangeetha', dept: 'CSM' },
  { name: 'Dr. Rushi Naidu', dept: 'Pharmacy' },
  { name: 'Mr. K. Satyanarayana', dept: 'Degree' },
  { name: 'Mr. S. Kesava Rao', dept: 'CSE' },
  { name: 'Mrs. Soujanya', dept: 'ECE' },
  { name: 'Mr. Suman Datta', dept: 'MBA' },
  { name: 'Mr. K. A. Swamy', dept: 'Diploma' },
  { name: 'Mr. G. Prasanth', dept: 'EEE' },
];

const FacultyCoordinators = () => {
  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#d60000] mb-4"
          >
            FACULTY COORDINATORS
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#d60000] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl border-l-4 border-l-[#d60000] shadow-sm transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <span className="text-lg font-bold text-gray-900">{member.name}</span>
                <span className="mx-2 text-gray-400">—</span>
                <span className="text-[#d60000] font-medium">{member.dept}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyCoordinators;
