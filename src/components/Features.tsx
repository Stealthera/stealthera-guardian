import React from 'react';
import { AlertCircle, Brain, Map, Activity, Watch } from 'lucide-react';
const featureData = [{
  title: "Real-Time Emergency Alerts",
  description: "Detects falls, crashes, and health anomalies with alerts sent in just 10 seconds.",
  icon: <AlertCircle className="w-12 h-12 text-[#EF5350] animate-pulse\n" />,
  column: 1,
  row: 1
}, {
  title: "Cognitive Health Monitoring",
  description: "Tracks speech patterns and activity to identify early signs of cognitive decline.",
  icon: <Brain className="w-12 h-12 text-[#7E57C2]" />,
  column: 2,
  row: 1
}, {
  title: "Geofencing & Safety Zones",
  description: "Instant alerts when seniors wander beyond predefined safe areas.",
  icon: <Map className="w-12 h-12 text-[#26A69A]" />,
  column: 2,
  row: 2
}, {
  title: "Predictive Health Analytics",
  description: "Flags potential cardiac and respiratory risks 10-15 years earlier than traditional methods.",
  icon: <Activity className="w-12 h-12 text-[#F06292]" />,
  column: 1,
  row: 3
}, {
  title: "24/7 Wearable Comfort",
  description: "Thinner than a smartwatch, designed for continuous wear with medical-grade materials.",
  icon: <Watch className="w-12 h-12 text-[#FFA726]" />,
  column: 2,
  row: 3
}];
const Features = () => {
  // Group features by row for the asymmetrical layout
  const row1 = featureData.filter(f => f.row === 1);
  const row2 = featureData.filter(f => f.row === 2);
  const row3 = featureData.filter(f => f.row === 3);
  return <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/10 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-center mb-12">
          <span className="gradient-text">StealthEra:</span> Your 24/7 AI Guardian
        </h2>
        
        {/* Desktop version - asymmetric grid */}
        <div className="hidden md:block mt-16">
          {/* Row 1 - two columns */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {row1.map((feature, index) => <FeatureCard key={`row1-${index}`} feature={feature} />)}
          </div>
          
          {/* Row 2 - center column */}
          <div className="grid grid-cols-1 max-w-md mx-auto mb-6">
            {row2.map((feature, index) => <FeatureCard key={`row2-${index}`} feature={feature} />)}
          </div>
          
          {/* Row 3 - two columns */}
          <div className="grid grid-cols-2 gap-6">
            {row3.map((feature, index) => <FeatureCard key={`row3-${index}`} feature={feature} />)}
          </div>
        </div>
        
        {/* Mobile version - simple column */}
        <div className="md:hidden space-y-6 mt-10">
          {featureData.map((feature, index) => <FeatureCard key={`mobile-${index}`} feature={feature} />)}
        </div>
      </div>
    </section>;
};

// Separate FeatureCard component for better organization
const FeatureCard = ({
  feature
}) => <div className="bg-stealth-black border border-stealth-blue/30 rounded-lg p-6 transition-all duration-300 
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
  </div>;
export default Features;