
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  useEffect(() => {
    // Simple intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the fade-in-section class
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-stealth-black overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 bg-gradient-to-b from-stealth-black to-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-poppins font-bold text-xl uppercase">StealthEra</div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-stealth-blue transition-colors hover-underline">Home</a>
            <a href="#problem" className="text-white hover:text-stealth-blue transition-colors hover-underline">Problem</a>
            <a href="#features" className="text-white hover:text-stealth-blue transition-colors hover-underline">Solution</a>
            <a href="#how-it-works" className="text-white hover:text-stealth-blue transition-colors hover-underline">How It Works</a>
            <a href="#testimonials" className="text-white hover:text-stealth-blue transition-colors hover-underline">Testimonials</a>
          </nav>
          
          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger className="md:hidden text-white">
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-stealth-black border-stealth-indigo/30">
              <nav className="flex flex-col space-y-6 mt-12">
                <a href="#" className="text-white hover:text-stealth-blue transition-colors text-lg">Home</a>
                <a href="#problem" className="text-white hover:text-stealth-blue transition-colors text-lg">Problem</a>
                <a href="#features" className="text-white hover:text-stealth-blue transition-colors text-lg">Solution</a>
                <a href="#how-it-works" className="text-white hover:text-stealth-blue transition-colors text-lg">How It Works</a>
                <a href="#testimonials" className="text-white hover:text-stealth-blue transition-colors text-lg">Testimonials</a>
              </nav>
            </SheetContent>
          </Sheet>
          
          <a 
            href="/early-access" 
            className="hidden md:block px-4 py-2 text-sm bg-stealth-purple text-white rounded-md transition-all hover:bg-opacity-90 hover:scale-105"
          >
            Early Access
          </a>
        </div>
      </header>
      
      <main>
        <Hero />
        
        <div className="fade-in-section">
          <Problem />
        </div>
        
        <div className="fade-in-section">
          <Features />
        </div>
        
        <div className="fade-in-section">
          <HowItWorks />
        </div>
        
        <div className="fade-in-section">
          <Testimonials />
        </div>
        
        <div className="fade-in-section">
          <Partners />
        </div>
      </main>
      
      <footer className="py-10 px-4 border-t border-stealth-indigo/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(122,109,237,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center z-10 relative">
          <div className="text-white text-opacity-70 mb-4 md:mb-0">
            © 2023 StealthEra. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">Home</a>
            <a href="#features" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">Features</a>
            <a href="#" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">FAQ</a>
            <a href="#" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">Contact</a>
            <a href="/early-access" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">Early Access</a>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white text-opacity-50 hover:text-stealth-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-white text-opacity-50 hover:text-stealth-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
