
import React from 'react';
import { AlertCircle, Brain, Map, Activity, Watch } from 'lucide-react';

const featureData = [
  {
    title: "Emergency Alerts",
    description: "Detects falls, crashes, and health anomalies in real-time.",
    icon: <AlertCircle className="w-12 h-12 text-stealth-blue animate-pulse" />,
    column: 1
  },
  {
    title: "Cognitive Health Tracking",
    description: "Monitors speech patterns and activity for early dementia signs.",
    icon: <Brain className="w-12 h-12 text-stealth-blue" />,
    column: 1
  },
  {
    title: "Geofencing",
    description: "Instant alerts when seniors leave safe zones.",
    icon: <Map className="w-12 h-12 text-stealth-blue" />,
    column: 2
  },
  {
    title: "Predictive Analytics",
    description: "Flags cardiac/respiratory risks 10-15 years early.",
    icon: <Activity className="w-12 h-12 text-stealth-blue" />,
    column: 2
  },
  {
    title: "24/7 Comfort",
    description: "Thinner than a smartwatch, designed for non-stop wear.",
    icon: <Watch className="w-12 h-12 text-stealth-blue" />,
    column: 3
  }
];

const Features = () => {
  // Filter features by column for the staggered layout
  const column1 = featureData.filter(f => f.column === 1);
  const column2 = featureData.filter(f => f.column === 2);
  const column3 = featureData.filter(f => f.column === 3);
  
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/10 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-center mb-12">
          <span className="gradient-text">StealthEra:</span> The AI Guardian Your Family Needs
        </h2>
        
        {/* Desktop version - asymmetric grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16">
          {/* Column 1 */}
          <div className="space-y-6">
            {column1.map((feature, index) => (
              <FeatureCard key={`col1-${index}`} feature={feature} />
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="space-y-6 mt-10">
            {column2.map((feature, index) => (
              <FeatureCard key={`col2-${index}`} feature={feature} />
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="space-y-6">
            {column3.map((feature, index) => (
              <FeatureCard key={`col3-${index}`} feature={feature} />
            ))}
          </div>
        </div>
        
        {/* Mobile version - simple column */}
        <div className="md:hidden space-y-6 mt-10">
          {featureData.map((feature, index) => (
            <FeatureCard key={`mobile-${index}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate FeatureCard component for better organization
const FeatureCard = ({ feature }) => (
  <div className="bg-stealth-black border border-stealth-blue/30 rounded-lg p-6 transition-all duration-300 
                hover:border-stealth-blue/60 hover:bg-stealth-indigo/10 hover:scale-105 
                hover:shadow-[0_4px_20px_-3px_rgba(86,204,242,0.2)] group">
    <div className="mb-6 flex justify-center">
      {feature.icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 uppercase group-hover:text-stealth-blue transition-colors">
      {feature.title}
    </h3>
    <p className="text-[#CCCCCC]">
      {feature.description}
    </p>
  </div>
);

export default Features;
