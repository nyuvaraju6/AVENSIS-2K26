import React from 'react';

const Header = () => {

  return (
    <header className="w-full bg-white border-t-[6px] border-[#d60000]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        
        {/* Left Logo */}
        <div className="flex items-center">
          <img 
            src="/avanthi-logo.png"
            alt="Avanthi Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Center Title (Desktop) */}
        <div className="text-center hidden md:block flex-1 px-4">
          <h1 className="text-4xl font-bold text-[#d60000] tracking-wide leading-none mb-1">
            AVANTHI
          </h1>
          <p className="text-sm font-semibold text-gray-900 uppercase tracking-tight">
            INSTITUTE OF ENGINEERING AND TECHNOLOGY (AUTONOMOUS)
          </p>
          <p className="text-[11px] text-gray-600 mt-1">
            Cherukupally (Village), Near Tagarapuvalasa Bridge, Vizianagaram (Dist) - 531162
          </p>
        </div>

        {/* Mobile Title */}
        <div className="md:hidden flex-1 text-center">
          <h1 className="text-2xl font-bold text-[#d60000]">AVANTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY (AUTONOMOUS)</h1>
        </div>

      </div>
    </header>
  );
};

export default Header;
