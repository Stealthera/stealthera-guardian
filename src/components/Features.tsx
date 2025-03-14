
import React from 'react';
import { AlertCircle, Brain, Map, Activity, Watch } from 'lucide-react';

const featureData = [
  {
    title: "Emergency Alerts",
    description: "Detects falls, crashes, and health anomalies in real-time.",
    icon: <AlertCircle className="w-12 h-12 text-stealth-purple animate-pulse" />
  },
  {
    title: "Cognitive Health Tracking",
    description: "Monitors speech patterns and activity for early dementia signs.",
    icon: <Brain className="w-12 h-12 text-stealth-blue" />
  },
  {
    title: "Geofencing",
    description: "Instant alerts when seniors leave safe zones.",
    icon: <Map className="w-12 h-12 text-stealth-purple" />
  },
  {
    title: "Predictive Analytics",
    description: "Flags cardiac/respiratory risks 10-15 years early.",
    icon: <Activity className="w-12 h-12 text-stealth-blue" />
  },
  {
    title: "24/7 Comfort",
    description: "Thinner than a smartwatch, designed for non-stop wear.",
    icon: <Watch className="w-12 h-12 text-stealth-purple" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/10 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-center mb-12 text-white">
          <span className="text-stealth-purple">StealthEra:</span> The AI Guardian Your Family Needs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-stealth-black border border-stealth-indigo/30 rounded-lg p-6 transition-all duration-300 
                         hover:border-stealth-purple/50 hover:bg-stealth-indigo/10 group"
            >
              <div className="mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white uppercase group-hover:text-stealth-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
