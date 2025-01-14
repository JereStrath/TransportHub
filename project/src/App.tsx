import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import FleetTracking from './pages/FleetTracking';
import Revenue from './pages/Revenue';
import Alerts from './pages/Alerts';
import Drivers from './pages/Drivers';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tracking" element={<FleetTracking />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/drivers" element={<Drivers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;