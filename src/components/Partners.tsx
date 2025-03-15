import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Organization logos with their paths
const partnerLogos = [{
  src: "/lovable-uploads/b55cde14-d477-49b7-b85a-d20f9250d9e9.png",
  alt: "T-WORKS"
}, {
  src: "/lovable-uploads/d328d001-0865-4c2c-b4b3-b1cc521351ac.png",
  alt: "IIT Bombay"
}, {
  src: "/lovable-uploads/afe485d1-06ac-4b89-b808-ebff7ec29f21.png",
  alt: "NASSCOM Center of Excellence"
}, {
  src: "/lovable-uploads/a61a5029-0eb5-4016-a1d6-a2d5195d79bb.png",
  alt: "TIH Foundation"
}, {
  src: "/lovable-uploads/4199e30c-96e4-4e23-8b1a-a25bd5137879.png",
  alt: "SIPI"
}, {
  src: "/lovable-uploads/a248397f-c07e-4af5-9299-f642d2c57676.png",
  alt: "YOUTH C:LAB"
}, {
  src: "/lovable-uploads/85c76bde-8b05-42b3-8320-ada3d0954115.png",
  alt: "WADHWANI FOUNDATION"
}, {
  src: "/lovable-uploads/a9cb2a24-f6eb-4d5a-b9f8-00dc2e1492af.png",
  alt: "NM-ICPS"
}];
const LogoItem = ({
  src,
  alt
}: {
  src: string;
  alt: string;
}) => <div className="h-16 w-40 mx-6 flex items-center justify-center transition-all duration-300 hover:scale-105 filter grayscale hover:grayscale-0">
    <img src={src} alt={alt} className="max-h-full max-w-full object-contain" loading="lazy" />
  </div>;
const Partners = () => {
  return <section id="partners" className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">
          Trusted by <span className="gradient-text">Innovators</span>
        </h2>
        
        {/* Desktop infinite marquee */}
        <div className="relative w-full overflow-hidden hidden md:block">
          <div className="flex whitespace-nowrap">
            <div className="flex animate-marquee will-change-transform">
              {partnerLogos.map((logo, index) => <LogoItem key={`original-${index}`} src={logo.src} alt={logo.alt} />)}
              {partnerLogos.map((logo, index) => <LogoItem key={`duplicate-${index}`} src={logo.src} alt={logo.alt} aria-hidden="true" />)}
            </div>
          </div>
        </div>
        
        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-2 gap-6 max-w-sm mx-auto">
          {partnerLogos.slice(0, 4).map((logo, i) => <div key={`mobile-${i}`} className="flex justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
              <img src={logo.src} alt={logo.alt} className="max-h-16 max-w-full object-contain" loading="lazy" />
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold uppercase mb-6">
            Don't Wait for an Emergency.<br />
            <span className="gradient-text">Secure Your Family's Safety Today.</span>
          </h3>
          <a href="/early-access" className="inline-block bg-stealth-blue hover:bg-stealth-purple text-white rounded-md px-6 py-3 font-semibold transition-all
                     hover:scale-105 hover:shadow-[0_0_15px_rgba(86,204,242,0.5)] mt-4">
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
                <span className="text-[#CCCCCC]">NASSCOM COE IOT </span>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-4">
                <div className="flex">
                  <input type="email" placeholder="Email for safety tips" className="bg-stealth-black border border-stealth-indigo/30 rounded-l-md px-3 py-2 text-sm flex-grow focus:outline-none focus:border-stealth-blue" />
                  <button className="bg-stealth-blue hover:bg-stealth-purple text-white rounded-r-md px-3 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gradient-to-r from-stealth-purple via-stealth-blue to-stealth-purple opacity-30" />
          
          <div className="text-center text-[#CCCCCC] text-opacity-70 text-sm">© 2025 StealthEra. All rights reserved.</div>
        </div>
      </div>
    </section>;
};
export default Partners;