import React, { useState } from 'react';
import { Bell, Filter, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { MaintenanceAlert } from '../types';

const mockAlerts: MaintenanceAlert[] = [
  {
    id: '1',
    truckId: 'T001',
    type: 'maintenance',
    severity: 'high',
    message: 'Engine maintenance required - 500 miles overdue',
    date: new Date().toISOString()
  },
  {
    id: '2',
    truckId: 'T002',
    type: 'route-deviation',
    severity: 'medium',
    message: 'Vehicle deviated from planned route by 5 miles',
    date: new Date().toISOString()
  },
  {
    id: '3',
    truckId: 'T003',
    type: 'fuel-usage',
    severity: 'low',
    message: 'Abnormal fuel consumption detected',
    date: new Date().toISOString()
  }
];

const Alerts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'maintenance', 'route-deviation', 'fuel-usage'];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Alert Center</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Bell className="w-4 h-4" />
            Mark All Read
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </button>
        ))}
      </div>

      {/* Alerts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAlerts
          .filter(alert => selectedCategory === 'all' || alert.type === selectedCategory)
          .map(alert => (
            <div
              key={alert.id}
              className={`bg-white rounded-xl shadow-sm p-4 border-l-4 ${
                alert.severity === 'high'
                  ? 'border-red-500'
                  : alert.severity === 'medium'
                  ? 'border-yellow-500'
                  : 'border-blue-500'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className={`w-5 h-5 ${
                    alert.severity === 'high'
                      ? 'text-red-500'
                      : alert.severity === 'medium'
                      ? 'text-yellow-500'
                      : 'text-blue-500'
                  }`} />
                  <span className="font-semibold">
                    {alert.type.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs ${
                  alert.severity === 'high'
                    ? 'bg-red-100 text-red-800'
                    : alert.severity === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {alert.severity.toUpperCase()}
                </div>
              </div>
              <p className="text-gray-600 mb-3">{alert.message}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Truck: {alert.truckId}</span>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                    <Clock className="w-4 h-4" />
                    Snooze
                  </button>
                  <button className="flex items-center gap-1 text-green-500 hover:text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    Resolve
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Alerts;