import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Check, Camera, ShoppingBag, Clapperboard, Calendar as CalendarIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Step = 1 | 2 | 3;

const WizardPage: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleNext = () => {
    if (step < 3) setStep((s) => (s + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-16 relative">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
             {[1, 2, 3].map((s) => (
                 <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${step >= s ? 'bg-black text-white' : 'bg-white border-2 border-gray-200 text-gray-300'}`}>
                     {step > s ? <Check className="w-4 h-4" /> : s}
                 </div>
             ))}
        </div>

        <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">
                {step === 1 ? 'Step 01: Concept' : step === 2 ? 'Step 02: Logistics' : 'Step 03: Confirmation'}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-dark">
                {step === 1 ? 'Define your shoot.' : step === 2 ? 'When & Where?' : 'Request Received.'}
            </h1>
        </div>

        {/* STEP 1: TYPE SELECTION */}
        {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                {[
                    { id: 'campaign', label: 'Campaign', icon: Camera, desc: 'Editorial storytelling for brand awareness.' },
                    { id: 'ecommerce', label: 'Ecommerce', icon: ShoppingBag, desc: 'High-volume product photography on white.' },
                    { id: 'video', label: 'Video Production', icon: Clapperboard, desc: 'Short-form social content or brand films.' }
                ].map((type) => (
                    <div 
                        key={type.id} 
                        onClick={() => setSelectedType(type.id)}
                        className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedType === type.id ? 'border-black bg-gray-50' : 'border-gray-100 bg-white hover:border-gray-300'}`}
                    >
                        <type.icon className={`w-8 h-8 mb-6 ${selectedType === type.id ? 'text-black' : 'text-gray-400'}`} />
                        <h3 className="font-bold text-lg mb-2">{type.label}</h3>
                        <p className="text-sm text-gray-500">{type.desc}</p>
                    </div>
                ))}
            </div>
        )}

        {/* STEP 2: DETAILS FORM */}
        {step === 2 && (
            <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm animate-fade-in">
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Project Title</label>
                        <input type="text" placeholder="e.g., Summer 2025 Lookbook" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Preferred Date</label>
                        <div className="relative">
                            <input type="date" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors" />
                            <CalendarIcon className="absolute right-0 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Additional Notes</label>
                        <textarea rows={4} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-black transition-colors resize-none" placeholder="Describe your vision, location requirements, or specific talent needs..."></textarea>
                    </div>
                </div>
            </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 3 && (
            <div className="text-center max-w-lg mx-auto animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10 text-green-600" />
                </div>
                <p className="text-lg text-gray-600 mb-8">
                    Thank you! We've received your brief for a <span className="font-bold text-black">{selectedType || 'project'}</span>. An art director will review your requirements and send a preliminary quote within 24 hours.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/">
                        <Button variant="secondary">Back Home</Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button>View in Dashboard</Button>
                    </Link>
                </div>
            </div>
        )}

        {/* Navigation Buttons */}
        {step < 3 && (
            <div className="flex justify-between max-w-xl mx-auto mt-12">
                <button 
                    onClick={handleBack}
                    className={`flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
                <Button 
                    onClick={handleNext} 
                    disabled={step === 1 && !selectedType}
                    className={step === 1 && !selectedType ? 'opacity-50 cursor-not-allowed' : ''}
                >
                    {step === 2 ? 'Submit Request' : 'Next Step'} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        )}

      </div>
    </div>
  );
};

export default WizardPage;