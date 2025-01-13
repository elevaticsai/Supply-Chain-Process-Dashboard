import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ExpenseCategory } from '../types/dashboard';

interface ExpenseChartProps {
  data: ExpenseCategory[];
}

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Expense Tracking</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="budget" fill="#4F46E5" name="Budget" />
            <Bar dataKey="actual" fill="#10B981" name="Actual" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};