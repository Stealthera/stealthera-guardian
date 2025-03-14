
import React from 'react';

// Placeholder partner logos (in a real app, these would be actual partner logos)
const partnerLogos = Array(8).fill(0).map((_, index) => (
  <div key={index} className="h-12 w-36 bg-white bg-opacity-10 rounded-md flex items-center justify-center px-4 mx-6 transition-all duration-300 hover:bg-opacity-20">
    <div className="text-white text-opacity-70 font-medium">Partner {index + 1}</div>
  </div>
));

const Partners = () => {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">
          Trusted by Leading Healthcare & Technology Partners
        </h2>
        
        <div className="relative w-full">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-marquee">
              {partnerLogos}
              {partnerLogos} {/* Duplicate for continuous scroll */}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Join the Future of Eldercare Today
          </h3>
          <a 
            href="/early-access" 
            className="inline-block btn-primary"
          >
            Reserve Your Early Access Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
