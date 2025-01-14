import React from 'react';
import { Star, Award, TrendingUp, Clock, AlertTriangle } from 'lucide-react';
import { DriverPerformance } from '../types';

const mockDrivers: DriverPerformance[] = [
  {
    driverId: 'D001',
    name: 'John Doe',
    speedingEvents: 2,
    idleTime: 45,
    harshBraking: 1,
    score: 92
  },
  {
    driverId: 'D002',
    name: 'Jane Smith',
    speedingEvents: 0,
    idleTime: 30,
    harshBraking: 0,
    score: 98
  },
  {
    driverId: 'D003',
    name: 'Mike Johnson',
    speedingEvents: 3,
    idleTime: 60,
    harshBraking: 2,
    score: 85
  }
];

const Drivers = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Driver Management</h1>

      {/* Driver Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: 'Average Score', value: '91.6', icon: Star, color: 'text-yellow-500' },
          { title: 'Top Performer', value: 'Jane Smith', icon: Award, color: 'text-blue-500' },
          { title: 'Active Drivers', value: '15/18', icon: TrendingUp, color: 'text-green-500' },
          { title: 'Total Alerts', value: '3', icon: AlertTriangle, color: 'text-red-500' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Driver Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Driver Leaderboard</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-3">Driver</th>
                <th className="text-center pb-3">Safety Score</th>
                <th className="text-center pb-3">Speeding Events</th>
                <th className="text-center pb-3">Idle Time (min)</th>
                <th className="text-center pb-3">Harsh Braking</th>
                <th className="text-right pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockDrivers.map((driver) => (
                <tr key={driver.driverId} className="border-b last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {driver.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{driver.name}</p>
                        <p className="text-sm text-gray-500">{driver.driverId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className={`inline-flex items-center gap-1 ${
                      driver.score >= 90 ? 'text-green-500' :
                      driver.score >= 80 ? 'text-yellow-500' :
                      'text-red-500'
                    }`}>
                      <Star className="w-4 h-4" />
                      {driver.score}
                    </span>
                  </td>
                  <td className="text-center">{driver.speedingEvents}</td>
                  <td className="text-center">{driver.idleTime}</td>
                  <td className="text-center">{driver.harshBraking}</td>
                  <td className="text-right">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { time: '2h ago', event: 'Completed delivery to Boston', driver: 'John Doe' },
            { time: '4h ago', event: 'Started new route to Chicago', driver: 'Jane Smith' },
            { time: '6h ago', event: 'Maintenance check completed', driver: 'Mike Johnson' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">{activity.event}</p>
                <p className="text-sm text-gray-500">
                  {activity.driver} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drivers;