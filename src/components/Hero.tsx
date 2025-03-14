
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stealth-indigo/20 to-transparent z-0"></div>
      
      <div className="z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="mb-4 text-white">
          Empowering Eldercare with 
          <span className="text-stealth-blue"> Intelligent </span> 
          Monitoring
        </h1>
        
        <h2 className="mb-8 text-xl md:text-2xl font-medium text-gray-300">
          AI-driven wearables ensuring safety, connectivity, and peace of mind.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            className="btn-primary"
            onClick={() => navigate('/early-access')}
          >
            Get Early Access
          </Button>
          
          <Button 
            className="btn-secondary" 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
        
        <div className="relative w-full max-w-md mx-auto">
          <div className="bg-gradient-to-r from-stealth-purple/20 to-stealth-blue/20 rounded-full aspect-square max-w-md mx-auto flex items-center justify-center p-8">
            <div className="rounded-full bg-gradient-to-r from-stealth-purple/30 to-stealth-blue/30 w-4/5 h-4/5 flex items-center justify-center">
              <div className="rounded-full bg-black w-3/5 h-3/5 flex items-center justify-center border border-stealth-purple/30">
                <div className="text-white text-opacity-80 font-medium">StealthEra Device</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
