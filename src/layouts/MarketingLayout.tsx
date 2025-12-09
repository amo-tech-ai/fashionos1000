import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';

const MarketingLayout: React.FC = () => {
  return (
    <div className="font-sans antialiased text-dark bg-white selection:bg-black selection:text-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;