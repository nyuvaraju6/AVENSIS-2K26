import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SPOT_EVENTS, CULTURAL_EVENTS } from '../data/events';
import jsPDF from 'jspdf';
import { Download, CheckCircle2, X } from 'lucide-react';

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    mobile: '',
    email: '',
    department: 'BTECH',
    branch: 'CSE',
    section: 'A',
    selectedEvents: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const downloadReceipt = () => {
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

    // Highlighted Reference
    doc.setFontSize(16);
    doc.setTextColor(220, 38, 38); // Red
    doc.setFont('helvetica', 'bold');
    doc.text(`Reference: ${formData.rollNumber}`, 20, 140);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Selected Events", 20, 165);
    doc.line(20, 167, 190, 167);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const eventsText = formData.selectedEvents.length > 0 ? formData.selectedEvents.join(", ") : "No events selected";
    const splitEvents = doc.splitTextToSize(eventsText, 170);
    doc.text(splitEvents, 20, 175);

    // Professional Timestamp Highlight
    const formattedDate = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    doc.setFillColor(0, 0, 0);
    doc.rect(20, 200, 170, 18, "F");

    doc.setTextColor(255, 204, 21);
    doc.setFontSize(13);
    doc.text(
      `Generated on: ${formattedDate}`,
      105,
      212,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.rollNumber.trim()) {
      alert("Roll Number is required.");
      return;
    }

    setIsSubmitting(true);

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdZUwKJ0vKNE012nZiA9O0_S1nhoTM_y-kueXJw5eaRBntZaw/formResponse";

    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = formURL;
    form.target = "hidden_iframe";

    const appendField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    appendField("entry.2006313935", formData.fullName);
    appendField("entry.1503436084", formData.rollNumber);
    appendField("entry.2055757344", formData.mobile);
    appendField("entry.1654106422", formData.email);
    appendField("entry.1512251756", formData.department);
    appendField("entry.1115180722", formData.branch);
    appendField("entry.1592132195", formData.section);

    formData.selectedEvents.forEach((event) => {
      if (
        [
          "Auto Expo",
          "Fashion Show",
          "Ramp Walk",
          "Treasure Hunt",
          "Meme Creation",
          "Spot Photography",
          "Reels Making",
          "E-Sports (BGMI/Free Fire)",
          "Body Building",
        ].includes(event)
      ) {
        appendField("entry.1996962031", event);
      } else {
        appendField("entry.538765734", event);
      }
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setShowSuccess(true);
    setIsSubmitting(false);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setFormData({
      fullName: "",
      rollNumber: "",
      mobile: "",
      email: "",
      department: "BTECH",
      branch: "CSE",
      section: "A",
      selectedEvents: [],
    });
  };

  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d60000] font-bold text-[32px] text-center mb-4 uppercase"
          >
            Register for AVENSIS 2K26
          </motion.h2>
          <p className="text-gray-600">
            Join the celebration! Fill out the form below to secure your spot in the most awaited fest of the year.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-[10px] border border-[#e5e5e5] space-y-8 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Full Name</label>
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-4 rounded-[6px] bg-white border border-[#ccc] text-[#222] focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Roll Number */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Roll Number</label>
              <input
                required
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                placeholder="Enter your roll number"
                className="w-full p-4 rounded-[6px] bg-white border border-[#ccc] text-[#222] focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Mobile Number</label>
              <input
                required
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full p-4 rounded-[6px] bg-white border border-[#ccc] text-[#222] focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Email ID */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Email ID</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full p-4 rounded-[6px] bg-white border border-[#ccc] text-[#222] focus:border-[#d60000] focus:ring-1 focus:ring-[#d60000] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Department</label>
              <select 
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full p-4 rounded-[6px] bg-white border border-[#ccc] text-[#222] focus:border-[#d60000] outline-none transition-all appearance-none cursor-pointer"
              >
                <option className="bg-white text-[#222]" value="BTECH">BTECH</option>
                <option className="bg-white text-[#222]" value="DIPLOMA">DIPLOMA</option>
                <option className="bg-white text-[#222]" value="PHARMACY">PHARMACY</option>
                <option className="bg-white text-[#222]" value="MCA">MCA</option>
                <option className="bg-white text-[#222]" value="MBA">MBA</option>
                <option className="bg-white text-[#222]" value="DEGREE">DEGREE</option>
              </select>
            </div>

            {/* Branch */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Branch</label>
              <select 
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full p-4 rounded-[6px] bg-white border border-[#ccc] text-[#222] focus:border-[#d60000] outline-none transition-all appearance-none cursor-pointer"
              >
                <option className="bg-white text-[#222]" value="CSE">CSE</option>
                <option className="bg-white text-[#222]" value="CSM">CSM</option>
                <option className="bg-white text-[#222]" value="CSD">CSD</option>
                <option className="bg-white text-[#222]" value="EEE">EEE</option>
                <option className="bg-white text-[#222]" value="ECE">ECE</option>
                <option className="bg-white text-[#222]" value="MECH">MECH</option>
                <option className="bg-white text-[#222]" value="B PHARMA">B PHARMA</option>
                <option className="bg-white text-[#222]" value="PHARMA-D">PHARMA-D</option>
              </select>
            </div>

            {/* Section */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Section</label>
              <select 
                name="section"
                value={formData.section}
                onChange={handleInputChange}
                className="w-full p-4 rounded-[6px] bg-white border border-[#ccc] text-[#222] focus:border-[#d60000] outline-none transition-all appearance-none cursor-pointer"
              >
                <option className="bg-white text-[#222]" value="A">A</option>
                <option className="bg-white text-[#222]" value="B">B</option>
                <option className="bg-white text-[#222]" value="C">C</option>
                <option className="bg-white text-[#222]" value="D">D</option>
                <option className="bg-white text-[#222]" value="E">E</option>
                <option className="bg-white text-[#222]" value="F">F</option>
              </select>
            </div>
          </div>

          {/* Events Selection */}
          <div className="space-y-6">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Select Events</label>

            <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-[10px] border border-[#e5e5e5]">
              {/* Spot Events */}
              <div className="space-y-4">
                <h3 className="text-[#d60000] font-bold text-sm uppercase tracking-widest border-b border-[#e5e5e5] pb-2">Spot Events</h3>
                <div className="space-y-3">
                  {SPOT_EVENTS.map((event) => (
                    <label key={event.id} className="flex items-center gap-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.selectedEvents.includes(event.name)}
                          onChange={() => handleEventToggle(event.name)}
                          className="peer w-5 h-5 appearance-none border border-[#ccc] rounded bg-white checked:bg-[#d60000] checked:border-[#d60000] transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-[#222] transition-colors text-sm">{event.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cultural Events */}
              <div className="space-y-4">
                <h3 className="text-[#d60000] font-bold text-sm uppercase tracking-widest border-b border-[#e5e5e5] pb-2">Cultural Events</h3>
                <div className="space-y-3">
                  {CULTURAL_EVENTS.map((event) => (
                    <label key={event.id} className="flex items-center gap-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.selectedEvents.includes(event.name)}
                          onChange={() => handleEventToggle(event.name)}
                          className="peer w-5 h-5 appearance-none border border-[#ccc] rounded bg-white checked:bg-[#d60000] checked:border-[#d60000] transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-[#222] transition-colors text-sm">{event.name}</span>
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
              disabled={isSubmitting}
              className={`px-12 py-4 bg-[#d60000] hover:bg-[#b30000] text-white font-bold uppercase tracking-widest rounded-[6px] transition-all hover:shadow-[0_4px_10px_rgba(214,0,0,0.3)] active:scale-95 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
            <p className="mt-4 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
              By submitting, you agree to the fest guidelines and code of conduct.
            </p>
          </div>
        </motion.form>
      </div>

      {/* Cinematic Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-6 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              className="bg-white border border-[#e5e5e5] p-8 md:p-12 rounded-[10px] text-center shadow-2xl max-w-lg w-full relative overflow-hidden"
            >
              <button 
                onClick={closeSuccess}
                className="absolute top-6 right-6 text-gray-500 hover:text-[#d60000] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4 tracking-tight">
                REGISTRATION SUCCESSFUL!
              </h2>
              <p className="text-gray-600 mb-8 font-medium">
                Your registration has been recorded successfully.
                Please check your details at the event venue using your Roll Number.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col gap-3">
                  <button
                    onClick={downloadReceipt}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#d60000] text-white font-bold uppercase tracking-widest rounded-[6px] hover:bg-[#b30000] transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download Receipt
                  </button>
                  
                  <button
                    onClick={closeSuccess}
                    className="w-full py-4 bg-gray-100 text-[#222] font-bold uppercase tracking-widest rounded-[6px] hover:bg-gray-200 transition-all"
                  >
                    Close
                  </button>
                </div>

                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-4">
                  Please save your receipt for event entry verification.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Registration;
