
import React from 'react';

const stepsData = [
  {
    number: "01",
    title: "Wear",
    description: "Lightweight, medical-grade design comfortable for 24/7 use."
  },
  {
    number: "02",
    title: "Analyze",
    description: "AI processes vitals, movement, and speech patterns continuously."
  },
  {
    number: "03",
    title: "Alert",
    description: "Instant SOS to caregivers and hospitals during emergencies."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/5 to-transparent z-0"></div>
      
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-center mb-16 text-white">
          3 Steps to <span className="text-stealth-purple">Unbreakable Safety</span>
        </h2>
        
        <div className="space-y-16">
          {stepsData.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < stepsData.length - 1 && (
                <div className="absolute left-[25px] top-16 bottom-0 w-0.5 bg-stealth-purple/20"></div>
              )}
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stealth-purple/10 border border-stealth-purple flex items-center justify-center text-2xl font-bold text-stealth-purple">
                  {step.number}
                </div>
                
                <div className="pt-1">
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
