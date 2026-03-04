import React from 'react';

const Header = () => {
  const bannerUrl = "https://drive.google.com/uc?export=view&id=1qwqfPIdUacuuonzyjBNXA6MPAwLcGsoA";
  
  return (
    <header className="w-full bg-white">
      {/* Desktop Banner */}
      <div className="hidden md:block w-full">
        <img 
          src={bannerUrl} 
          alt="Avanthi Group of Colleges Banner" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile Simplified Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
             <img 
              src="https://drive.google.com/uc?export=view&id=1qwqfPIdUacuuonzyjBNXA6MPAwLcGsoA" 
              alt="Avanthi Logo" 
              className="h-8 object-contain"
              style={{ objectPosition: '0% 50%', width: '120px', maxWidth: 'none' }}
            />
          </div>
          <span className="text-[#d60000] font-bold text-xl tracking-tight">AVANTHI</span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#d60000]">
          <img 
            src="https://drive.google.com/uc?export=view&id=1qwqfPIdUacuuonzyjBNXA6MPAwLcGsoA" 
            alt="Chairman" 
            className="w-full h-full object-cover"
            style={{ objectPosition: '55% 20%', scale: '2.5' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
