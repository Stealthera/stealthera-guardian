
import React from 'react';
import { Home, Clock, Brain, Lightbulb } from 'lucide-react';

const problemData = [
  {
    title: "Nuclear Family Challenge",
    description: "60% of families in India lack immediate caregiving support for seniors, creating a critical gap in daily care.",
    icon: <Lightbulb className="w-12 h-12 text-[#FFA726] animate-pulse" />,
    color: "border-[#FFA726]/30"
  },
  {
    title: "Fall Risks & Delayed Care",
    description: "30% of senior fatalities occur due to delayed emergency response when health incidents happen.",
    icon: <Clock className="w-12 h-12 text-[#EF5350] animate-pulse" />,
    color: "border-[#EF5350]/30"
  },
  {
    title: "Wandering Incidents",
    description: "1 in 3 dementia patients wander into dangerous situations, 80% of which could be prevented with proper monitoring.",
    icon: <Brain className="w-12 h-12 text-[#7E57C2] animate-glow" />,
    color: "border-[#7E57C2]/30"
  },
  {
    title: "Chronic Health Challenges",
    description: "8-10% of India's population will face serious chronic diseases by 2030, but AI detection can identify risks 10-15 years earlier.",
    icon: <Home className="w-12 h-12 text-[#26A69A]" />,
    color: "border-[#26A69A]/30"
  }
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/5 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-center mb-12">
          Why Eldercare Feels Like a <span className="gradient-text">Race Against Time</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {problemData.map((problem, index) => (
            <div 
              key={index} 
              className={`bg-stealth-black border ${problem.color} rounded-lg p-8 card-hover animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 uppercase group-hover:text-stealth-blue transition-colors">
                {problem.title}
              </h3>
              <p className="text-[#CCCCCC]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
