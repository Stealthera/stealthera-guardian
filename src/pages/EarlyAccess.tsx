
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EarlyAccessForm from '@/components/EarlyAccessForm';

const EarlyAccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-stealth-black flex flex-col">
      <Helmet>
        <title>Early Access | StealthEra</title>
        <meta name="description" content="Join the StealthEra early access program. Be among the first to experience revolutionary AI-powered eldercare." />
      </Helmet>
      
      <header className="py-4 px-6 border-b border-stealth-indigo/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="gradient-text font-poppins font-semibold text-xl uppercase">StealthEra</div>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-[#F0F0F0] hover:text-stealth-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4 uppercase">
              Get <span className="gradient-text">Early Access</span>
            </h1>
            <p className="text-[#CCCCCC] max-w-xl mx-auto">
              Be among the first to experience StealthEra's revolutionary eldercare technology. 
              Fill in your details below to join our priority waiting list.
            </p>
          </div>
          
          <EarlyAccessForm />
        </div>
      </main>
      
      <footer className="py-6 px-4 border-t border-stealth-indigo/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-[#CCCCCC] text-opacity-70 text-sm">
            © 2023 StealthEra. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EarlyAccess;
