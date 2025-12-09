import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Directory', href: '/directory' },
    { label: 'Events', href: '/events' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight">FashionOS.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className={`text-xs font-semibold uppercase tracking-widest hover:text-gray-600 transition-colors ${location.pathname === item.href ? 'text-black border-b-2 border-black pb-1' : 'text-gray-800'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-xs font-semibold uppercase tracking-widest hover:text-gray-600">Log In</Link>
          <Link to="/wizard">
            <Button variant="primary" className="!py-2 !px-5 !text-xs">Book a Shoot</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg flex flex-col space-y-4 animate-fade-in">
           {navLinks.map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className="text-sm font-medium uppercase tracking-widest" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link to="/dashboard" className="text-center text-sm font-medium uppercase tracking-widest">Log In</Link>
            <Link to="/wizard" onClick={() => setIsMobileMenuOpen(false)}>
              <Button fullWidth>Book a Shoot</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight block mb-6">FashionOS</span>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Connecting the fashion industry through AI-powered creativity and storytelling.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-4 h-4 text-gray-400 hover:text-black cursor-pointer" />
              <Twitter className="w-4 h-4 text-gray-400 hover:text-black cursor-pointer" />
              <Facebook className="w-4 h-4 text-gray-400 hover:text-black cursor-pointer" />
              <Linkedin className="w-4 h-4 text-gray-400 hover:text-black cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li><Link to="/directory" className="hover:text-black transition-colors">Directory</Link></li>
              <li><Link to="/events" className="hover:text-black transition-colors">Events</Link></li>
              <li><Link to="/wizard" className="hover:text-black transition-colors">Book a Shoot</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Ecommerce</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Social Media Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6">For Creators</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/dashboard" className="hover:text-black transition-colors">Dashboard</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Join Directory</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">© 2024 FashionOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-xs text-gray-400 hover:text-black">Privacy Policy</a>
             <a href="#" className="text-xs text-gray-400 hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};