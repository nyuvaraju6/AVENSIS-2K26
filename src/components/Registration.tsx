import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SPOT_EVENTS, CULTURAL_EVENTS } from '../data/events';
import jsPDF from 'jspdf';

const Registration = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    mobile: '',
    email: '',
    year: '',
    department: 'BTECH',
    branch: 'NONE',
    section: 'A',
    selectedEvents: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Mapping of Google Form entry IDs to state keys
    const mapping: { [key: string]: string } = {
      'entry.2006313935': 'fullName',
      'entry.1503436084': 'rollNumber',
      'entry.2055757344': 'mobile',
      'entry.1654106422': 'email',
      'entry.835340413': 'year',
      'entry.1512251756': 'department',
      'entry.1115180722': 'branch',
    };
    
    const key = mapping[name] || name;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleEventToggle = (eventName: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedEvents.includes(eventName);
      if (isSelected) {
        return { ...prev, selectedEvents: prev.selectedEvents.filter(e => e !== eventName) };
      } else {
        return { ...prev, selectedEvents: [...prev.selectedEvents, eventName] };
      }
    });
  };

  const generateReceipt = () => {
    const doc = new jsPDF();

    // ===== RED HEADER BACKGROUND =====
    doc.setFillColor(177, 18, 23); // deep fest red
    doc.rect(0, 0, 210, 50, "F"); // full width header

    // College Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("AVANTHI COLLEGES", 105, 15, { align: "center" });

    // Fest Title
    doc.setFontSize(26);
    doc.setTextColor(255, 204, 21); // metallic gold
    doc.text("AVENSIS 2K26", 105, 30, { align: "center" });

    // Subtitle
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("REGISTRATION CONFIRMATION", 105, 42, { align: "center" });

    // Reset text color for body
    doc.setTextColor(0, 0, 0);

    // Event Dates
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Event Dates: 13-03-2026 to 14-03-2026", 105, 58, { align: "center" });

    // Content
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Student Details", 20, 70);
    doc.line(20, 72, 190, 72);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${formData.fullName}`, 20, 85);
    doc.text(`Roll Number: ${formData.rollNumber}`, 20, 95);
    doc.text(`Department: ${formData.department}`, 20, 105);
    doc.text(`Branch: ${formData.branch}`, 20, 115);
    doc.text(`Section: ${formData.section}`, 20, 125);
    doc.text(`Year: ${formData.year}`, 20, 135);

    // Highlighted Reference
    doc.setFontSize(16);
    doc.setTextColor(220, 38, 38); // Red
    doc.setFont('helvetica', 'bold');
    doc.text(`Reference: ${formData.rollNumber}`, 20, 150);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Selected Events", 20, 175);
    doc.line(20, 177, 190, 177);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const eventsText = formData.selectedEvents.length > 0 ? formData.selectedEvents.join(", ") : "No events selected";
    const splitEvents = doc.splitTextToSize(eventsText, 170);
    doc.text(splitEvents, 20, 185);

    // Professional Timestamp Highlight
    const formattedDate = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    doc.setFillColor(0, 0, 0);
    doc.rect(20, 210, 170, 18, "F");

    doc.setTextColor(255, 204, 21);
    doc.setFontSize(13);
    doc.text(
      `Generated on: ${formattedDate}`,
      105,
      222,
      { align: "center" }
    );

    // Footer
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 250, 190, 250);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Official Registration Receipt - AVENSIS 2K26", 105, 265, { align: 'center' });
    doc.text("Please present this receipt at the venue for verification.", 105, 272, { align: 'center' });
    doc.text("Follow us: @avanthitagarapuvalasa.official", 105, 279, { align: "center" });

    doc.save(`AVENSIS_Registration_${formData.rollNumber}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdZUwKJ0vKNE012nZiA9O0_S1nhoTM_y-kueXJw5eaRBntZaw/formResponse";

    const formData = new FormData(e.currentTarget);

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });

    setShowSuccessPopup(true);
    generateReceipt();
  };

  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[40px] text-center mb-4 uppercase tracking-wider"
          >
            Register for AVENSIS 2K26
          </motion.h2>
          <p className="text-gray-600">
            Join the celebration! Fill out the form below to secure your spot in the most awaited fest of the year.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-xl border-l-4 border-l-[#d60000] shadow-md space-y-8"
        >
          {showSuccessPopup && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
              <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center space-y-4">
                <div className="text-[#d60000] flex justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Registration Successful</h3>
                <p className="text-gray-600">Your response has been recorded.</p>
                <button
                  onClick={() => {
                    generateReceipt();
                    setShowSuccessPopup(false);
                    setFormData({
                      fullName: '',
                      rollNumber: '',
                      mobile: '',
                      email: '',
                      year: '',
                      department: 'BTECH',
                      branch: 'NONE',
                      section: 'A',
                      selectedEvents: [] as string[]
                    });
                  }}
                  className="w-full py-3 bg-[#d60000] text-white font-bold rounded-xl hover:bg-[#b80000] transition-colors"
                >
                  Download your receipt
                </button>
              </div>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Full Name</label>
              <input
                required
                type="text"
                name="entry.2006313935"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Roll Number */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Roll Number</label>
              <input
                required
                type="text"
                name="entry.1503436084"
                value={formData.rollNumber}
                onChange={handleInputChange}
                placeholder="Enter your roll number"
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Mobile Number</label>
              <input
                required
                type="tel"
                name="entry.2055757344"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Email ID */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Email ID</label>
              <input
                required
                type="email"
                name="entry.1654106422"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Year of Study */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Year of Study</label>
              <select 
                required
                name="entry.835340413"
                value={formData.year}
                onChange={handleInputChange}
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Year</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
              </select>
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Department</label>
              <select 
                name="entry.1512251756"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="BTECH">BTECH</option>
                <option value="DIPLOMA">DIPLOMA</option>
                <option value="PHARMACY">PHARMACY</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="DEGREE">DEGREE</option>
              </select>
            </div>

            {/* Branch */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Branch</label>
              <select 
                name="entry.1115180722"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="NONE">NONE</option>
                <option value="CSE">CSE</option>
                <option value="CSM">CSM</option>
                <option value="CSD">CSD</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                <option value="B PHARMA">B PHARMA</option>
                <option value="PHARMA-D">PHARMA-D</option>
              </select>
            </div>

            {/* Section */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Section</label>
              <select 
                name="section"
                value={formData.section}
                onChange={handleInputChange}
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#d60000] outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>

          {/* Events Selection */}
          <div className="space-y-6">
            <label className="block text-sm font-bold text-[#d60000] uppercase tracking-widest">Select Events</label>

            <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
              {/* Spot Events */}
              <div className="space-y-4">
                <h3 className="text-[#d60000] font-bold text-sm uppercase tracking-widest border-b border-gray-200 pb-2">Spot Events</h3>
                <div className="space-y-3">
                  {SPOT_EVENTS.map((event) => (
                    <label key={event.id} className="flex items-center gap-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          name="entry.945003127"
                          value={event.name}
                          checked={formData.selectedEvents.includes(event.name)}
                          onChange={() => handleEventToggle(event.name)}
                          className="peer w-5 h-5 appearance-none border border-gray-300 rounded bg-white checked:bg-[#d60000] checked:border-[#d60000] transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-[#d60000] transition-colors text-sm">{event.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cultural Events */}
              <div className="space-y-4">
                <h3 className="text-[#d60000] font-bold text-sm uppercase tracking-widest border-b border-gray-200 pb-2">Cultural Events</h3>
                <div className="space-y-3">
                  {CULTURAL_EVENTS.map((event) => (
                    <label key={event.id} className="flex items-center gap-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          name="entry.850313794"
                          value={event.name}
                          checked={formData.selectedEvents.includes(event.name)}
                          onChange={() => handleEventToggle(event.name)}
                          className="peer w-5 h-5 appearance-none border border-gray-300 rounded bg-white checked:bg-[#d60000] checked:border-[#d60000] transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-[#d60000] transition-colors text-sm">{event.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="submit"
              className="px-12 py-4 bg-[#d60000] hover:bg-[#b80000] text-white font-bold uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Submit Registration
            </button>
            <p className="mt-4 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
              By submitting, you agree to the fest guidelines and code of conduct.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
