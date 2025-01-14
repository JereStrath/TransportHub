import React from 'react';
import { MaintenanceAlert } from '../types';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

interface AlertCardProps {
  alert: MaintenanceAlert;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'maintenance':
        return AlertCircle;
      case 'route-deviation':
        return AlertTriangle;
      default:
        return Info;
    }
  };

  const Icon = getIcon(alert.type);
  const severityColor = getSeverityColor(alert.severity);

  return (
    <div className={`p-4 rounded-lg border ${severityColor} mb-3`}>
      <div className="flex items-start">
        <Icon className="w-5 h-5 mr-3 mt-0.5" />
        <div>
          <h4 className="font-medium mb-1">
            {alert.type.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h4>
          <p className="text-sm">{alert.message}</p>
          <p className="text-xs mt-1 opacity-75">
            Truck ID: {alert.truckId} • {new Date(alert.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;