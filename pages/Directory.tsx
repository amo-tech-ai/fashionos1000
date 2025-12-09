import React from 'react';
import { Button } from '../components/Button';

const DirectoryPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">The Network</span>
        <h1 className="font-serif text-5xl md:text-6xl mb-8 text-dark">Fashion Directory.</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          A curated list of industry professionals. Connect with top-tier photographers, models, stylists, and makeup artists verified by FashionOS.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="font-bold text-lg mb-4">Coming Soon Features:</h3>
            <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mr-3"></span>
                    Advanced filtering by location, rate, and style
                </li>
                <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mr-3"></span>
                    Direct messaging and availability checks
                </li>
                <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mr-3"></span>
                    Talent verification badges and review system
                </li>
            </ul>
        </div>

        <Button>Join the Directory</Button>
      </div>
    </div>
  );
};

export default DirectoryPage;