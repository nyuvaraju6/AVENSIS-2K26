
import React from 'react';

const Header = () => {
  const bannerUrl = "https://drive.google.com/uc?export=view&id=1qwqfPIdUacuuonzyjBNXA6MPAwLcGsoA";

  return (
    <header className="w-full bg-[#0B0B0B] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

        {/* Left Logo */}
        <div className="flex items-center">
          <img 
            src="/avanthi-logo.png"
            alt="Avanthi Logo"
            className="h-20 md:h-24 object-contain"
          />
        </div>

        {/* Center Title (Desktop) */}
        <div className="hidden md:block text-center flex-1 px-4">
          <h1 className="text-4xl font-bold text-[#FFD700] tracking-wide leading-none mb-1">
            AVANTHI
          </h1>

          <p className="text-sm font-semibold text-white uppercase tracking-tight">
            INSTITUTE OF ENGINEERING AND TECHNOLOGY (AUTONOMOUS)
          </p>

          <p className="text-[11px] text-gray-400 mt-1">
            Cherukupally (Village), Near Tagarapuvalasa Bridge, Vizianagaram (Dist) - 531162
          </p>
        </div>

        {/* Mobile Title */}
        <div className="md:hidden flex flex-col items-start ml-3">
          <h1 className="text-yellow-400 font-bold text-xl leading-none">
            AVANTHI
          </h1>

          <p className="text-white text-[10px] leading-tight">
            INSTITUTE OF ENGINEERING AND TECHNOLOGY
          </p>

          <p className="text-white text-[10px] leading-tight">
            (AUTONOMOUS)
          </p>
        </div>

        {/* Right Logos */}
        <div className="hidden md:flex items-center gap-4">
          <div className="h-24 w-24 flex items-center justify-center">
            <img 
              src={bannerUrl}
              alt="Institutional Accreditation"
              className="h-20 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
