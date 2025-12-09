import React from 'react';
import { Button } from './Button';
import { CheckCircle2, Play, Quote } from 'lucide-react';

export const DarkFeature: React.FC = () => {
  return (
    <section className="bg-[#0b0f19] text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Text Content */}
          <div className="lg:w-5/12 flex flex-col justify-center">
             <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Ecommerce Product <br/> Photography.</h2>
             <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Clean, high-fidelity product photography increases conversion and reduces returns. We provide styling, shooting, and retouching optimized for Shopify, Amazon, and luxury marketplaces.
             </p>
             
             <div className="space-y-4 mb-10">
                <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="text-sm font-bold mb-1">Consistent Lighting & Styling</h4>
                        <p className="text-xs text-gray-500">Preset light guides ensure every drop looks the same on the grid.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="text-sm font-bold mb-1">On-Model, Flat-Lay, or Ghost Mannequin</h4>
                        <p className="text-xs text-gray-500">Versatile shooting styles to match your brand guidelines.</p>
                    </div>
                </div>
             </div>

             <div>
                <Button variant="white" className="!text-xs">View Ecommerce Packages</Button>
             </div>
          </div>

          {/* Image Grid Right */}
          <div className="lg:w-7/12 flex gap-4 items-center">
             <div className="w-1/2 h-80 rounded-xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1560769619-01d0d0be1b87?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Shoe Product" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             </div>
             <div className="w-1/2 flex flex-col gap-4">
                 <div className="h-48 rounded-xl overflow-hidden relative group bg-gray-800">
                    <img src="https://images.unsplash.com/photo-1524592094714-db66eabc5d1c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" alt="Watch Product" />
                 </div>
                 {/* Decorative graphic element */}
                 <div className="h-24 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <span className="text-xs font-mono text-gray-500">RAW_ASSET_V2.CR3</span>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial: React.FC = () => {
    return (
        <section className="bg-black py-24 text-center px-6">
             <div className="max-w-3xl mx-auto">
                <Quote className="w-8 h-8 text-white mx-auto mb-8 opacity-50" />
                <h3 className="font-serif text-2xl md:text-4xl text-white mb-8 leading-snug">
                "We've trusted FashionOS Studio with our campaigns for 6+ years. They always deliver imagery that moves product."
                </h3>
                <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-sm tracking-wide">Cristina Álvarez</span>
                    <span className="text-gray-500 text-xs mt-1 uppercase tracking-widest">Creative Director, Veloire Eclipse</span>
                </div>
                <div className="mt-8">
                    <a href="#" className="text-[10px] text-gray-600 hover:text-white transition-colors">See more client feedback →</a>
                </div>
             </div>
        </section>
    )
}

export const BTS: React.FC = () => {
    return (
        <section className="relative h-[500px] w-full bg-gray-900 overflow-hidden group cursor-pointer">
             <img 
                src="https://images.unsplash.com/photo-1520607162513-77705e2e6c17?auto=format&fit=crop&q=80&w=1920" 
                alt="Behind the scenes camera" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105 transform"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Behind the scenes.</h2>
                <p className="text-gray-300 max-w-lg mb-8">A look into our process — from concept to runway-ready production.</p>
                <Button variant="white" className="!px-8 !py-3">Watch The Studio Tour</Button>
             </div>
        </section>
    )
}

export const CallToAction: React.FC = () => {
    return (
        <section className="bg-cream py-24 px-6">
             <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 md:p-16 text-left relative overflow-hidden">
                <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Bespoke Production</span>
                    <h2 className="font-serif text-4xl mb-6 text-dark">Need something a <br/> little more creative?</h2>
                    <p className="text-gray-500 max-w-lg mb-8 text-sm leading-relaxed">
                        Have a complex vision? We love the unusual. Bring us your wildest briefs for multi-day productions, exotic locations, or set builds.
                    </p>
                    
                    <div className="space-y-2 mb-8 text-sm text-gray-700 font-medium">
                        <p>· Full campaign development</p>
                        <p>· Concept, casting, and location scouting</p>
                        <p>· Multi-day, multi-location productions</p>
                    </div>

                    <Button variant="primary">Start a Custom Brief</Button>
                </div>

                {/* Decorative Pattern Right */}
                <div className="absolute top-0 right-0 w-1/3 h-full hidden md:block opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path fill="#000" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,19.1C51.6,30.1,41.8,40.1,30.8,45.7C19.8,51.3,7.6,52.4,-3.4,57.1C-14.4,61.8,-24.1,70,-33.3,66.5C-42.5,63.1,-51.1,47.9,-58.5,33.1C-65.9,18.3,-72,3.9,-69.1,-8.6C-66.2,-21.1,-54.3,-31.7,-42.6,-40.5C-30.8,-49.2,-19.2,-56.1,-5.9,-47.9C7.3,-39.8,14.6,-16.5,42.7,-62.9Z" transform="translate(100 100)" />
                    </svg>
                </div>
             </div>
        </section>
    )
}