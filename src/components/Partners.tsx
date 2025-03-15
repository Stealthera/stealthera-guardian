
import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Placeholder partner logos (in a real app, these would be actual partner logos)
const partnerLogos = Array(8).fill(0).map((_, index) => (
  <div 
    key={index} 
    className="h-16 w-40 bg-white bg-opacity-5 rounded-md flex items-center justify-center px-4 mx-6 
              transition-all duration-300 hover:bg-opacity-10 group hover:scale-105"
  >
    <div className="text-white text-opacity-50 group-hover:text-stealth-blue group-hover:text-opacity-100 font-medium transition-all">
      Partner {index + 1}
    </div>
  </div>
));

const Partners = () => {
  return (
    <section id="partners" className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">
          Trusted by <span className="gradient-text">Innovators</span>
        </h2>
        
        {/* Desktop marquee */}
        <div className="relative w-full overflow-hidden hidden md:block">
          <div className="flex whitespace-nowrap">
            <div className="flex animate-marquee">
              {partnerLogos}
              {partnerLogos} {/* Duplicate for continuous scroll */}
            </div>
          </div>
        </div>
        
        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-2 gap-4 max-w-sm mx-auto">
          {partnerLogos.slice(0, 4).map((logo, i) => (
            <div key={`mobile-${i}`} className="flex justify-center">
              {logo}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6">
            Don't Wait for an Emergency.<br/>
            <span className="gradient-text">Secure Your Family's Safety Today.</span>
          </h3>
          <a 
            href="/early-access" 
            className="inline-block bg-stealth-blue hover:bg-stealth-purple text-white rounded-md px-6 py-3 font-semibold transition-all
                     hover:scale-105 hover:shadow-[0_0_15px_rgba(86,204,242,0.5)] mt-4"
          >
            Pre-Order Now
          </a>
        </div>
        
        {/* Professional Footer - 4 Column Layout */}
        <div className="mt-24 border-t border-stealth-indigo/30 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Company Info */}
            <div>
              <h4 className="text-[#F0F0F0] font-semibold text-lg mb-4">StealthEra</h4>
              <p className="text-[#CCCCCC] text-sm">Empowering safer, smarter eldercare through AI innovation and preventative monitoring.</p>
              <div className="mt-4">
                <span className="text-xs text-stealth-blue/80">HIPAA Compliant</span>
                <span className="text-xs text-stealth-blue/80 ml-3">GDPR Ready</span>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[#F0F0F0] font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">Features</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">Pricing</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">FAQ</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">Contact</a></li>
              </ul>
            </div>
            
            {/* Column 3: Legal & Compliance */}
            <div>
              <h4 className="text-[#F0F0F0] font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">Privacy Policy</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">Terms of Use</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">Compliance</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors hover-underline">Accessibility</a></li>
              </ul>
            </div>
            
            {/* Column 4: Connect */}
            <div>
              <h4 className="text-[#F0F0F0] font-semibold text-lg mb-4">Connect With Us</h4>
              <div className="flex items-center mb-2">
                <Mail className="w-4 h-4 mr-2 text-stealth-blue" />
                <a href="mailto:support@stealthera.com" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors">support@stealthera.com</a>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-4 h-4 mr-2 text-stealth-blue" />
                <a href="tel:+91XXXXXXXX" className="text-[#CCCCCC] hover:text-stealth-blue transition-colors">+91-XXXXX-XXXXX</a>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="w-4 h-4 mr-2 text-stealth-blue" />
                <span className="text-[#CCCCCC]">Bangalore, India</span>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-4">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Email for safety tips" 
                    className="bg-stealth-black border border-stealth-indigo/30 rounded-l-md px-3 py-2 text-sm flex-grow focus:outline-none focus:border-stealth-blue"
                  />
                  <button className="bg-stealth-blue hover:bg-stealth-purple text-white rounded-r-md px-3 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gradient-to-r from-stealth-purple via-stealth-blue to-stealth-purple opacity-30" />
          
          <div className="text-center text-[#CCCCCC] text-opacity-70 text-sm">
            © 2023 StealthEra. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
