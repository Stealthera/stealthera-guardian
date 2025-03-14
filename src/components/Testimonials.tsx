
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    title: "Midnight Emergency",
    quote: "StealthEra auto-detected Dad's heart attack and called an ambulance. 10 minutes later, it'd have been fatal.",
    author: "Rohan, Mumbai"
  },
  {
    title: "Remote Peace of Mind",
    quote: "I'm in Delhi, my parents in Kerala. StealthEra's alerts let me sleep.",
    author: "Ananya, Bangalore"
  },
  {
    title: "Dementia Safety",
    quote: "Mom wandered at 3 AM. StealthEra's geofencing saved her.",
    author: "Arjun, Chennai"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stealth-indigo/10 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-center mb-12 text-white">
          Real Stories, <span className="text-stealth-purple">Real Impact</span>
        </h2>
        
        <div className="mt-16">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="flex items-center justify-center">
                  <div className="bg-stealth-black border border-stealth-indigo/30 rounded-lg p-10 transition-all duration-300 max-w-2xl">
                    <h3 className="text-xl font-bold mb-4 text-stealth-blue uppercase">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-stealth-purple">— {testimonial.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-stealth-purple text-stealth-purple" />
            <CarouselNext className="right-0 border-stealth-purple text-stealth-purple" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
