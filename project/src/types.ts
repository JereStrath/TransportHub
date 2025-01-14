export interface TruckData {
  id: string;
  location: {
    lat: number;
    lng: number;
  };
  status: 'active' | 'maintenance' | 'idle';
  driver: string;
  route: string;
  fuelLevel: number;
  speed: number;
}

export interface RevenueData {
  date: string;
  amount: number;
  truckId: string;
  cargoType: string;
}

export interface MaintenanceAlert {
  id: string;
  truckId: string;
  type: 'maintenance' | 'route-deviation' | 'fuel-usage';
  severity: 'low' | 'medium' | 'high';
  message: string;
  date: string;
}

export interface DriverPerformance {
  driverId: string;
  name: string;
  speedingEvents: number;
  idleTime: number;
  harshBraking: number;
  score: number;
}