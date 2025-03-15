import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

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
      <Helmet>
        <title>StealthEra | AI Eldercare Wearable</title>
        <meta name="description" content="AI-powered wearable for senior safety, monitoring, and peace of mind." />
        <meta name="keywords" content="eldercare, senior safety, AI wearable, health monitoring, dementia, fall detection" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalDevice",
              "name": "StealthEra",
              "description": "AI-powered wearable for senior safety."
            }
          `}
        </script>
      </Helmet>
      
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 bg-gradient-to-b from-stealth-black to-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="gradient-text font-poppins font-semibold text-xl uppercase">StealthEra</div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors hover-underline">Home</a>
            <a href="#problem" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors hover-underline">Problem</a>
            <a href="#features" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors hover-underline">Solution</a>
            <a href="#how-it-works" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors hover-underline">How It Works</a>
            <a href="#testimonials" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors hover-underline">Testimonials</a>
          </nav>
          
          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger className="md:hidden text-[#F0F0F0]">
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-stealth-black border-stealth-indigo/30">
              <nav className="flex flex-col space-y-6 mt-12">
                <a href="#" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors text-lg">Home</a>
                <a href="#problem" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors text-lg">Problem</a>
                <a href="#features" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors text-lg">Solution</a>
                <a href="#how-it-works" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors text-lg">How It Works</a>
                <a href="#testimonials" className="text-[#F0F0F0] hover:text-stealth-blue transition-colors text-lg">Testimonials</a>
              </nav>
            </SheetContent>
          </Sheet>
          
          <a href="/early-access" className="hidden md:block px-4 py-2 text-sm bg-stealth-blue hover:bg-stealth-purple text-white rounded-md transition-all hover:scale-105">
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
    </div>
  );
};

export default Index;
