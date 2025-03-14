
import React from 'react';

// Placeholder partner logos (in a real app, these would be actual partner logos)
const partnerLogos = Array(8).fill(0).map((_, index) => (
  <div 
    key={index} 
    className="h-16 w-40 bg-white bg-opacity-5 rounded-md flex items-center justify-center px-4 mx-6 
              transition-all duration-300 hover:bg-opacity-10 group"
  >
    <div className="text-white text-opacity-50 group-hover:text-opacity-100 font-medium transition-all">
      Partner {index + 1}
    </div>
  </div>
));

const Partners = () => {
  return (
    <section id="partners" className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">
          Trusted by <span className="text-stealth-purple">Innovators</span>
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="flex animate-marquee">
              {partnerLogos}
              {partnerLogos} {/* Duplicate for continuous scroll */}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold uppercase mb-6 text-white">
            Don't Wait for an Emergency.<br/>
            <span className="text-stealth-purple">Secure Your Family's Safety Today.</span>
          </h3>
          <a 
            href="/early-access" 
            className="inline-block btn-primary mt-4"
          >
            Pre-Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
