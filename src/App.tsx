import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Utility
import { ScrollToTop } from './components/ScrollToTop';

// Layouts
import MarketingLayout from './layouts/MarketingLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Marketing Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Directory from './pages/Directory';
import Events from './pages/Events';
import Wizard from './pages/Wizard';
import About from './pages/About';

// Dashboard Pages
import Dashboard from './pages/Dashboard';
import Shoots from './pages/Shoots';
import CommandCenter from './pages/CommandCenter';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Marketing Routes */}
        <Route element={<MarketingLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="directory" element={<Directory />} />
          <Route path="events" element={<Events />} />
          <Route path="wizard" element={<Wizard />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shoots" element={<Shoots />} />
          <Route path="command-center" element={<CommandCenter />} />
        </Route>

        {/* 404 Catch-All */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-white text-center p-6">
            <div>
              <h1 className="font-serif text-4xl mb-4">404 - Page Not Found</h1>
              <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
              <Link to="/" className="inline-block bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-sm">Return Home</Link>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;