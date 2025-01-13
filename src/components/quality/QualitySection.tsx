import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const qualityData = [
  { week: 'W1', defects: 12, resolved: 10 },
  { week: 'W2', defects: 15, resolved: 13 },
  { week: 'W3', defects: 8, resolved: 8 },
  { week: 'W4', defects: 10, resolved: 9 },
];

export const QualitySection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Quality Metrics</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={qualityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="defects" fill="#EF4444" name="Defects" />
            <Bar dataKey="resolved" fill="#10B981" name="Resolved" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};