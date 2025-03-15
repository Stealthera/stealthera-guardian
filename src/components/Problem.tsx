
import React from 'react';
import { Home, Clock, Brain } from 'lucide-react';

const problemData = [
  {
    title: "Fall Risks & Delayed Care",
    description: "40% of seniors experience falls annually, with 30% resulting in delayed medical care and preventable fatalities.",
    icon: <Clock className="w-12 h-12 text-stealth-blue animate-pulse" />
  },
  {
    title: "Wandering Incidents",
    description: "1 in 3 dementia patients wander into dangerous situations, 80% of which could be prevented with proper monitoring.",
    icon: <Brain className="w-12 h-12 text-stealth-blue animate-glow" />
  },
  {
    title: "Chronic Health Challenges",
    description: "8-10% of India's population will face serious chronic diseases by 2030, but AI detection can identify risks 10-15 years earlier.",
    icon: <Home className="w-12 h-12 text-stealth-blue" />
  }
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/5 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-center mb-12">
          Why Eldercare Keeps <span className="gradient-text">Families Anxious</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {problemData.map((problem, index) => (
            <div 
              key={index} 
              className="bg-stealth-black border border-stealth-indigo/20 rounded-lg p-8 card-hover"
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
