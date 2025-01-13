import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  value,
  trend,
  trendDirection,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-gray-50">{icon}</div>
        <div className={`flex items-center ${
          trendDirection === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {trendDirection === 'up' ? (
            <ArrowUpIcon className="w-4 h-4" />
          ) : (
            <ArrowDownIcon className="w-4 h-4" />
          )}
          <span className="ml-1 text-sm">{trend}</span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );
};