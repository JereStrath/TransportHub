import React, { useState } from 'react';
import { MapPin, Clock, AlertTriangle, Settings } from 'lucide-react';
import { TruckData } from '../types';

// Mock data for demonstration
const mockTrucks: TruckData[] = [
  {
    id: 'T001',
    location: { lat: 40.7128, lng: -74.0060 },
    status: 'active',
    driver: 'John Doe',
    route: 'NYC-BOS',
    fuelLevel: 75,
    speed: 65
  },
  // Add more mock trucks as needed
];

const FleetTracking = () => {
  const [selectedTruck, setSelectedTruck] = useState<string | null>(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fleet Tracking</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with truck list */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4">
          <h2 className="font-semibold mb-4">Active Trucks</h2>
          <div className="space-y-3">
            {mockTrucks.map(truck => (
              <div
                key={truck.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedTruck === truck.id
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedTruck(truck.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{truck.id}</p>
                    <p className="text-sm text-gray-500">{truck.driver}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    truck.status === 'active' ? 'bg-green-100 text-green-800' :
                    truck.status === 'maintenance' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {truck.status}
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{truck.route}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>ETA: 2h 30m</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-4 min-h-[600px]">
          <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
            <p className="text-gray-500">Map Integration Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Bottom panel for alerts and stats */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          <h2 className="font-semibold">Active Alerts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Alert cards would go here */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm font-medium">Extended Idle Time</p>
            <p className="text-xs text-gray-500 mt-1">Truck T001 - 15 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetTracking;