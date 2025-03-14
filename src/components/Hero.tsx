
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stealth-indigo/10 to-transparent z-0"></div>
      
      <div className="z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="font-poppins uppercase text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          <div className="mb-2">Smarter Care.</div>
          <div className="mb-2">Instant Alerts.</div>
          <div className="text-stealth-purple">Complete Peace of Mind.</div>
        </h1>
        
        <h2 className="mb-10 text-xl md:text-2xl font-medium text-gray-300 font-inter max-w-2xl mx-auto">
          AI-powered wearable that keeps seniors safe, connected, and monitored—anytime, anywhere.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            className="btn-primary"
            onClick={() => navigate('/early-access')}
          >
            Join Early Access
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-white hover:text-stealth-blue group flex items-center gap-2 transition-all"
          >
            <span className="hover-underline">Watch Demo Video</span>
            <Play className="w-4 h-4 transition-all group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="relative w-full max-w-md mx-auto">
          <div className="bg-gradient-to-r from-stealth-purple/20 to-stealth-blue/20 rounded-full aspect-square max-w-md mx-auto flex items-center justify-center p-8">
            <div className="rounded-full bg-gradient-to-r from-stealth-purple/30 to-stealth-blue/30 w-4/5 h-4/5 flex items-center justify-center animate-pulse">
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
