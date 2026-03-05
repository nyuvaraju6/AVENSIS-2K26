import React from 'react';

const Header = () => {
  const bannerUrl = "https://drive.google.com/uc?export=view&id=1qwqfPIdUacuuonzyjBNXA6MPAwLcGsoA";
  
  return (
    <header className="w-full bg-white border-t-[6px] border-[#d60000]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        
        {/* Left Logo (Cropped from banner) */}
        <div className="flex items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden flex items-center justify-center">
            <img 
              src={bannerUrl}
              className="max-w-none h-16 md:h-20 object-contain"
              style={{ objectPosition: '1% 50%', width: 'auto' }}
              alt="Avanthi Logo"
            />
          </div>
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
          <h1 className="text-2xl font-bold text-[#d60000]">AVANTHI</h1>
        </div>

        {/* Right Logos (Cropped from banner) */}
        <div className="hidden md:flex items-center gap-4">
          {/* AVEV Logo area */}
          <div className="h-14 w-14 overflow-hidden flex items-center justify-center">
            <img 
              src={bannerUrl} 
              className="max-w-none h-14 object-contain" 
              style={{ objectPosition: '85% 50%', width: 'auto' }}
              alt="AVEV Logo"
            />
          </div>
          {/* AICTE/NAAC area */}
          <div className="h-14 w-14 overflow-hidden flex items-center justify-center">
            <img 
              src={bannerUrl} 
              className="max-w-none h-14 object-contain" 
              style={{ objectPosition: '75% 50%', width: 'auto' }}
              alt="Institutional Logo"
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
