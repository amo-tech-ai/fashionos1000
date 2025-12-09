import React from 'react';
import { ArrowRight } from 'lucide-react';

const CAMPAIGNS = [
  {
    id: '1',
    title: "Summer Editorial '25",
    label: "Campaign",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    title: "Milan Fashion Week",
    label: "Runway",
    image: "https://images.unsplash.com/photo-1538329972958-465d6d216699?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    title: "Urban Noir",
    label: "Lookbook",
    image: "https://images.unsplash.com/photo-1550614000-4b9519e02c11?auto=format&fit=crop&q=80&w=800"
  }
];

export const Campaigns: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Featured Work</span>
            <h2 className="font-serif text-4xl text-dark">Latest Campaigns</h2>
          </div>
          <div className="flex items-center text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline group">
            Swipe to Explore <span className="ml-2 w-10 h-[1px] bg-black group-hover:w-16 transition-all duration-300"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAMPAIGNS.map((campaign) => (
            <div key={campaign.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20">
                   <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/30 backdrop-blur-sm px-2 py-1 rounded-sm">
                      {campaign.label}
                   </span>
                </div>
                {/* Hover Reveal Arrow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 scale-75 group-hover:scale-100">
                    <ArrowRight className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white mix-blend-difference absolute bottom-6 left-6 z-20 pointer-events-none drop-shadow-lg">
                {campaign.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};