
import React from 'react';
import { AlertCircle, Brain, Map, Activity, Watch } from 'lucide-react';

const featureData = [
  {
    title: "Emergency Alerts",
    description: "Real-time detection of falls, crashes, and sudden health changes.",
    icon: <AlertCircle className="w-8 h-8 text-stealth-blue" />
  },
  {
    title: "Cognitive & Mental Health Support",
    description: "Assistance in dementia care, reminders, and cognitive tracking.",
    icon: <Brain className="w-8 h-8 text-stealth-purple" />
  },
  {
    title: "Geofencing for Safety",
    description: "Alerts when a loved one leaves designated safe zones.",
    icon: <Map className="w-8 h-8 text-stealth-blue" />
  },
  {
    title: "Predictive Health Insights",
    description: "AI-driven tracking to identify early health risks.",
    icon: <Activity className="w-8 h-8 text-stealth-purple" />
  },
  {
    title: "24/7 Wearable Comfort",
    description: "Ultra-light, discreet design for continuous use.",
    icon: <Watch className="w-8 h-8 text-stealth-blue" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/10 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-center mb-12 text-white">
          <span className="text-stealth-purple">StealthEra:</span> Comprehensive AI-Powered Eldercare
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-stealth-black border border-stealth-indigo/30 rounded-lg p-6 transition-all duration-300 
                         hover:border-stealth-purple/50 hover:bg-stealth-indigo/10 group"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-stealth-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-stealth-indigo/20 border border-stealth-indigo/30 rounded-lg p-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center">
            The Challenges in Modern Eldercare
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-stealth-purple font-bold text-2xl">60%</div>
              <p className="text-gray-300 text-left">of families in India are nuclear, lacking immediate caregiving support for seniors.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-stealth-purple font-bold text-2xl">30%</div>
              <p className="text-gray-300 text-left">of preventable deaths occur due to late intervention.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-stealth-purple font-bold text-2xl">8-10%</div>
              <p className="text-gray-300 text-left">of India's population will suffer from chronic conditions by 2030, yet most go unnoticed.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-stealth-purple font-bold text-2xl">1 in 3</div>
              <p className="text-gray-300 text-left">seniors with dementia is at risk of getting lost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
