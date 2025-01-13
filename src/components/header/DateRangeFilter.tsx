import React from 'react';
import { Calendar } from 'lucide-react';

export const DateRangeFilter: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-md px-3 py-2">
      <Calendar className="w-4 h-4 text-gray-500" />
      <select className="text-sm text-gray-600 bg-transparent border-none focus:ring-0">
        <option value="7d">Last 7 days</option>
        <option value="30d">Last 30 days</option>
        <option value="90d">Last 90 days</option>
        <option value="12m">Last 12 months</option>
      </select>
    </div>
  );
};