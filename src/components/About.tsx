import React from 'react';
import { Camera, Calendar, Palette } from 'lucide-react';
import { Button } from './Button';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl mb-6">A studio you can trust.</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            We help fashion creators, designers, and brands bring powerful visual stories to life. From campaigns and editorials to runway and ecommerce, we combine creativity and production expertise to deliver exceptional results — every time.
            </p>
        </div>

        {/* Large Banner Image */}
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl relative">
            <img 
                src="https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?auto=format&fit=crop&q=80&w=1600" 
                alt="Studio Wide Shot" 
                className="w-full h-full object-cover"
            />
             {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-10 px-4 md:px-12">
            {[
                {
                    icon: Palette,
                    title: "On-set Creative Direction",
                    desc: "Our art directors work with you to ensure every shot aligns with your campaign vision."
                },
                {
                    icon: Camera,
                    title: "Rapid Retouching",
                    desc: "First proofs in 24 hours. Final assets delivered ready for print and digital channels."
                },
                {
                    icon: Calendar,
                    title: "Brand Consistency",
                    desc: "We maintain your visual identity across lookbooks, social, and ecommerce."
                }
            ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-black">
                        <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
            ))}
        </div>

        <div className="flex justify-center mt-12">
            <Button variant="secondary" className="!px-8">View Studio Services</Button>
        </div>
      </div>
    </section>
  );
};

export const AboutHeritage: React.FC = () => {
    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                         <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=800" 
                                alt="Fashion History" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                         </div>
                         <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                         <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Our Heritage</span>
                        <h2 className="font-serif text-5xl mb-8 leading-tight">20+ years in the fashion industry.</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            From boutique labels to Fortune 500 brands, we've mastered the art of capturing fashion that sells. Our extensive portfolio includes work for fashion houses, beauty brands, jewelry designers, and lifestyle companies across the globe.
                        </p>
                        
                        <div className="space-y-4 mb-10">
                            {[
                                { icon: "🌍", text: "Global runway coverage" },
                                { icon: "🧵", text: "Campaigns for independent labels" },
                                { icon: "🛍️", text: "Ecommerce & catalog production" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white/50 p-3 rounded-lg border border-gray-100">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-sm font-semibold">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">See Client Stories →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}