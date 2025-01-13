import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const inventoryData = [
  { material: 'Raw A', current: 85, target: 100 },
  { material: 'Raw B', current: 95, target: 100 },
  { material: 'Raw C', current: 70, target: 100 },
  { material: 'Raw D', current: 90, target: 100 },
];

export const MaterialsInventory: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Inventory Levels</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={inventoryData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="material" type="category" />
            <Tooltip />
            <Bar dataKey="current" fill="#4F46E5" name="Current" />
            <Bar dataKey="target" fill="#10B981" name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};