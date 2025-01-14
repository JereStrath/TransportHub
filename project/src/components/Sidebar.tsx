import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Truck, DollarSign, Bell, User } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Truck, label: 'Fleet Tracking', path: '/tracking' },
    { icon: DollarSign, label: 'Revenue', path: '/revenue' },
    { icon: Bell, label: 'Alerts', path: '/alerts' },
    { icon: User, label: 'Drivers', path: '/drivers' },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Truck className="w-8 h-8 text-blue-400" />
        <h1 className="text-white text-xl font-bold">TransportHub</h1>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;