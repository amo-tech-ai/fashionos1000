import React from 'react';
import { Camera, Video, Search, ShoppingBag, MapPin, Monitor } from 'lucide-react';
import { Button } from './Button';

// SERVICES
export const Services: React.FC = () => {
    const services = [
        { icon: Camera, title: 'Campaigns', desc: 'Editorial-quality campaigns for new launches and seasonal stories.' },
        { icon: Monitor, title: 'Runway', desc: 'On-the-ground coverage that captures energy, details, and atmosphere.' },
        { icon: ShoppingBag, title: 'Ecommerce', desc: 'High-volume, consistent imagery optimized for online sales.' },
        { icon: Video, title: 'Video & Social', desc: 'Short-form video, reels, and behind-the-scenes content for social.' }
    ];

    return (
        <section id="services" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-8">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">What We Do</span>
                        <h2 className="font-serif text-3xl text-dark">Creative Services</h2>
                    </div>
                    <a href="#" className="hidden md:block text-[10px] font-bold uppercase tracking-widest border-b border-gray-300 hover:border-black pb-1 transition-colors">View All Services</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="group p-6 rounded-xl hover:bg-cream transition-colors duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center mb-6 transition-colors">
                                <s.icon className="w-4 h-4 text-black" />
                            </div>
                            <h3 className="font-serif text-lg font-bold mb-3">{s.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed mb-6 min-h-[40px]">{s.desc}</p>
                            <a href="#" className="text-[10px] font-bold uppercase tracking-wider flex items-center text-gray-400 group-hover:text-black transition-colors">
                                View Details <span className="ml-1 text-lg leading-none">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// DIRECTORY
export const Directory: React.FC = () => {
    const profiles = [
        { name: "Elena Rodriguez", role: "Photographer", rating: 4.9, reviews: 142, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400", tag: "Editorial" },
        { name: "Marcus Chen", role: "Stylist", rating: 5.0, reviews: 84, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", tag: "Runway" },
        { name: "Sarah Jenkins", role: "Model", rating: 4.8, reviews: 210, img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400", tag: "Commercial" },
        { name: "David O'Connor", role: "MUA", rating: 4.9, reviews: 96, img: "https://images.unsplash.com/photo-1500917293049-858e17fce14f?auto=format&fit=crop&q=80&w=400", tag: "Beauty" },
    ];

    return (
        <section id="directory" className="py-24 bg-cream/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 mb-16">
                     <div className="md:w-1/3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">The Network</span>
                        <h2 className="font-serif text-4xl mb-4 text-dark">Fashion Directory.</h2>
                        <p className="text-gray-500 text-sm mb-8">We curate a network of the best photographers, stylists, models, and MUAs in the industry. Find your next collaborator.</p>
                        
                        {/* Search Mock */}
                        <div className="relative mb-6">
                            <input type="text" placeholder="Search talent, services, or cities..." className="w-full bg-white border border-gray-200 pl-4 pr-12 py-3 text-xs rounded-md focus:outline-none focus:border-black transition-colors" />
                            <div className="absolute right-1 top-1 bottom-1 bg-black text-white px-3 flex items-center justify-center rounded-sm cursor-pointer">
                                <Search className="w-3 h-3" />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                             {['Photographers', 'Stylists', 'Models', 'MUAs', 'Paris', 'NYC'].map(tag => (
                                 <span key={tag} className="text-[10px] uppercase border border-gray-200 bg-white px-2 py-1 text-gray-500 rounded-sm cursor-pointer hover:border-black hover:text-black transition-colors">{tag}</span>
                             ))}
                        </div>
                     </div>

                     <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {profiles.slice(0, 3).map((p, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className="relative mb-4">
                                     <img src={p.img} alt={p.name} className="w-full aspect-[4/5] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500" />
                                     <span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm">{p.tag}</span>
                                </div>
                                <h4 className="font-serif text-lg leading-tight mb-1">{p.name}</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">{p.role}</p>
                                <div className="flex items-center gap-1">
                                    <div className="flex text-yellow-400 text-[10px]">
                                        {"★".repeat(5)}
                                    </div>
                                    <span className="text-[10px] text-gray-400">({p.reviews})</span>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
                
                <div className="text-center">
                    <Button variant="secondary" className="!text-xs !py-3 !px-8 bg-white">Browse Full Directory</Button>
                </div>
            </div>
        </section>
    )
}

// MARKETPLACE
export const Marketplace: React.FC = () => {
    return (
        <section id="marketplace" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                     <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Packages</span>
                     <h2 className="font-serif text-4xl text-dark">Fashion Marketplace.</h2>
                     <p className="text-gray-400 text-xs mt-4">Ready-made packages for emerging and established brands.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Lookbook Starter', price: '$2,500', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600' },
                        { title: 'Campaign Launch', price: '$5,800', img: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=600' },
                        { title: 'Ecommerce Scale', price: 'Custom Quote', img: 'https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&q=80&w=600' }
                    ].map((item, i) => (
                        <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer">
                             <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h3 className="font-serif text-2xl text-white mb-1">{item.title}</h3>
                                <p className="text-gray-300 text-xs font-mono mb-6">{item.price}</p>
                                <Button variant="white" className="w-full !py-2 !text-[10px]">View Package</Button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}