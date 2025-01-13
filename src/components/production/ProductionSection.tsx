import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const productionData = [
  { month: 'Jan', target: 4000, actual: 3800 },
  { month: 'Feb', target: 3500, actual: 3600 },
  { month: 'Mar', target: 4200, actual: 4100 },
  { month: 'Apr', target: 3800, actual: 3900 },
];

export const ProductionSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Production Overview</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={productionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="target" fill="#4F46E5" name="Target" />
            <Bar dataKey="actual" fill="#10B981" name="Actual" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};