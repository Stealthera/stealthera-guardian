
import React from 'react';
import { Wand2, LineChart, BellRing } from 'lucide-react';

const stepsData = [
  {
    number: "01",
    title: "Wear",
    description: "Lightweight, medical-grade design comfortable for 24/7 use.",
    icon: <Wand2 className="w-6 h-6 text-stealth-blue" />
  },
  {
    number: "02",
    title: "Monitor",
    description: "AI analyzes vitals, movement, and speech patterns in real-time.",
    icon: <LineChart className="w-6 h-6 text-stealth-blue" />
  },
  {
    number: "03",
    title: "Protect",
    description: "Instant SOS to caregivers and hospitals during emergencies.",
    icon: <BellRing className="w-6 h-6 text-stealth-blue" />
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/5 to-transparent z-0"></div>
      
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-center mb-16">
          3 Steps to <span className="gradient-text">Unbreakable Safety</span>
        </h2>
        
        <div className="space-y-16">
          {stepsData.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
              {/* Timeline line */}
              {index < stepsData.length - 1 && (
                <div className="absolute left-[25px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-stealth-blue to-stealth-purple/20"></div>
              )}
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stealth-black border border-stealth-blue flex items-center justify-center text-xl font-semibold text-stealth-blue">
                  {step.number}
                </div>
                
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon}
                    <h3 className="text-xl font-semibold uppercase">{step.title}</h3>
                  </div>
                  <p className="text-[#CCCCCC]">{step.description}</p>
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
