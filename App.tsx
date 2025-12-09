import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Routes>
        {/* Public Marketing Routes */}
        <Route path="/" element={<MarketingLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="directory" element={<Directory />} />
          <Route path="events" element={<Events />} />
          <Route path="wizard" element={<Wizard />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private Dashboard Routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shoots" element={<Shoots />} />
          <Route path="command-center" element={<CommandCenter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;