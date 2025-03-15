import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
const Hero = () => {
  const navigate = useNavigate();
  return <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stealth-indigo/10 to-transparent z-0"></div>
      
      <div className="z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="font-poppins uppercase text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F0F0F0] mb-4">
          <div className="mb-2 py-[5px]">SMARTER CARE</div>
          <div className="mb-2 py-[4px]">INSTANT ALERTS</div>
          <div className="gradient-text py-[5px]">Complete Peace of Mind.</div>
        </h1>
        
        <h2 className="mb-10 text-base md:text-lg text-[#CCCCCC] font-inter max-w-2xl mx-auto font-light">ALL-in-one WEARABLE THAT KEEPS SENIORS SAFE, CONNECTED, AND MONITORED—ANYTIME, ANYWHERE.</h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-stealth-blue hover:bg-stealth-purple text-white transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(86,204,242,0.5)]" onClick={() => navigate('/early-access')}>
            Join Early Access
          </Button>
          
          <Button variant="ghost" className="text-[#F0F0F0] hover:text-stealth-blue group flex items-center gap-2 transition-all">
            <span className="hover-underline">Watch Demo Video</span>
            <Play className="w-4 h-4 transition-all group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="relative w-full max-w-md mx-auto">
          <div className="bg-gradient-to-r from-stealth-purple/10 to-stealth-blue/10 rounded-full aspect-square max-w-md mx-auto flex items-center justify-center p-8 animate-pulse">
            <div className="rounded-full bg-gradient-to-r from-stealth-purple/20 to-stealth-blue/20 w-4/5 h-4/5 flex items-center justify-center">
              <div className="relative rounded-full bg-black w-3/5 h-3/5 flex items-center justify-center overflow-hidden border border-stealth-blue/30">
                <img src="/lovable-uploads/dfd0cfb5-be96-4b4f-a584-48c48b25c6e2.png" alt="StealthEra wearable devices with comfortable bands in multiple colors" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;