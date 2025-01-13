import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const demandData = [
  { month: 'Jan', forecast: 3000, actual: 2800 },
  { month: 'Feb', forecast: 3200, actual: 3300 },
  { month: 'Mar', forecast: 3400, actual: 3200 },
  { month: 'Apr', forecast: 3600, actual: 3700 },
];

export const DemandSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Demand Forecast</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={demandData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="forecast" stroke="#4F46E5" name="Forecast" />
            <Line type="monotone" dataKey="actual" stroke="#10B981" name="Actual" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};