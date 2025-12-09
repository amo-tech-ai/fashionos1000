import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Camera, Activity, LogOut } from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Shoots', href: '/shoots', icon: Camera },
    { label: 'Command Center', href: '/command-center', icon: Activity },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-dark">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <Link to="/" className="font-serif text-xl font-bold tracking-tight">FashionOS.</Link>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 block mt-1">Creator Studio</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === item.href
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-black transition-colors">
            <LogOut className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8 justify-between">
           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
             {navItems.find(i => i.href === location.pathname)?.label || 'Dashboard'}
           </span>
           <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="User" className="w-full h-full object-cover" />
           </div>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;