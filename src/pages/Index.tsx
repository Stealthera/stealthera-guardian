
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Partners from '@/components/Partners';

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
          <div className="text-white font-semibold text-xl">StealthEra</div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-stealth-blue transition-colors hover-underline">Home</a>
            <a href="#features" className="text-white hover:text-stealth-blue transition-colors hover-underline">Features</a>
            <a href="#" className="text-white hover:text-stealth-blue transition-colors hover-underline">Partners</a>
          </nav>
          
          <a 
            href="/early-access" 
            className="px-4 py-2 text-sm bg-stealth-blue text-white rounded-md transition-all hover:bg-opacity-90"
          >
            Early Access
          </a>
        </div>
      </header>
      
      <main>
        <Hero />
        
        <div className="fade-in-section">
          <Features />
        </div>
        
        <div className="fade-in-section">
          <Partners />
        </div>
      </main>
      
      <footer className="py-10 px-4 border-t border-stealth-indigo/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-opacity-70 mb-4 md:mb-0">
            © 2023 StealthEra. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-white text-opacity-70 hover:text-stealth-blue transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
