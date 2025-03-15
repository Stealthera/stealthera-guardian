
import React from 'react';

// Placeholder partner logos (in a real app, these would be actual partner logos)
const partnerLogos = Array(8).fill(0).map((_, index) => (
  <div 
    key={index} 
    className="h-16 w-40 bg-white bg-opacity-5 rounded-md flex items-center justify-center px-4 mx-6 
              transition-all duration-300 hover:bg-opacity-10 group hover:scale-105"
  >
    <div className="text-white text-opacity-50 group-hover:text-stealth-blue group-hover:text-opacity-100 font-medium transition-all">
      Partner {index + 1}
    </div>
  </div>
));

const Partners = () => {
  return (
    <section id="partners" className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">
          Trusted by <span className="gradient-text">Innovators</span>
        </h2>
        
        {/* Desktop marquee */}
        <div className="relative w-full overflow-hidden hidden md:block">
          <div className="flex whitespace-nowrap">
            <div className="flex animate-marquee">
              {partnerLogos}
              {partnerLogos} {/* Duplicate for continuous scroll */}
            </div>
          </div>
        </div>
        
        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-2 gap-4 max-w-sm mx-auto">
          {partnerLogos.slice(0, 4).map((logo, i) => (
            <div key={`mobile-${i}`} className="flex justify-center">
              {logo}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6">
            Don't Wait for an Emergency.<br/>
            <span className="gradient-text">Secure Your Family's Safety Today.</span>
          </h3>
          <a 
            href="/early-access" 
            className="inline-block bg-stealth-blue hover:bg-stealth-purple text-white rounded-md px-6 py-3 font-semibold transition-all
                     hover:scale-105 hover:shadow-[0_0_15px_rgba(86,204,242,0.5)] mt-4"
          >
            Pre-Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
