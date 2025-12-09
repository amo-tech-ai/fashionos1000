import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Who We Are</span>
        <h1 className="font-serif text-5xl md:text-6xl mb-8 text-dark">About FashionOS.</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          FashionOS is the intersection of technology and high fashion. We streamline the chaotic production process into a unified operating system for creativity.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="font-bold text-lg mb-4">Our Mission:</h3>
            <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mr-3"></span>
                    Empower independent designers with enterprise-grade production tools.
                </li>
                <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mr-3"></span>
                    Create a transparent, fair marketplace for creative talent.
                </li>
                <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mr-3"></span>
                    Reduce waste and inefficiency in fashion production.
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;