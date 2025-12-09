import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Content Left */}
          <div className="lg:w-5/12 flex flex-col justify-center animate-fade-in-up">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">FashionOS Studio</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-dark">
              Exceptional <br/>
              fashion <br/>
              <span className="italic text-gray-500">creativity.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              Modern imagery, storytelling, and production — designed for designers, creators, and brands who want work that stands out.
            </p>
            
            <div className="space-y-3 mb-10">
              {['Campaign & editorial production', 'Runway & event coverage', 'Ecommerce & social content'].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3"></span>
                  <span className="text-sm font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Explore Services</Button>
              <Button variant="secondary">Browse Directory</Button>
            </div>
          </div>

          {/* Collage Right */}
          <div className="lg:w-7/12 relative h-[600px] hidden md:block">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="col-span-1 h-full pt-12">
                 <div className="w-full h-[90%] bg-gray-200 rounded-2xl overflow-hidden relative shadow-xl transform transition-transform hover:scale-[1.01] duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1539109136881-3be411678772?auto=format&fit=crop&q=80&w=800" 
                      alt="Fashion Model Editorial" 
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
              <div className="col-span-1 h-full flex flex-col gap-4">
                <div className="h-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                      src="https://images.unsplash.com/photo-1509631179647-b8491715002d?auto=format&fit=crop&q=80&w=600" 
                      alt="Fashion Texture Detail" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="h-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-lg mt-8 transform -translate-x-12 border-4 border-white">
                  <img 
                      src="https://images.unsplash.com/photo-1485230948080-929312328512?auto=format&fit=crop&q=80&w=600" 
                      alt="Fashion Model Abstract" 
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image (Replacement for grid) */}
          <div className="md:hidden w-full h-96 rounded-xl overflow-hidden shadow-lg mt-8">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be411678772?auto=format&fit=crop&q=80&w=800" 
              alt="Fashion Model Main" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};