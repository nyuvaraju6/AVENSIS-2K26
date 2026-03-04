import React from "react";

const Convenors = () => {
  return (
    <section id="convenors" className="py-24 bg-[#0b0f1a] text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          CONVENORS
        </h2>

        {/* Convenors Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-yellow-400/30 rounded-2xl p-8 mb-10 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition">
          <ul className="space-y-4 text-center text-lg">
            <li>Dr. S.H. Shariff – Associate Professor, HOD – MECH</li>
            <li>Dr. Ch. R. Phani Kumar – Associate Professor – Dept of ECE</li>
          </ul>
        </div>

        {/* Co-Convenors Title */}
        <h3 className="text-3xl font-semibold text-yellow-400 text-center mb-8">
          CO-CONVENORS
        </h3>

        {/* Co-Convenors Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-yellow-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition">
          <ul className="space-y-4 text-center text-lg">
            <li>Dr. Uma Shankar V – Vice Principal – AIPS</li>
            <li>Dr. B. V. Swamy – Assistant Professor – CSE</li>
            <li>Mr. Y. Babji – Assistant Professor – CSMD</li>
            <li>Mr. A. Seshu – Assistant Professor – Polytechnic</li>
            <li>Mr. K. Satayanarayana – Assistant Professor – Degree</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Convenors;
