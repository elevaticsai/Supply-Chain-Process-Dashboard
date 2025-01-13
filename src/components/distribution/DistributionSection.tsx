import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const distributionData = [
  { name: 'North', value: 35 },
  { name: 'South', value: 25 },
  { name: 'East', value: 20 },
  { name: 'West', value: 20 },
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

export const DistributionSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Distribution by Region</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {distributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};