import React from 'react';
import { Calendar, Truck, AlertCircle } from 'lucide-react';

const deliveries = [
  { id: 1, material: 'Raw Material A', supplier: 'Supplier X', date: '2024-03-20', status: 'On Time' },
  { id: 2, material: 'Raw Material B', supplier: 'Supplier Y', date: '2024-03-22', status: 'Delayed' },
  { id: 3, material: 'Raw Material C', supplier: 'Supplier Z', date: '2024-03-25', status: 'On Time' },
];

export const MaterialsDelivery: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Deliveries</h2>
      <div className="space-y-4">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center space-x-4">
              <Truck className="w-5 h-5 text-blue-500" />
              <div>
                <p className="font-medium text-gray-900">{delivery.material}</p>
                <p className="text-sm text-gray-600">{delivery.supplier}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{delivery.date}</span>
              </div>
              <div className={`flex items-center space-x-1 ${
                delivery.status === 'On Time' ? 'text-green-500' : 'text-red-500'
              }`}>
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{delivery.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};