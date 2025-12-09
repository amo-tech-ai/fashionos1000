import React from 'react';
import { Button } from '../components/Button';

const WizardPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Start a Project</span>
        <h1 className="font-serif text-5xl md:text-6xl mb-8 text-dark">Book a Shoot.</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Tell us about your campaign. Our AI-powered wizard will help you define your scope, select talent, and get an estimated quote in minutes.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12 text-left inline-block w-full max-w-lg">
            <h3 className="font-bold text-lg mb-4">Wizard Steps:</h3>
            <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center mr-3">1</span>
                    Define shoot type (Campaign, Ecom, Lookbook)
                </li>
                <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-[10px] flex items-center justify-center mr-3">2</span>
                    Select mood & references
                </li>
                <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-[10px] flex items-center justify-center mr-3">3</span>
                    Choose talent & logistics
                </li>
            </ul>
        </div>

        <div className="block">
             <Button className="!px-12 !py-4">Start Wizard Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default WizardPage;